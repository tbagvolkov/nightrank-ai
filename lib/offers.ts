export type Offer = {
  slug: string;

  name: string;

  category: "ai" | "webcam" | "dating" | "gaming";

  rating: number;

  affiliate: string;

  image: string;

  description: string;

  pros: string[];

  cons: string[];

  keywords: string[];

  cities: boolean;
};

export const offers: Offer[] = [

];