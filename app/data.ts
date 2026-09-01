export const cities = [
  { name: "Montréal", slug: "montreal" },
  { name: "Québec", slug: "quebec" },
  { name: "Laval", slug: "laval" },
  { name: "Gatineau", slug: "gatineau" },
  { name: "Sherbrooke", slug: "sherbrooke" },
  { name: "Longueuil", slug: "longueuil" },
  { name: "Trois-Rivières", slug: "trois-rivieres" },
  { name: "Lévis", slug: "levis" },
  { name: "Saguenay", slug: "saguenay" },
  { name: "Terrebonne", slug: "terrebonne" },
  { name: "Saint-Jérôme", slug: "saint-jerome" },
  { name: "Repentigny", slug: "repentigny" },
  { name: "Brossard", slug: "brossard" },
  { name: "Drummondville", slug: "drummondville" },
  { name: "Granby", slug: "granby" },
  { name: "Blainville", slug: "blainville" },
  { name: "Saint-Hyacinthe", slug: "saint-hyacinthe" },
  { name: "Rimouski", slug: "rimouski" },
  { name: "Shawinigan", slug: "shawinigan" },
  { name: "Victoriaville", slug: "victoriaville" },
];

type CityContent = {
  webcamSummary: string;
  webcamChecks: string[];
  datingSummary: string;
  datingChecks: string[];
};

export const priorityCityContent: Record<string, CityContent> = {
  montreal: {
    webcamSummary:
      "Montréal est le plus grand marché urbain du Québec et réunit des visiteurs francophones et anglophones. Pour comparer une plateforme webcam depuis Montréal, nous privilégions une navigation mobile rapide, des filtres faciles à comprendre et une présentation claire des crédits avant toute interaction payante.",
    webcamChecks: [
      "Vérifier la langue disponible dans l’interface et le soutien",
      "Comparer les salons publics et les options privées",
      "Contrôler le prix des crédits en dollars canadiens",
    ],
    datingSummary:
      "À Montréal, le choix d’une plateforme dépend surtout du type d’échange recherché, de la langue utilisée et du niveau de discrétion souhaité. Notre sélection distingue une communauté généraliste, une option centrée sur la messagerie et une plateforme de niche afin d’éviter de présenter trois services presque identiques.",
    datingChecks: [
      "Choisir une plateforme adaptée à la langue de communication",
      "Vérifier les paramètres de confidentialité du profil",
      "Comparer les fonctions gratuites avant de payer",
    ],
  },
  quebec: {
    webcamSummary:
      "Pour les visiteurs de Québec, une expérience simple en français et une bonne compatibilité mobile peuvent compter davantage qu’un très grand nombre de fonctions. Nous comparons donc la clarté de l’interface, la facilité d’achat des crédits et l’accès aux réglages de confidentialité.",
    webcamChecks: [
      "Privilégier une interface compréhensible en français",
      "Tester la qualité vidéo avant une session privée",
      "Fixer une limite de dépenses avant l’achat de crédits",
    ],
    datingSummary:
      "À Québec, notre comparaison met l’accent sur la simplicité d’utilisation, les options de messagerie et la protection des informations personnelles. Les plateformes présentées ne garantissent pas des profils locaux : il faut toujours vérifier les résultats disponibles et les conditions du service avant de s’inscrire.",
    datingChecks: [
      "Vérifier la présence réelle de profils correspondant à ses critères",
      "Limiter les informations personnelles affichées publiquement",
      "Lire les conditions de renouvellement et d’annulation",
    ],
  },
  laval: {
    webcamSummary:
      "Depuis Laval, les mêmes plateformes nationales sont accessibles que dans le reste du Québec. La comparaison locale porte donc sur des éléments concrets : performance sur téléphone, rapidité de navigation, variété des catégories et transparence du système de jetons ou de crédits.",
    webcamChecks: [
      "Comparer l’expérience sur téléphone et ordinateur",
      "Vérifier les frais associés aux fonctions privées",
      "Utiliser les outils de contrôle des notifications",
    ],
    datingSummary:
      "Pour Laval, nous évitons de supposer qu’une plateforme possède automatiquement une grande communauté locale. Le meilleur choix dépend plutôt des filtres géographiques proposés, du type de conversation recherché et des options permettant de contrôler la visibilité du profil.",
    datingChecks: [
      "Examiner les filtres de distance avant l’abonnement",
      "Désactiver les notifications indésirables",
      "Signaler les profils suspects ou les demandes d’argent",
    ],
  },
  gatineau: {
    webcamSummary:
      "Gatineau se trouve dans une région où les services en français et en anglais peuvent être utiles. Notre comparaison examine la langue de l’interface, l’accès depuis le Canada, les méthodes de paiement présentées et la facilité de passage entre navigation publique et fonctions privées.",
    webcamChecks: [
      "Vérifier la langue de l’interface et du service à la clientèle",
      "Confirmer la devise avant un achat",
      "Consulter les règles de confidentialité de chaque plateforme",
    ],
    datingSummary:
      "À Gatineau, certains visiteurs peuvent vouloir élargir leurs filtres à la région d’Ottawa–Gatineau. Il est donc utile de comparer la précision des réglages de distance, les langues de communication et les contrôles permettant de masquer ou supprimer un profil.",
    datingChecks: [
      "Ajuster soigneusement le rayon de recherche",
      "Choisir la ou les langues affichées sur le profil",
      "Vérifier comment supprimer définitivement le compte",
    ],
  },
  sherbrooke: {
    webcamSummary:
      "Pour Sherbrooke et l’Estrie, l’emplacement change peu l’accès technique aux grandes plateformes internationales. Notre guide se concentre donc sur la qualité de l’expérience mobile, la clarté des prix et la possibilité d’explorer le service avant d’acheter des crédits.",
    webcamChecks: [
      "Tester l’accès gratuit avant d’acheter des crédits",
      "Comparer la stabilité et la qualité des diffusions",
      "Vérifier les options de sécurité du compte",
    ],
    datingSummary:
      "À Sherbrooke, il est préférable de vérifier la disponibilité des profils correspondant réellement à ses critères plutôt que de se fier à une promesse générale de popularité. Notre sélection compare une option généraliste, une messagerie directe et une communauté spécialisée.",
    datingChecks: [
      "Consulter les résultats disponibles avant de payer",
      "Protéger son identité et ses coordonnées personnelles",
      "Comparer les outils de blocage et de signalement",
    ],
  },
};

