import { offers, Offer } from "./offers";

export function getOffers(): Offer[] {
  return offers;
}

export function getOffer(slug: string): Offer | undefined {
  return offers.find((offer) => offer.slug === slug);
}

export function getOffersByCategory(
  category: Offer["category"]
): Offer[] {
  return offers.filter((offer) => offer.category === category);
}

export function getTopRatedOffers(
  category?: Offer["category"]
): Offer[] {
  const list = category
    ? offers.filter((offer) => offer.category === category)
    : offers;

  return [...list].sort((a, b) => b.rating - a.rating);
}