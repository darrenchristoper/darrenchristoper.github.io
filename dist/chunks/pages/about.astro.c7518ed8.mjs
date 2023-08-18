/* empty css                           */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent } from '../astro.1d8372e8.mjs';
import 'html-escaper';
import 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Footer } from 'flowbite-react';

function HeaderPage() {
  return /* @__PURE__ */ jsx("header", {
    id: "header",
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex justify-center",
      children: [/* @__PURE__ */ jsx("a", {
        href: "/",
        className: "basis-1/6 shadow-xl text-center rounded-sm",
        children: "home"
      }), /* @__PURE__ */ jsx("a", {
        href: "/about",
        className: "basis-1/6 shadow-xl  text-center rounded-sm",
        children: "about"
      }), /* @__PURE__ */ jsx("a", {
        href: "/contact",
        className: "basis-1/6 shadow-xl  text-center rounded-sm",
        children: "contact"
      })]
    })
  });
}
__astro_tag_component__(HeaderPage, "@astrojs/react");

function FooterPage() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs(Footer, {
      container: true,
      children: [/* @__PURE__ */ jsx(Footer.Copyright, {
        by: "Darren Christoper™",
        href: "#",
        year: 2023
      }), /* @__PURE__ */ jsxs(Footer.LinkGroup, {
        children: [/* @__PURE__ */ jsx(Footer.Link, {
          href: "/",
          children: "Home"
        }), /* @__PURE__ */ jsx(Footer.Link, {
          href: "/about",
          children: "About"
        }), /* @__PURE__ */ jsx(Footer.Link, {
          href: "/contact",
          children: "Contact"
        })]
      })]
    })
  });
}
__astro_tag_component__(FooterPage, "@astrojs/react");

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`<head>
    <meta charset="utf-8">
    <link rel="icon" type="image/svg+xml" href="/dc.svg">
    <meta name="viewport" content="width=device-width">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>Darren Christoper</title>
${renderHead()}</head>
<body>
${renderComponent($$result, "HeaderPage", HeaderPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/component/header", "client:component-export": "default" })}
<div class="animate-fade animate-once animate-duration-[1000ms] animate-ease-out animate-fill-forwards">
<section class="bg-gray-100 dark:bg-gray-900 scale-75 shadow-2xl" style="border-radius: 2rem">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Me</h2>
            <p class="mb-4">Welcome to my profile! My name is Darren Christoper. I’m currently taking Master's in Computer Science. In the past enjoying being a Laravel developer, but I'm still Interested in learning other frameworks or programming languages ! I would like to use my skills to create positive solutions to complex problems.

                Outside of work, I love to read books about technology, finance & business. I am currently seeking Internship positions in the Computer Science arena. Please feel free to connect with me ! I would love to learn more
                about you.
        </p></div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1">
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2">
        </div>
    </div>
</section>
</div>
${renderComponent($$result, "FooterPage", FooterPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/component/FooterPage", "client:component-export": "default" })}
</body>`;
}, "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/pages/about.astro");

const $$file = "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { FooterPage as F, HeaderPage as H, about as a };