export const offers = [
  { name: "Jerkmate", category: "Cams", description: "Plateforme populaire de webcams live avec expérience premium.", url: "/offres/jerkmate" },
  { name: "LiveJasmin", category: "Cams", description: "Site webcam haut de gamme reconnu à l'international.", url: "/offres/livejasmin" },
  { name: "BongaCams", category: "Cams", description: "Grande sélection de modèles et diffusion en direct.", url: "/offres/bongacams" },
  { name: "ImLive", category: "Cams", description: "Plateforme webcam internationale proposant des modèles en direct.", url: "/blog/imlive-quebec" },
  { name: "LivePrivates", category: "Cams", description: "Plateforme orientée shows privés et interactions personnalisées.", url: "/blog/liveprivates-quebec" },

  { name: "AdultFriendFinder", category: "Dating", description: "Communauté adulte pour rencontres et connexions entre adultes.", url: "/offres/adultfriendfinder" },
  { name: "Sex Messenger", category: "Dating", description: "Plateforme de rencontres et discussions entre adultes.", url: "/offres/sexmessenger" },
  { name: "BBW Fun", category: "Dating", description: "Site de rencontres spécialisé BBW et admirateurs.", url: "/offres/bbwfun" },

  { name: "Sex Emulator", category: "Gaming", description: "Simulation interactive pour adultes.", url: "/offres/sexemulator" },
  { name: "Hentai Heroes", category: "Gaming", description: "Jeu RPG adulte avec progression et collection.", url: "/offres/hentaiheroes" },
  { name: "Comix Harem", category: "Gaming", description: "Jeu adulte inspiré des univers comics et manga.", url: "/offres/comixharem" },

  { name: "JOI AI", category: "AI", description: "Compagnon virtuel IA avec conversations immersives.", url: "/blog/joi-ai-quebec" },
  { name: "OurDream AI", category: "AI", description: "AI Girlfriend populaire avec personnalisation avancée.", url: "/blog/ourdream-ai-quebec" },
  { name: "Lovescape AI", category: "AI", description: "Compagnon virtuel basé sur l'intelligence artificielle.", url: "/blog/lovescape-quebec" },
  { name: "Candy AI", category: "AI", description: "Compagnon IA moderne offrant une expérience personnalisée.", url: "/blog/candy-ai-quebec" },
  { name: "DarLink AI", category: "AI", description: "Plateforme AI Girlfriend et roleplay avec personnages avancés.", url: "/blog/darlink-ai-quebec" },
];
