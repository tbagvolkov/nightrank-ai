import type { MetadataRoute } from "next";
import { cities } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nightrankai.com";

  const makeUrl = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  ) => ({
    url: `${baseUrl}${path}`,
    changeFrequency,
    priority,
  });

  const mainPages = [
    makeUrl("/", 1.0, "weekly"),
    makeUrl("/ai", 0.95, "weekly"),
    makeUrl("/cams", 0.9, "weekly"),
    makeUrl("/dating", 0.9, "weekly"),
    makeUrl("/comparatifs", 0.9, "weekly"),
    makeUrl("/blog", 0.9, "weekly"),
  ];

  const companyPages = [
    "/company",
    "/company/contact",
    "/company/faq",
    "/company/methodology",
    "/company/editorial-policy",
    "/company/affiliate-disclosure",
    "/company/privacy",
    "/company/terms",
    "/company/dmca",
    "/company/adults-only",
  ].map((page) => makeUrl(page, 0.75, "monthly"));

  const blogSlugs = [
    "compagnons-ia-vie-privee-quebec",
    "joi-ai-quebec",
    "ourdream-ai-quebec",
    "candy-ai-quebec",
    "darlink-ai-quebec",
    "lovescape-quebec",

    "cam-to-cam-quebec",
    "jerkmate-quebec",
    "livejasmin-quebec",
    "bongacams-quebec",
    "imlive-quebec",
    "liveprivates-quebec",
    "jerkmate-vs-livejasmin",
    "bongacams-vs-jerkmate",
    "livejasmin-vs-bongacams",

    "choisir-site-rencontre",
    "adultfriendfinder-vs-sexmessenger",
    "dating-canada",
    "fling-avis-quebec",
    "waystomeet-avis-quebec",

    "sex-emulator-jeu-pc-adulte",
    "hentai-heroes-avis-quebec",
    "harem-villa-avis-quebec",
    "comix-harem-avis-quebec",
    "pornstar-harem-avis-quebec",
  ];

  const blogPages = blogSlugs.map((slug) =>
    makeUrl(`/blog/${slug}`, 0.8, "weekly")
  );

  const offerSlugs = [
    "jerkmate",
    "livejasmin",
    "bongacams",
    "adultfriendfinder",
    "sexmessenger",
    "bbwfun",
    "sexemulator",
    "hentaiheroes",
    "comixharem",
  ];

  const offerPages = offerSlugs.map((slug) =>
    makeUrl(`/offres/${slug}`, 0.85, "weekly")
  );

  const comparisonPages = [
    "meilleurs-sites-webcams-quebec",
    "top-rencontres-adultes-quebec",
    "gaming-adulte-quebec",
  ].map((slug) => makeUrl(`/comparatifs/${slug}`, 0.85, "weekly"));

  const priorityCities = cities.filter((city) =>
    ["montreal", "quebec", "laval", "gatineau", "sherbrooke"].includes(city.slug)
  );

  const webcamPages = priorityCities.map((city) =>
    makeUrl(`/webcam/${city.slug}`, 0.7, "monthly")
  );

  const datingPages = priorityCities.map((city) =>
    makeUrl(`/dating/${city.slug}`, 0.7, "monthly")
  );

  return [
    ...mainPages,
    ...companyPages,
    ...blogPages,
    ...offerPages,
    ...comparisonPages,
    ...webcamPages,
    ...datingPages,
  ];
}
