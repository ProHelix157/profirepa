export type GoogleReview = {
  rating: number;
  author: string;
  authorPhoto?: string;
  when: string;
  text: string;
};

export type ReviewData = {
  rating: number;
  count: number;
  mapsUri: string;
  reviews: GoogleReview[];
};

const FALLBACK: ReviewData = {
  rating: 4.9,
  count: 100,
  mapsUri: "https://maps.app.goo.gl/uRV38CchWzfrGri36",
  reviews: [],
};

export async function getReviews(): Promise<ReviewData> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return FALLBACK;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews,googleMapsUri",
      },
      // refresh once a day
      next: { revalidate: 86400 },
    });
    if (!res.ok) return FALLBACK;
    const data = await res.json();
    type ApiReview = {
      rating?: number;
      text?: { text?: string };
      relativePublishTimeDescription?: string;
      authorAttribution?: { displayName?: string; photoUri?: string };
    };
    const reviews: GoogleReview[] = ((data.reviews ?? []) as ApiReview[])
      .filter((r) => (r.text?.text ?? "").trim().length > 0)
      .map((r) => ({
        rating: r.rating ?? 5,
        author: r.authorAttribution?.displayName ?? "Google user",
        authorPhoto: r.authorAttribution?.photoUri,
        when: r.relativePublishTimeDescription ?? "",
        text: r.text?.text ?? "",
      }));
    return {
      rating: data.rating ?? FALLBACK.rating,
      count: data.userRatingCount ?? FALLBACK.count,
      mapsUri: data.googleMapsUri ?? FALLBACK.mapsUri,
      reviews,
    };
  } catch {
    return FALLBACK;
  }
}
