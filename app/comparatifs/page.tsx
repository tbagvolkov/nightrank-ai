export const metadata = {
title: "Comparatifs | NightRank AI",
description:
"Comparatifs webcams, dating et plateformes adultes au Québec.",
};

const comparatifs = [

{
title: "Meilleurs sites webcams Québec",
url: "/comparatifs/meilleurs-sites-webcams-quebec",
desc:
"Comparatif des plateformes webcams.",
},

{
title: "Top rencontres adultes Québec",
url: "/comparatifs/dating-quebec",
desc:
"Classement des plateformes dating.",
},

{
title: "Gaming adulte",
url: "/gaming",
desc:
"Découvrir la sélection gaming.",
},

];

export default function Comparatifs() {

return (

<main className="min-h-screen bg-black text-white">

<div className="max-w-6xl mx-auto px-6 py-20">

<h1 className="text-6xl font-bold text-pink-500 mb-10">

Comparatifs

</h1>

<div className="grid md:grid-cols-3 gap-6">

{comparatifs.map((item)=>(

<a
key={item.title}
href={item.url}
className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-pink-500"
>

<h2 className="text-2xl font-bold mb-4">
{item.title}
</h2>

<p className="text-gray-400">
{item.desc}
</p>

</a>

))}

</div>

</div>

</main>

);

}