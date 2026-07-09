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
  {
    slug: "jerkmate",
    name: "Jerkmate",
    category: "webcam",
    rating: 4.8,
    affiliate:
      "https://t.ajrkmx1.com/197466/6224/0?po=6533&aff_sub5=SF_006OG000004lmDN",
    image: "/offres/jerkmate.png",
    description:
      "Plateforme webcam moderne, populaire au Québec et au Canada, idéale pour une expérience rapide et personnalisée.",
    pros: [
      "Interface moderne",
      "Bonne expérience mobile",
      "Plateforme populaire",
      "Recommandation globale NightRank AI",
    ],
    cons: [
      "Certaines fonctions peuvent être payantes",
      "Expérience variable selon les profils disponibles",
    ],
    keywords: ["Jerkmate Québec", "webcam Québec", "cam live", "cam to cam"],
    cities: true,
  },

  {
    slug: "livejasmin",
    name: "LiveJasmin",
    category: "webcam",
    rating: 4.7,
    affiliate:
      "https://ctwmsg.com/?performerName=&siteId=jasmin&categoryName=girl&pageName=listpage&prm[psid]=tbagvolkov&prm[pstool]=205_1&prm[psprogram]=revs&prm[campaign_id]=&subAffId=",
    image: "/offres/livejasmin.png",
    description:
      "Plateforme webcam premium reconnue internationalement, adaptée aux visiteurs qui recherchent une expérience plus haut de gamme.",
    pros: [
      "Image premium",
      "Marque très connue",
      "Interface professionnelle",
      "Bonne alternative à Jerkmate",
    ],
    cons: [
      "Moins direct que certaines plateformes modernes",
      "Peut sembler plus premium que simple",
    ],
    keywords: ["LiveJasmin Québec", "webcam premium", "cam live Canada"],
    cities: true,
  },

  {
    slug: "bongacams",
    name: "BongaCams",
    category: "webcam",
    rating: 4.5,
    affiliate:
      "https://t.acrsmartcam.com/197466/7683/0?po=6533&aff_sub5=SF_006OG000004lmDN",
    image: "/offres/bongacams.png",
    description:
      "Plateforme webcam connue pour sa grande variété de profils et de catégories, utile pour comparer plusieurs styles.",
    pros: [
      "Très grande variété",
      "Nombreuses catégories",
      "Plateforme connue",
      "Bonne option de découverte",
    ],
    cons: [
      "Interface parfois plus chargée",
      "Moins premium que LiveJasmin",
    ],
    keywords: ["BongaCams Québec", "webcam Canada", "cam live Québec"],
    cities: true,
  },

  {
    slug: "adultfriendfinder",
    name: "AdultFriendFinder",
    category: "dating",
    rating: 4.8,
    affiliate:
      "https://t.crdtg2.com/197466/5165?aff_sub5=SF_006OG000004lmDN",
    image: "/offres/adultfriendfinder.png",
    description:
      "Plateforme de rencontres adultes connue, utile pour les visiteurs qui veulent une option généraliste avec une large audience.",
    pros: [
      "Très connue",
      "Audience importante",
      "Bon choix généraliste",
      "Pertinent pour le Québec et le Canada",
    ],
    cons: [
      "Expérience plus généraliste",
      "Peut ne pas convenir aux visiteurs cherchant une niche précise",
    ],
    keywords: ["AdultFriendFinder Québec", "rencontre adulte Québec", "dating adulte"],
    cities: true,
  },

  {
    slug: "sexmessenger",
    name: "Sex Messenger",
    category: "dating",
    rating: 4.6,
    affiliate:
      "https://t.crdtg2.com/197466/7234?aff_sub5=SF_006OG000004lmDN",
    image: "/offres/sexmessenger.png",
    description:
      "Offre dating orientée messagerie, simple et directe pour les visiteurs qui préfèrent les échanges rapides.",
    pros: [
      "Approche directe",
      "Messagerie simple",
      "Bonne alternative à AdultFriendFinder",
    ],
    cons: [
      "Moins généraliste qu’AdultFriendFinder",
      "Notoriété plus limitée",
    ],
    keywords: ["Sex Messenger Québec", "dating adulte", "rencontre rapide"],
    cities: true,
  },

  {
    slug: "bbwfun",
    name: "BBW Fun",
    category: "dating",
    rating: 4.4,
    affiliate:
      "https://t.crdtg2.com/197466/7088?aff_sub5=SF_006OG000004lmDN",
    image: "/offres/bbwfun.png",
    description:
      "Plateforme dating plus niche, intéressante pour les visiteurs qui préfèrent une expérience spécialisée.",
    pros: [
      "Positionnement niche",
      "Bonne alternative spécialisée",
      "Commission revshare intéressante",
    ],
    cons: [
      "Audience plus ciblée",
      "Moins universel que les plateformes généralistes",
    ],
    keywords: ["BBW Fun Québec", "BBW dating", "rencontre adulte niche"],
    cities: true,
  },

  {
    slug: "joi-ai",
    name: "Joi AI",
    category: "ai",
    rating: 4.8,
    affiliate:
      "https://t.vlmai-1.com/197466/7875?aff_sub5=SF_006OG000004lmDN",
    image: "/offres/joiai.png",
    description:
      "Plateforme AI Companion orientée conversation virtuelle, utile pour découvrir les AI Girlfriends accessibles au Québec.",
    pros: [
      "Bonne expérience conversationnelle",
      "Positionnement AI Companion clair",
      "Fort potentiel SEO",
    ],
    cons: [
      "Catégorie encore récente",
      "Fonctionnalités pouvant évoluer rapidement",
    ],
    keywords: ["Joi AI Québec", "AI Girlfriend Québec", "AI Companion"],
    cities: true,
  },

  {
    slug: "ourdream-ai",
    name: "OurDream AI",
    category: "ai",
    rating: 4.8,
    affiliate:
      "https://t.vlmai-1.com/197466/7710?aff_sub5=SF_006OG000004lmDN",
    image: "/offres/ourdreamai.png",
    description:
      "AI Companion complet, axé sur les conversations personnalisées et les personnages virtuels.",
    pros: [
      "Bonne personnalisation",
      "Interface moderne",
      "Choix global solide",
    ],
    cons: [
      "Service récent",
      "Certaines fonctions peuvent être premium",
    ],
    keywords: ["OurDream AI Québec", "AI Companion Canada", "AI Girlfriend"],
    cities: true,
  },

  {
    slug: "candy-ai",
    name: "Candy AI",
    category: "ai",
    rating: 4.7,
    affiliate:
      "https://t.vlmai-1.com/197466/7793?aff_sub5=SF_006OG000004lmDN",
    image: "/offres/candyai.png",
    description:
      "Plateforme AI Girlfriend populaire avec conversations personnalisées et personnages virtuels.",
    pros: [
      "Marque populaire",
      "Bonne personnalisation",
      "Expérience immersive",
    ],
    cons: [
      "Certaines fonctions sont premium",
      "Principalement orienté AI Girlfriend",
    ],
    keywords: ["Candy AI Québec", "AI Girlfriend Canada", "compagnon IA"],
    cities: true,
  },

  {
    slug: "darlink-ai",
    name: "DarLink AI",
    category: "ai",
    rating: 4.7,
    affiliate:
      "https://t.vlmai-1.com/197466/10344/0?aff_sub5=SF_006OG000004lmDN",
    image: "/offres/darlinkai.png",
    description:
      "Plateforme AI Companion orientée roleplay IA, AI Girlfriend et conversations personnalisées.",
    pros: [
      "Roleplay IA",
      "Personnages virtuels",
      "Bonne option pour diversifier le cluster IA",
    ],
    cons: [
      "Plus récent que certains concurrents",
      "À comparer avec Joi AI et OurDream AI",
    ],
    keywords: ["DarLink AI Québec", "AI Roleplay", "AI Girlfriend Québec"],
    cities: true,
  },

  {
    slug: "lovescape",
    name: "Lovescape",
    category: "ai",
    rating: 4.5,
    affiliate:
      "https://t.vlmai-1.com/197466/7887?aff_sub5=SF_006OG000004lmDN",
    image: "/offres/lovescape.png",
    description:
      "Compagnon virtuel IA orienté immersion, conversation et interactions personnalisées.",
    pros: [
      "Expérience immersive",
      "Bonne alternative IA",
      "Complète bien le cluster AI Companion",
    ],
    cons: [
      "Moins connu que Candy AI",
      "Marché encore jeune",
    ],
    keywords: ["Lovescape Québec", "AI Companion", "compagnon virtuel IA"],
    cities: true,
  },

  {
    slug: "sexemulator",
    name: "Sex Emulator",
    category: "gaming",
    rating: 4.6,
    affiliate:
      "https://t.asxem.link/197466/9294/0?aff_sub5=SF_006OG000004lmDN",
    image: "/offres/sexemulator.png",
    description:
      "Offre gaming adulte interactive, utile pour diversifier la section jeux adultes de NightRank AI.",
    pros: [
      "Expérience interactive",
      "Bonne catégorie gaming",
      "Différent des offres webcam et dating",
    ],
    cons: [
      "Niche plus spécifique",
      "Peut nécessiter une présentation claire",
    ],
    keywords: ["Sex Emulator", "gaming adulte", "jeux adultes"],
    cities: false,
  },

  {
    slug: "hentaiheroes",
    name: "Hentai Heroes",
    category: "gaming",
    rating: 4.5,
    affiliate:
      "https://t.anadw.link/197466/6562/35432?aff_sub5=SF_006OG000004lmDN",
    image: "/offres/hentaiheroes.png",
    description:
      "Jeu adulte de style anime/hentai, pertinent pour une section gaming adulte orientée niche.",
    pros: [
      "Style anime/hentai",
      "Bon complément gaming",
      "Offre différente des plateformes classiques",
    ],
    cons: [
      "Niche très spécifique",
      "Moins généraliste que Sex Emulator",
    ],
    keywords: ["Hentai Heroes", "jeu hentai", "gaming adulte"],
    cities: false,
  },

  {
    slug: "comixharem",
    name: "Comix Harem",
    category: "gaming",
    rating: 4.4,
    affiliate:
      "https://t.anadw.link/197466/7930/0?aff_sub5=SF_006OG000004lmDN",
    image: "/offres/comixharem.png",
    description:
      "Jeu adulte illustré de style harem, utile pour enrichir la catégorie gaming adulte.",
    pros: [
      "Style illustré",
      "Bon complément à Hentai Heroes",
      "Offre gaming niche",
    ],
    cons: [
      "Audience plus ciblée",
      "Moins universel que les grandes catégories",
    ],
    keywords: ["Comix Harem", "jeu adulte", "gaming harem"],
    cities: false,
  },
];