import{j as m}from"./jsx-runtime.8929835e.js";import{m as s,u as i,t as c}from"./Tooltip.5547833c.js";import"./index.69c6aefd.js";const f=r=>e=>{const t={};return Object.keys(e).forEach(o=>{r.includes(o)||(t[o]=e[o])}),t},N=r=>{const{children:e,className:t,horizontal:o,href:n,theme:h={}}=r,l=typeof n>"u"?"div":"a",d=u(r),a=s(i().theme.card,h);return m.jsxs(l,{"data-testid":"flowbite-card",href:n,className:c(a.root.base,a.root.horizontal[o?"on":"off"],n&&a.root.href,t),...d,children:[m.jsx(g,{...r}),m.jsx("div",{className:a.root.children,children:e})]})},g=({theme:r={},...e})=>{const t=s(i().theme.card,r);return e.renderImage?e.renderImage(t,e.horizontal??!1):e.imgSrc?m.jsx("img",{"data-testid":"flowbite-card-image",alt:e.imgAlt??"",src:e.imgSrc,className:c(t.img.base,t.img.horizontal[e.horizontal?"on":"off"])}):null},u=f(["renderImage","imgSrc","imgAlt","children","className","horizontal","href","theme"]);export{N as C};
