import type { Metadata } from "next";
import ComparisonPage, { type ComparisonOffer } from "@/components/comparatifs/ComparisonPage";

export const metadata: Metadata = {
  title: "Meilleurs compagnons IA au Québec | Comparatif 2026",
  description: "Comparatif des compagnons IA accessibles au Québec : Joi AI, OurDream AI, Candy AI, DarLink AI et Lovescape. Fonctions, personnalisation et confidentialité.",
  alternates: { canonical: "https://nightrankai.com/ai" },
  openGraph: { title: "Meilleurs compagnons IA au Québec", description: "Comparez cinq plateformes de compagnons virtuels selon la conversation, la personnalisation, l’immersion et la confidentialité.", url: "https://nightrankai.com/ai", siteName: "NightRank AI", locale: "fr_CA", type: "article" },
};

const offers: ComparisonOffer[] = [
  { position: 1, name: "Joi AI", rating: "4.8/5", badge: "Meilleur choix global", badgeColor: "from-yellow-500 to-amber-600", best: "Conversation et expérience équilibrée", description: "Joi AI propose une expérience de compagnon virtuel centrée sur la conversation et la personnalisation. Son positionnement équilibré en fait un point de départ pertinent pour découvrir cette catégorie.", image: "/offres/joiai.png", imageAlt: "Joi AI dans le comparatif des compagnons IA au Québec", affiliate: "https://t.vlmai-1.com/197466/7875?aff_sub5=SF_006OG000004lmDN", review: "/blog/joi-ai-quebec", strengths: ["Expérience conversationnelle développée", "Positionnement clair", "Prise en main accessible"], limits: "Comme pour tout service génératif, la cohérence des réponses peut varier. Il faut aussi examiner les réglages de confidentialité et les limites du forfait choisi.", pricing: "Certaines fonctions peuvent être gratuites ou limitées, tandis que la personnalisation et les options avancées peuvent nécessiter un abonnement. Vérifiez l’offre actuelle.", ideal: "Les adultes qui souhaitent une première expérience équilibrée entre conversation, personnalisation et simplicité d’utilisation." },
  { position: 2, name: "OurDream AI", rating: "4.8/5", badge: "Meilleure personnalisation", badgeColor: "from-fuchsia-500 to-purple-700", best: "Création de personnages et immersion", description: "OurDream AI met l’accent sur la création d’une expérience personnalisée et sur l’immersion avec des personnages virtuels. Il se distingue auprès des utilisateurs qui veulent ajuster davantage leur interaction.", image: "/offres/ourdreamai.png", imageAlt: "OurDream AI dans le classement des compagnons IA", affiliate: "https://t.vlmai-1.com/197466/7710?aff_sub5=SF_006OG000004lmDN", review: "/blog/ourdream-ai-quebec", strengths: ["Options de personnalisation", "Interface moderne", "Expérience immersive"], limits: "Une personnalisation avancée demande souvent plus de réglages et certaines options peuvent être réservées aux formules payantes.", pricing: "Le niveau d’accès dépend du forfait et des fonctions utilisées. Comparez les limites de messages, les médias et le renouvellement avant de payer.", ideal: "Les utilisateurs qui veulent construire une expérience plus personnalisée et accorder du temps aux réglages du personnage." },
  { position: 3, name: "Candy AI", rating: "4.7/5", badge: "Choix populaire", badgeColor: "from-pink-500 to-rose-700", best: "Variété de personnages et découverte", description: "Candy AI est une marque connue dans l’univers des compagnons IA. Elle propose des conversations personnalisées et différents styles de personnages pour les visiteurs qui souhaitent explorer plusieurs possibilités.", imageAlt: "Emplacement du visuel Candy AI", affiliate: "https://t.vlmai-1.com/197466/7793?aff_sub5=SF_006OG000004lmDN", review: "/blog/candy-ai-quebec", strengths: ["Marque populaire", "Variété de personnages", "Expérience orientée découverte"], limits: "La quantité d’options ne garantit pas que chaque conversation corresponde aux attentes. Vérifiez également les règles liées aux données et aux contenus générés.", pricing: "Des restrictions peuvent s’appliquer aux comptes gratuits. Examinez le coût, les crédits éventuels et les fonctions incluses dans chaque formule.", ideal: "Les adultes qui souhaitent comparer plusieurs personnages et privilégient une plateforme déjà visible dans cette catégorie." },
  { position: 4, name: "DarLink AI", rating: "4.7/5", badge: "Meilleur pour le roleplay", badgeColor: "from-violet-500 to-indigo-700", best: "Jeux de rôle et scénarios personnalisés", description: "DarLink AI s’oriente davantage vers le jeu de rôle, les personnages virtuels et les scénarios conversationnels. Cette spécialisation le rend intéressant pour une expérience plus narrative.", imageAlt: "Emplacement du visuel DarLink AI", affiliate: "https://t.vlmai-1.com/197466/10344/0?aff_sub5=SF_006OG000004lmDN", review: "/blog/darlink-ai-quebec", strengths: ["Orientation roleplay", "Scénarios personnalisables", "Alternative aux services généralistes"], limits: "Le service est moins établi que certaines marques concurrentes et ses fonctions peuvent évoluer rapidement. Évitez de partager des renseignements personnels dans les scénarios.", pricing: "Consultez les limites d’usage, le fonctionnement des crédits et les conditions de renouvellement directement sur la plateforme.", ideal: "Les utilisateurs qui recherchent une narration interactive et des jeux de rôle plutôt qu’une simple conversation générale." },
  { position: 5, name: "Lovescape", rating: "4.5/5", badge: "Alternative immersive", badgeColor: "from-blue-500 to-indigo-700", best: "Immersion et conversation virtuelle", description: "Lovescape complète le classement avec une approche orientée immersion et interactions personnalisées. Il représente une alternative à considérer lorsque les plateformes les plus connues ne correspondent pas aux préférences du visiteur.", image: "/offres/lovescape.png", imageAlt: "Lovescape dans le comparatif des compagnons virtuels", affiliate: "https://t.vlmai-1.com/197466/7887?aff_sub5=SF_006OG000004lmDN", review: "/blog/lovescape-quebec", strengths: ["Approche immersive", "Conversation personnalisée", "Alternative complémentaire"], limits: "Sa notoriété plus limitée offre moins de recul public. Testez l’interface et consultez la politique de confidentialité avant un engagement payant.", pricing: "Les fonctions et prix peuvent changer. Vérifiez le forfait, les limites et les règles d’annulation au moment de votre visite.", ideal: "Les adultes qui souhaitent essayer une solution différente après avoir comparé les principales plateformes du marché." },
];

