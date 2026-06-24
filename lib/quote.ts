export const cleaningServiceOptions = [
  "Standard Clean",
  "Deep Clean",
  "Move-In / Move-Out",
  "Recurring Cleaning",
  "Not sure yet",
] as const;

export const sqftOptions = [
  "Under 1,000 sq ft",
  "1,000 - 1,499 sq ft",
  "1,500 - 2,499 sq ft",
  "2,500 - 3,499 sq ft",
  "3,500+ sq ft",
  "Not sure",
] as const;

export const referralSourceOptions = [
  "Google search",
  "Facebook",
  "Friend or family",
  "Neighbor",
  "Yard sign / flyer",
  "Other",
] as const;

export const contactMethodOptions = [
  "Phone call",
  "Email",
  "Text message",
  "Either is fine",
] as const;

export type CleaningService = (typeof cleaningServiceOptions)[number];
export type SqftRange = (typeof sqftOptions)[number];
export type ReferralSource = (typeof referralSourceOptions)[number];
export type ContactMethod = (typeof contactMethodOptions)[number];
