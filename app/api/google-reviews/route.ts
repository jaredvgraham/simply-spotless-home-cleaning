import { NextResponse } from "next/server";

export const revalidate = 86400; // Cache for 24 hours

interface GoogleReview {
  name?: string;
  relativePublishTimeDescription?: string;
  rating?: number;
  text?: {
    text?: string;
    languageCode?: string;
  };
  originalText?: {
    text?: string;
    languageCode?: string;
  };
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
  publishTime?: string;
}

interface GooglePlaceResponse {
  id?: string;
  displayName?: {
    text?: string;
    languageCode?: string;
  };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GoogleReview[];
}

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey) {
      console.error("Missing GOOGLE_PLACES_API_KEY");

      return NextResponse.json(
        { error: "Google Places API key is not configured." },
        { status: 500 },
      );
    }

    if (!placeId) {
      console.error("Missing GOOGLE_PLACE_ID");

      return NextResponse.json(
        { error: "Google Place ID is not configured." },
        { status: 500 },
      );
    }

    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": [
            "id",
            "displayName",
            "rating",
            "userRatingCount",
            "googleMapsUri",
            "reviews",
          ].join(","),
        },

        // Revalidate Google's data once per day.
        next: {
          revalidate: 86400,
        },
      },
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error(`Google Places API error: ${response.status}`, errorText);

      return NextResponse.json(
        {
          error: "Failed to fetch Google reviews.",
        },
        {
          status: response.status,
        },
      );
    }

    const place: GooglePlaceResponse = await response.json();

    const reviews =
      place.reviews?.map((review) => ({
        id:
          review.name ??
          `${review.authorAttribution?.displayName}-${review.publishTime}`,

        author: review.authorAttribution?.displayName ?? "Google User",

        authorUrl: review.authorAttribution?.uri ?? null,

        authorPhoto: review.authorAttribution?.photoUri ?? null,

        rating: review.rating ?? 5,

        text: review.text?.text ?? review.originalText?.text ?? "",

        relativeTime: review.relativePublishTimeDescription ?? "",

        publishTime: review.publishTime ?? null,
      })) ?? [];

    return NextResponse.json({
      businessName: place.displayName?.text ?? "",
      rating: place.rating ?? null,
      totalReviews: place.userRatingCount ?? 0,
      googleMapsUrl: place.googleMapsUri ?? null,
      reviews,
    });
  } catch (error) {
    console.error("Google Reviews API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong while fetching Google reviews.",
      },
      {
        status: 500,
      },
    );
  }
}