const faqs = [
  { question: "Quel est le meilleur compagnon IA au Québec?", answer: "Joi AI occupe notre première position pour son équilibre général. OurDream AI est particulièrement intéressant pour la personnalisation, tandis que DarLink AI vise davantage le jeu de rôle." },
  { question: "Un compagnon IA est-il une personne réelle?", answer: "Non. Les réponses sont produites par un système d’intelligence artificielle. Le personnage n’a ni conscience, ni émotions humaines, ni identité réelle." },
  { question: "Ces plateformes sont-elles accessibles au Canada?", answer: "Elles sont généralement accessibles depuis le Québec et le Canada, mais les fonctions, prix et moyens de paiement peuvent changer selon la région." },
  { question: "Peut-on utiliser un compagnon IA gratuitement?", answer: "Certaines plateformes proposent un essai ou un accès limité. Les messages supplémentaires, médias ou fonctions avancées peuvent nécessiter un abonnement ou des crédits." },
  { question: "Est-il prudent de partager des informations personnelles?", answer: "Non. Évitez les noms complets, adresses, coordonnées bancaires, documents et informations professionnelles confidentielles dans vos conversations." },
  { question: "Comment supprimer ses données?", answer: "Consultez les paramètres du compte et la politique de confidentialité. Vérifiez les options d’exportation, de suppression des conversations et de fermeture définitive du compte." },
];

