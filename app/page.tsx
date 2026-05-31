import { cities, offers } from "./data";

export const metadata = {
title: "NightRank AI | Meilleurs sites adultes au Québec",
description:
"Guide Québec-first des webcams, cams live, rencontres adultes, comparatifs et gaming adulte au Canada.",
};

export default function Home() {
return (
<main className="min-h-screen bg-black text-white">

<nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 border-b border-zinc-900 bg-black">

<a
href="/"
className="text-2xl font-bold text-pink-500"
>
NightRank AI
</a>

<div className="hidden md:flex gap-8 text-sm text-gray-300">

<a href="/cams" className="hover:text-pink-400">
Cams
</a>

<a href="/dating" className="hover:text-pink-400">
Dating
</a>

<a href="/comparatifs" className="hover:text-pink-400">
Comparatifs
</a>

<a href="/blog" className="hover:text-pink-400">
Blog
</a>

<a href="/gaming" className="hover:text-pink-400">
Gaming
</a>

</div>

</nav>


<section className="relative h-[700px]">

<img
src="/hero.jpg"
alt="NightRank AI Québec"
className="absolute inset-0 w-full h-full object-cover opacity-40"
/>

<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black"/>

<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

<p className="text-pink-400 mb-4">
Guide adulte Québec-first
</p>

<h1 className="text-6xl md:text-8xl font-bold mb-8">

Les meilleurs sites adultes

<span className="text-pink-500">
{" "}au Québec
</span>

</h1>

<p className="text-2xl text-gray-300 max-w-3xl">

Découvrez webcams live,
rencontres adultes,
comparatifs et gaming.

</p>

<div className="flex gap-4 mt-10">

<a
href="/cams"
className="bg-pink-600 px-8 py-4 rounded-xl"
>

Voir les cams

</a>

<a
href="/dating"
className="border border-pink-500 px-8 py-4 rounded-xl"
>

Rencontres

</a>

</div>

</div>

</section>


<section className="max-w-6xl mx-auto px-6 py-24">

<h2 className="text-4xl font-bold mb-10">
Top offres recommandées
</h2>

<div className="grid md:grid-cols-4 gap-6">

{offers.map((offer)=>(

<div
key={offer.name}
className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800"
>

<p className="text-pink-400">
{offer.category}
</p>

<h3 className="text-2xl font-bold my-4">
{offer.name}
</h3>

<p className="text-gray-400 mb-6">
{offer.description}
</p>

<a
href={offer.url}
className="bg-pink-600 px-4 py-2 rounded"
>

Visiter

</a>

</div>

))}

</div>

</section>


<section className="max-w-6xl mx-auto px-6 pb-24">

<h2 className="text-4xl font-bold mb-10">
Comparatifs populaires
</h2>

<div className="grid md:grid-cols-3 gap-6">

<a
href="/comparatifs/meilleurs-sites-webcams-quebec"
className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-pink-500"
>

<p className="text-pink-400 mb-3">
Cams
</p>

<h3 className="text-2xl font-bold mb-4">
Meilleurs sites webcams Québec
</h3>

<p className="text-gray-400">
Compare les plateformes webcams les plus populaires pour le Québec et le Canada.
</p>

</a>

<a
href="/comparatifs"
className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-pink-500"
>

<p className="text-pink-400 mb-3">
Guides
</p>

<h3 className="text-2xl font-bold mb-4">
Tous les comparatifs
</h3>

<p className="text-gray-400">
Explore les guides NightRank AI pour choisir les meilleures plateformes.
</p>

</a>

<a
href="/gaming"
className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-pink-500"
>

<p className="text-pink-400 mb-3">
Gaming
</p>

<h3 className="text-2xl font-bold mb-4">
Gaming adulte
</h3>

<p className="text-gray-400">
Découvre les offres gaming et divertissement adulte sélectionnées.
</p>

</a>

</div>

</section>


<section className="max-w-6xl mx-auto px-6 pb-24">

<h2 className="text-4xl font-bold mb-10">
Pages locales SEO
</h2>

<div className="grid md:grid-cols-3 gap-4">

{cities.map((city)=>(

<a
key={city.slug}
href={`/webcam/${city.slug}`}
className="bg-zinc-900 rounded-xl p-5 border border-zinc-800"
>

Webcam {city.name}

</a>

))}

</div>

</section>


<section className="max-w-6xl mx-auto px-6 pb-24">

<h2 className="text-4xl font-bold mb-10">
Pages Dating SEO
</h2>

<div className="grid md:grid-cols-3 gap-4">

{cities.map((city)=>(

<a
key={`dating-${city.slug}`}
href={`/dating/${city.slug}`}
className="bg-zinc-900 rounded-xl p-5 border border-zinc-800"
>

Rencontre {city.name}

</a>

))}

</div>

</section>


<section className="max-w-5xl mx-auto px-6 pb-24">

<div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">

<h2 className="text-3xl font-bold mb-6">
NightRank AI : un guide adulte local pour le Québec
</h2>

<p className="text-gray-300 mb-4">
NightRank AI aide les utilisateurs du Québec et du Canada à comparer les meilleurs sites webcams, cams live, rencontres adultes et offres gaming.
</p>

<p className="text-gray-300">
Grâce aux pages locales générées automatiquement par ville, le site peut cibler des recherches comme webcam Montréal, rencontre adulte Laval ou cams Québec.
</p>

</div>

</section>


<footer className="border-t border-zinc-900 py-16 text-center">

<h3 className="text-3xl text-pink-500 font-bold mb-4">
NightRank AI
</h3>

<p className="text-gray-400">
Guide indépendant Québec • Canada
</p>

<div className="flex justify-center gap-8 mt-6">

<a href="/cams">Cams</a>

<a href="/dating">Dating</a>

<a href="/comparatifs">Comparatifs</a>

<a href="/blog">Blog</a>

<a href="/gaming">Gaming</a>

</div>

</footer>

</main>
);
}