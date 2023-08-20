/* empty css                           */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent } from '../astro.02587cb0.mjs';
import 'html-escaper';
import { Card, Timeline, Button } from 'flowbite-react';
import { useRef, useState, useEffect } from 'react';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { H as HeaderPage, F as FooterPage } from './about.astro.39b43035.mjs';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const makeAppear = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting)
      setIsVisible(true);
  };
  const makeAppearRepeating = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const callBack = options.reappear ? makeAppearRepeating : makeAppear;
  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    const observer = new IntersectionObserver(callBack, options);
    if (containerRefCurrent)
      observer.observe(containerRefCurrent);
    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent);
      }
    };
  }, [containerRef, options, callBack]);
  return [containerRef, isVisible];
};
const AnimateOnScroll = ({
  children,
  reappear,
  threshold = 0.5
}) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold,
    reappear
  });
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("div", {
      ref: containerRef,
      className: `transition duration-1000 ${isVisible ? "opacity-100 blur-none translate-x-0" : "opacity-0 blur-lg -translate-x-20"}  motion-reduce:transition-none motion-reduce:hover:transform-none`,
      children
    })
  });
};
__astro_tag_component__(AnimateOnScroll, "@astrojs/react");

const TimeComponent = ({
  time,
  title,
  body
}) => {
  return /* @__PURE__ */ jsxs(Timeline.Item, {
    children: [/* @__PURE__ */ jsx(Timeline.Point, {}), /* @__PURE__ */ jsxs(Timeline.Content, {
      children: [/* @__PURE__ */ jsx(Timeline.Time, {
        children: time
      }), /* @__PURE__ */ jsx(Timeline.Title, {
        children: title
      }), /* @__PURE__ */ jsxs(Timeline.Body, {
        children: [" ", /* @__PURE__ */ jsx("p", {
          children: body
        })]
      })]
    })]
  });
};
const TimeComponentref = ({
  time,
  title,
  body,
  href
}) => {
  return /* @__PURE__ */ jsxs(Timeline.Item, {
    children: [/* @__PURE__ */ jsx(Timeline.Point, {}), /* @__PURE__ */ jsxs(Timeline.Content, {
      children: [/* @__PURE__ */ jsx(Timeline.Time, {
        children: time
      }), /* @__PURE__ */ jsx(Timeline.Title, {
        children: title
      }), /* @__PURE__ */ jsxs(Timeline.Body, {
        children: [/* @__PURE__ */ jsx("p", {
          children: body
        }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("a", {
          href,
          children: /* @__PURE__ */ jsx(Button, {
            color: "gray",
            children: /* @__PURE__ */ jsx("p", {
              children: "Learn More"
            })
          })
        })]
      })]
    })]
  });
};
function DefaultTimeline() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("div", {
      className: "flex justify-center",
      children: /* @__PURE__ */ jsx(Card, {
        children: /* @__PURE__ */ jsxs(Timeline, {
          children: [/* @__PURE__ */ jsx(AnimateOnScroll, {
            reappear: true,
            children: /* @__PURE__ */ jsx(TimeComponentref, {
              time: "Sept 2017",
              title: "Xi an Jiao Tong Liverpool University",
              body: "Admitted in the University",
              href: "https://www.xjtlu.edu.cn/en"
            })
          }), /* @__PURE__ */ jsx(AnimateOnScroll, {
            reappear: true,
            children: /* @__PURE__ */ jsx(TimeComponentref, {
              time: "Oct 2019",
              title: "Climathon",
              body: "Participate in a competition solution for climate problems",
              href: "https://climathon.climate-kic.org/"
            })
          }), /* @__PURE__ */ jsx(AnimateOnScroll, {
            reappear: true,
            children: /* @__PURE__ */ jsx(TimeComponentref, {
              time: "Nov 2020",
              title: "Future Investor 2020",
              body: "Attend a webinar focusing on Investment and mutual fund",
              href: "https://ppitiongkok.org/tag/future-investors/"
            })
          }), /* @__PURE__ */ jsx(AnimateOnScroll, {
            reappear: true,
            children: /* @__PURE__ */ jsx(TimeComponent, {
              time: "July 2022",
              title: "Xi an Jiao Tong Liverpool University",
              body: "Graduated as Bsc in Information Management Information System"
            })
          }), /* @__PURE__ */ jsx(AnimateOnScroll, {
            reappear: true,
            children: /* @__PURE__ */ jsx(TimeComponentref, {
              time: "July 2022- 2023",
              title: "PT Hoki Distribution Niaga",
              body: "Working as Programmer in Website and Mobile application",
              href: "https://www.linkedin.com/company/pt-hoki-distribusi-niaga/"
            })
          }), /* @__PURE__ */ jsx(AnimateOnScroll, {
            reappear: true,
            children: /* @__PURE__ */ jsx(TimeComponent, {
              time: "Aug 2023",
              title: "Illinois Tech",
              body: "Admitted on the University as Master in Computer Science"
            })
          })]
        })
      })
    })]
  });
}
__astro_tag_component__(DefaultTimeline, "@astrojs/react");

const $$Astro = createAstro("https://darrenchristoper.github.io");
const $$History = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$History;
  return renderTemplate`<head>
    <meta charset="utf-8">
    <link rel="icon" type="image/svg+xml" href="/dc.svg">
    <meta name="viewport" content="width=device-width">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>Darren Christoper</title>
${renderHead()}</head>

<body>
${renderComponent($$result, "HeaderPage", HeaderPage, {})}
${renderComponent($$result, "LineHistory", DefaultTimeline, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/component/LineHistory", "client:component-export": "default" })}
${renderComponent($$result, "FooterPage", FooterPage, {})}
</body>`;
}, "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/pages/history.astro");

const $$file = "C:/Users/Darren_Christoper/darrenchristoper.github.io/src/pages/history.astro";
const $$url = "/history";

export { $$History as default, $$file as file, $$url as url };