export default function AIPage() {
  return <ComparisonPage
    breadcrumb="Compagnons IA Québec" eyebrow="Comparatif compagnons IA Québec • Guide éditorial"
    title="Meilleurs" highlightedTitle="compagnons IA au Québec"
    introduction="Les plateformes de compagnons virtuels ne proposent pas toutes la même expérience. NightRank AI compare cinq services selon la qualité conversationnelle, la personnalisation, le roleplay, l’immersion, la clarté des prix et les contrôles de confidentialité."
    topLabel="Classement NightRank AI" topHeading="Notre Top 5 des compagnons virtuels IA" offers={offers}
    analysisEyebrow="Analyse éditoriale détaillée" analysisHeading="Quel compagnon IA choisir au Québec?"
    analysisIntro="Le meilleur service dépend de l’expérience recherchée : conversation simple, personnage très personnalisé, scénario de roleplay ou découverte de différents styles. La gestion des données et le modèle payant doivent faire partie du choix."
    guideEyebrow="Guide de sélection" guideHeading="Comment comparer un compagnon IA?"
    guideSteps={[
      { title: "Définir le type d’interaction", text: "Choisissez entre conversation générale, personnalisation poussée, narration ou jeu de rôle." },
      { title: "Tester la cohérence", text: "Profitez de l’accès initial pour évaluer la mémoire, la pertinence et la stabilité des réponses." },
      { title: "Examiner la confidentialité", text: "Lisez quelles données sont conservées et comment supprimer les conversations et le compte." },
      { title: "Comparer les limites payantes", text: "Vérifiez les messages, médias, crédits, renouvellements et restrictions de chaque forfait." },
    ]}
    practicalEyebrow="Données et utilisation" practicalHeading="Utiliser un compagnon IA avec discernement"
    practicalIntro="Un personnage virtuel peut produire une impression de proximité, mais il reste un logiciel génératif. Gardez des limites claires et protégez vos informations."
    practicalItems={[
      { title: "Données personnelles", text: "N’entrez aucune adresse, donnée bancaire, pièce d’identité ou information confidentielle." },
      { title: "Réponses générées", text: "Une IA peut inventer des faits ou répondre de manière incohérente; ne la traitez pas comme une source fiable." },
      { title: "Temps d’utilisation", text: "Désactivez les notifications ou fixez une limite si le service prend une place excessive." },
      { title: "Suppression du compte", text: "Repérez la procédure de suppression et les règles de conservation avant de vous abonner." },
    ]}
    methodHeading="Comment NightRank AI évalue les compagnons IA"
    methodText="Notre analyse considère la fluidité de la conversation, la personnalisation, la cohérence, l’interface, la transparence des prix et les contrôles de confidentialité. Ce marché évolue rapidement : nos notes sont éditoriales et décrivent une expérience observée, pas une garantie permanente."
    criteria={[
      { title: "Conversation", text: "Fluidité, cohérence et variété des réponses." },
      { title: "Personnalisation", text: "Réglages des personnages, styles et scénarios." },
      { title: "Confidentialité", text: "Contrôle des conversations, données et suppression." },
      { title: "Valeur", text: "Clarté des limites gratuites et des fonctions payantes." },
    ]}
    faqHeading="FAQ sur les compagnons IA au Québec" faqs={faqs}
    finalParagraphs={[
      "Joi AI constitue notre choix global pour une découverte équilibrée. OurDream AI se distingue par ses options de personnalisation, alors que Candy AI mise davantage sur la variété et une marque déjà connue.",
      "DarLink AI convient mieux aux scénarios et au jeu de rôle. Lovescape complète la sélection comme alternative immersive pour les utilisateurs qui souhaitent comparer une autre approche.",
      "Testez d’abord la qualité des conversations, puis vérifiez le prix et la politique de confidentialité. Ne partagez aucune information sensible et gardez à l’esprit qu’un compagnon IA reste un logiciel, pas une personne réelle.",
    ]}
    relatedLinks={[
      { href: "/blog/top-5-ai-girlfriends-quebec-2026", label: "Guide des AI Girlfriends au Québec" },
      { href: "/comparatifs", label: "Tous les comparatifs NightRank AI" },
      { href: "/comparatifs/meilleurs-sites-webcams-quebec", label: "Meilleurs sites webcams au Québec" },
      { href: "/comparatifs/top-rencontres-adultes-quebec", label: "Rencontres adultes au Québec" },
    ]}
  />;
}
