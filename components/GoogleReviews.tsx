"use client";

import { useEffect, useState } from "react";

interface Review {
  id: string;
  author: string;
  authorUrl: string | null;
  authorPhoto: string | null;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime: string | null;
}

interface GoogleReviewsData {
  businessName: string;
  rating: number | null;
  totalReviews: number;
  googleMapsUrl: string | null;
  reviews: Review[];
}

interface GoogleReviewsProps {
  maxReviews?: number;
  title?: string;
  showHeader?: boolean;
  showAuthorPhotos?: boolean;
  className?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 24 24"
          className={`h-5 w-5 ${
            star <= Math.round(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
          aria-hidden="true"
        >
          <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.32l-5.8 3.05 1.11-6.47-4.7-4.58 6.49-.94L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.39a4.61 4.61 0 0 1-2 3.02v2.51h3.24c1.9-1.75 2.97-4.33 2.97-7.37z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.97-.9 6.63-2.4l-3.24-2.51c-.9.6-2.05.96-3.39.96-2.6 0-4.8-1.76-5.59-4.12H3.06v2.59A10 10 0 0 0 12 22z"
      />
      <path
        fill="#FBBC05"
        d="M6.41 13.93A6.02 6.02 0 0 1 6.09 12c0-.67.11-1.32.32-1.93V7.48H3.06A10 10 0 0 0 2 12c0 1.61.39 3.14 1.06 4.52l3.35-2.59z"
      />
      <path
        fill="#EA4335"
        d="M12 5.95c1.47 0 2.79.51 3.83 1.5l2.87-2.87A9.64 9.64 0 0 0 12 2a10 10 0 0 0-8.94 5.48l3.35 2.59C7.2 7.71 9.4 5.95 12 5.95z"
      />
    </svg>
  );
}

function ReviewCard({
  review,
  showAuthorPhotos,
}: {
  review: Review;
  showAuthorPhotos: boolean;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          {showAuthorPhotos && review.authorPhoto ? (
            <img
              src={review.authorPhoto}
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-base font-semibold text-gray-700">
              {review.author.charAt(0).toUpperCase()}
            </div>
          )}

          <div className="min-w-0">
            {review.authorUrl ? (
              <a
                href={review.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block truncate font-semibold text-gray-900 hover:underline"
              >
                {review.author}
              </a>
            ) : (
              <p className="truncate font-semibold text-gray-900">
                {review.author}
              </p>
            )}

            {review.relativeTime && (
              <p className="mt-0.5 text-sm text-gray-500">
                {review.relativeTime}
              </p>
            )}
          </div>
        </div>

        <GoogleLogo />
      </div>

      <StarRating rating={review.rating} />

      {review.text && (
        <p className="mt-4 flex-1 leading-7 text-gray-700">
          &ldquo;{review.text}&rdquo;
        </p>
      )}
    </article>
  );
}

export default function GoogleReviews({
  maxReviews = 3,
  title = "What Our Customers Say",
  showHeader = true,
  showAuthorPhotos = true,
  className = "",
}: GoogleReviewsProps) {
  const [data, setData] = useState<GoogleReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function getReviews() {
      try {
        const response = await fetch("/api/google-reviews");

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const reviewData: GoogleReviewsData = await response.json();

        if (!cancelled) {
          setData(reviewData);
        }
      } catch (error) {
        console.error("Failed to load Google reviews:", error);

        if (!cancelled) {
          setError(true);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    getReviews();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <section className={`py-16 ${className}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-64 animate-pulse rounded-2xl bg-gray-100"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !data || data.reviews.length === 0) {
    return null;
  }

  const reviews = data.reviews.slice(0, maxReviews);

  return (
    <section className={`py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Google Reviews
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>

            {data.rating !== null && (
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                <span className="text-lg font-bold text-gray-900">
                  {data.rating.toFixed(1)}
                </span>

                <StarRating rating={data.rating} />

                <span className="text-gray-500">
                  Based on {data.totalReviews.toLocaleString()} reviews
                </span>

                <GoogleLogo />
              </div>
            )}
          </div>
        )}

        <div
          className={`grid gap-6 ${
            reviews.length === 1
              ? "mx-auto max-w-xl"
              : reviews.length === 2
                ? "mx-auto max-w-4xl md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              showAuthorPhotos={showAuthorPhotos}
            />
          ))}
        </div>

        {data.googleMapsUrl && (
          <div className="mt-10 text-center">
            <a
              href={data.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              <GoogleLogo />
              View all reviews on Google
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
