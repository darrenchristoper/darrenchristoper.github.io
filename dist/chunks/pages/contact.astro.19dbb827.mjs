/* empty css                           */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent } from '../astro.1d8372e8.mjs';
import 'html-escaper';
import { Card } from 'flowbite-react';
import 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa/index.esm.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { H as HeaderPage, F as FooterPage } from './about.astro.c7518ed8.mjs';

function Contact() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("div", {
      className: "flex justify-center",
      children: /* @__PURE__ */ jsxs(Card, {
        children: [/* @__PURE__ */ jsx("h5", {
          className: "mb-3 text-base font-semibold text-gray-900 dark:text-white lg:text-xl",
          children: "Connect to Social media"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-sm font-normal text-gray-500 dark:text-gray-400"
        }), /* @__PURE__ */ jsxs("ul", {
          className: "my-4 space-y-3",
          children: [/* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsxs("a", {
              className: "group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500",
              href: "https://github.com/darrenchristoper",
              children: [/* @__PURE__ */ jsx(FaGithub, {}), /* @__PURE__ */ jsx("span", {
                className: "ml-3 flex-1 whitespace-nowrap",
                children: "Github"
              })]
            })
          }), /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsxs("a", {
              className: "group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500",
              href: "https://www.linkedin.com/in/darren-christoper-a50a85209/",
              children: [/* @__PURE__ */ jsx(FaLinkedin, {}), /* @__PURE__ */ jsx("span", {
                className: "ml-3 flex-1 whitespace-nowrap",
                children: "Linkedin"
              })]
            })
          })]
        }), /* @__PURE__ */ jsx("div", {})]
      })
    })]
  });
}
__astro_tag_component__(Contact, "@astrojs/react");

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
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
${renderComponent($$result, "Contact", Contact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/component/Contact", "client:component-export": "default" })}
</div>
${renderComponent($$result, "FooterPage", FooterPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/component/FooterPage", "client:component-export": "default" })}

</body>`;
}, "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/pages/contact.astro");

const $$file = "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
