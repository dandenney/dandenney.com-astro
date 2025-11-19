import { e as createAstro, c as createComponent, d as renderTemplate, u as unescapeHTML, r as renderComponent, b as addAttribute } from './astro/server_P91Fz5pH.mjs';
/* empty css                          */
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://www.dandenney.com");
const $$StructuredData = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StructuredData;
  const {
    type,
    title,
    description,
    url,
    image,
    datePublished,
    dateModified,
    author,
    address,
    cuisine,
    priceRange
  } = Astro2.props;
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "name": title,
      "description": description,
      "url": url
    };
    if (image) {
      baseData.image = image;
    }
    switch (type) {
      case "website":
        return {
          ...baseData,
          "@type": "WebSite",
          "author": {
            "@type": "Person",
            "name": "Dan Denney",
            "url": "https://www.dandenney.com"
          }
        };
      case "blogpost":
        return {
          ...baseData,
          "@type": "BlogPosting",
          "headline": title,
          "datePublished": datePublished?.toISOString(),
          "dateModified": dateModified?.toISOString(),
          "author": {
            "@type": "Person",
            "name": author || "Dan Denney",
            "url": "https://www.dandenney.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Dan Denney",
            "url": "https://www.dandenney.com"
          }
        };
      case "person":
        return {
          ...baseData,
          "@type": "Person",
          "jobTitle": "Senior Software Engineer II",
          "worksFor": {
            "@type": "Organization",
            "name": "DataCamp"
          },
          "knowsAbout": ["Front-end Development", "JavaScript", "Web Design", "Astro", "React"],
          "sameAs": [
            "https://github.com/dandenney",
            "https://twitter.com/dandenney"
          ]
        };
      case "restaurant":
        return {
          ...baseData,
          "@type": "Restaurant",
          "address": address ? {
            "@type": "PostalAddress",
            ...address
          } : void 0,
          "servesCuisine": cuisine,
          "priceRange": priceRange,
          "author": {
            "@type": "Person",
            "name": "Dan Denney (AI-assisted review)",
            "url": "https://www.dandenney.com"
          }
        };
      default:
        return baseData;
    }
  };
  const structuredData = generateStructuredData();
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData)));
}, "/Users/dandenney/Repos/dandenney.com-astro/src/components/StructuredData.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.dandenney.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const {
    title,
    description,
    image = "/blog-placeholder-1.jpg",
    type = "website",
    datePublished,
    dateModified,
    author
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Font preloads --><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet"><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', `><script>
	const theme = (() => {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return localStorage.getItem('theme');
		}
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
		return 'light';
	})();
	if (theme === 'light') {
		document.documentElement.classList.remove('dark');
	} else {
		document.documentElement.classList.add('dark');
	}
	window.localStorage.setItem('theme', theme);
	const handleToggleClick = () => {
		const element = document.documentElement;
		element.classList.toggle("dark");
		const isDark = element.classList.contains("dark");
		localStorage.setItem("theme", isDark ? "dark" : "light");
	}
<\/script>`, ""])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL.href, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url.href, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url).href, "content"), addAttribute(Astro2.url.href, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url).href, "content"), renderComponent($$result, "StructuredData", $$StructuredData, { "type": type, "title": title, "description": description, "url": Astro2.url.href, "image": new URL(image, Astro2.url).href, "datePublished": datePublished, "dateModified": dateModified, "author": author }));
}, "/Users/dandenney/Repos/dandenney.com-astro/src/components/BaseHead.astro", void 0);

export { $$BaseHead as $ };
