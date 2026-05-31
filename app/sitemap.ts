import { cities } from "./data";

export default function sitemap() {
const baseUrl = "https://nightrankai.com";

const pages = [

"",
"/cams",
"/dating",
"/comparatifs",
"/blog",
"/gaming",

];

const staticPages = pages.map((page)=>({

url: `${baseUrl}${page}`,
lastModified: new Date(),

}));

const webcamPages = cities.map((city)=>({

url:
`${baseUrl}/webcam/${city.slug}`,

lastModified:
new Date(),

}));

const datingPages = cities.map((city)=>({

url:
`${baseUrl}/dating/${city.slug}`,

lastModified:
new Date(),

}));

return [

...staticPages,

...webcamPages,

...datingPages,

];

}