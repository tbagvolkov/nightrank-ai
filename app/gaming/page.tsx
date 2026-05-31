export const metadata = {
title: "Gaming adulte | NightRank AI",
description:
"Jeux adultes et divertissement sélectionnés pour le Québec.",
};

const games = [
{
name: "Sex Emulator",
desc:
"Simulation adulte et gameplay interactif.",
},

{
name: "Hentai Heroes",
desc:
"Collection, progression et univers gaming adulte.",
},

{
name: "Comix Harem",
desc:
"Jeu orienté progression et collection.",
},
];

export default function GamingPage() {
return (

<main className="min-h-screen bg-black text-white">

<div className="max-w-6xl mx-auto px-6 py-20">

<a
href="/"
className="text-pink-400"
>
← Retour
</a>

<h1 className="text-6xl font-bold text-pink-500 mt-10 mb-6">

Gaming adulte

</h1>

<p className="text-gray-300 text-xl mb-14">

Sélection gaming et divertissement.

</p>

<div className="grid md:grid-cols-3 gap-6">

{games.map((game)=>(

<div
key={game.name}
className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
>

<h2 className="text-3xl font-bold mb-4">
{game.name}
</h2>

<p className="text-gray-400 mb-8">
{game.desc}
</p>

<button
className="bg-pink-600 px-6 py-3 rounded-xl"
>

Découvrir

</button>

</div>

))}

</div>

</div>

</main>

);
}