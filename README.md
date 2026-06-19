# darrenchristoper.github.io

There's a version of the internet where a portfolio is just a list of bullet points — skills, dates, job titles stacked in a table. This isn't that.

This is the story of **Darren Christoper**.

---

## The Beginning

It started with a question every engineer eventually asks themselves: *how do I show people not just what I've built, but who I am?*

Darren is a Full Stack Software Engineer based in **Chicago, IL**, holding a Master's in Computer Science from Illinois Institute of Technology. He's worked across the full spectrum — web platforms, cloud infrastructure, AI/ML research pipelines, and now, robots crawling through sewer pipes. The range is real.

The goal was a website that felt as considered as the work itself. Clean. Fast. A little dramatic. Something that breathes.

Live at → **[darrenchristoper.github.io](https://darrenchristoper.github.io)**

---

## The World He Built

Every page is a chapter.

**Home** sets the scene — a dark hero section with a cinematic intro, followed by cards that hint at what Darren knows and what he's built.

**About** is where he speaks directly. No résumé-speak. Just who he is, what drives him, and an invitation to connect.

**Projects** is the portfolio proper — three featured works that span embedded robotics at Afila Labs, AI/ML research at IIT, and a full-stack distribution platform for a high-traffic FMCG business in Indonesia. Each project carries its own color, its own weight.

**History** is the timeline — a visual journey from his undergraduate years at XJTLU & University of Liverpool all the way through to today. Scroll down and watch the story unfold.

**Contact** is an open door.

---

## How It Was Made

The site is built with **Astro** — a framework that ships almost zero JavaScript by default, yet lets you drop in React components exactly where interactivity is needed. The result is something that loads fast and feels native.

**Tailwind CSS** handles the design system. The aesthetic draws from Apple's Human Interface Guidelines — tight letter-spacing, generous whitespace, the specific shade of blue (`#0071e3`) that says *click me* without shouting.

Parallax scrolling is layered in with lightweight vanilla JS — no heavy libraries, just `requestAnimationFrame` and a few carefully chosen speeds. The cards drift. The hero breathes.

**Embla Carousel** powers the image slider. **tailwindcss-animated** handles the fade-in entrances. Everything else is handwritten.

---

## Running It Locally

If you want to see the story come to life on your own machine:

```bash
npm install
npm run dev
```

Open `localhost:4321`. Requires **Node.js >= 24**.

To build for production:

```bash
npm run build
npm run preview
```

---

## Under the Hood

```
src/
  pages/        # The five chapters (Astro routes)
  component/    # React components — header, cards, carousel, footer
  astropage/    # Astro-native jumbotron hero sections
  style/        # Carousel styles
public/
  resume.pdf    # The document version of the story
  dc.svg        # The mark
```

---

*Built by Darren Christoper. Deployed on GitHub Pages.*
