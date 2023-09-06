/* empty css                           */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent } from '../astro.02587cb0.mjs';
import 'html-escaper';
import { H as HeaderPage, F as FooterPage } from './about.astro.395a6f86.mjs';
import 'react';
import { Card } from 'flowbite-react';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'react-dom';

function CardPage() {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex justify-center",
    children: [/* @__PURE__ */ jsx(Card, {
      className: "mx-8 max-w-sm",
      href: "#",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col items-center pb-10",
        children: [/* @__PURE__ */ jsx("img", {
          className: "w-24 h-24 mb-3 rounded-full shadow-lg",
          src: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
          alt: "Bonnie image"
        }), /* @__PURE__ */ jsx("h5", {
          className: "mb-1 text-xl font-medium text-gray-900 dark:text-white",
          children: "Darren Christoper"
        }), /* @__PURE__ */ jsx("span", {
          className: "text-sm text-gray-500 dark:text-gray-400",
          children: "Programmer"
        }), /* @__PURE__ */ jsx("div", {
          className: "flex mt-4 space-x-3 md:mt-6"
        })]
      })
    }), /* @__PURE__ */ jsxs(Card, {
      className: "mx-8  max-w-sm bg-gray-300",
      href: "#",
      children: [/* @__PURE__ */ jsx("h5", {
        className: "text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
        children: /* @__PURE__ */ jsx("p", {
          children: "Hello & Welcome !"
        })
      }), /* @__PURE__ */ jsx("p", {
        className: "font-normal text-gray-700 dark:text-gray-400",
        children: /* @__PURE__ */ jsx("p", {
          children: "I am currently a master of Computer Science student in Illinois Institute of Technology"
        })
      })]
    })]
  });
}
__astro_tag_component__(CardPage, "@astrojs/react");

const $$Astro$1 = createAstro("https://darrenchristoper.github.io");
const $$Jumbotron = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Jumbotron;
  return renderTemplate`${maybeRenderHead()}<div class="animate-fade animate-once animate-duration-[1000ms] animate-ease-out animate-fill-forwards">
<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome To my Website</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">In here, I invite you to embark on a captivating journey through my experiences, achievements, and passions. From humble beginnings to remarkable milestones, this platform showcases the chapters that have defined my life. Join me as I share my story, aspirations, and the unwavering pursuit of growth and fulfillment.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/history" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                </svg>
            </a>
            <!--<a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">-->
            <!--    Learn more-->
            <!--</a>-->
        </div>
    </div>
</section>
</div>`;
}, "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/astropage/jumbotron.astro");

const $$Astro = createAstro("https://darrenchristoper.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<head>
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/dc.svg">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>Darren Christoper</title>
	${renderHead()}</head>
	<body>
	 ${renderComponent($$result, "HeaderPage", HeaderPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/component/header.tsx", "client:component-export": "default" })}
	 <div>&nbsp;</div>
   ${renderComponent($$result, "Jumbotron", $$Jumbotron, {})}
	 <div>&nbsp;</div>
			 ${renderComponent($$result, "CardPage", CardPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/component/CardPage", "client:component-export": "default" })}
	 <div>&nbsp;</div>
    ${renderComponent($$result, "FooterPage", FooterPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/component/FooterPage", "client:component-export": "default" })}

	</body>`;
}, "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/pages/index.astro");

const $$file = "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
