import{j as e,T as t,B as x}from"./Tooltip.269881a5.js";import{C as h}from"./Card.d373bfa2.js";import{r as m}from"./index.7f48f860.js";const j=n=>{const r=m.useRef(null),[s,o]=m.useState(!1),d=i=>{const[a]=i;a.isIntersecting&&o(!0)},p=i=>{const[a]=i;o(a.isIntersecting)},u=n.reappear?p:d;return m.useEffect(()=>{const i=r.current,a=new IntersectionObserver(u,n);return i&&a.observe(i),()=>{i&&a.unobserve(i)}},[r,n,u]),[r,s]},c=({children:n,reappear:r,threshold:s=.5})=>{const[o,d]=j({threshold:s,reappear:r});return e.jsx(e.Fragment,{children:e.jsx("div",{ref:o,className:`transition duration-1000 ${d?"opacity-100 blur-none translate-x-0":"opacity-0 blur-lg -translate-x-20"}  motion-reduce:transition-none motion-reduce:hover:transform-none`,children:n})})},f=({time:n,title:r,body:s})=>e.jsxs(t.Item,{children:[e.jsx(t.Point,{}),e.jsxs(t.Content,{children:[e.jsx(t.Time,{children:n}),e.jsx(t.Title,{children:r}),e.jsxs(t.Body,{children:[" ",e.jsx("p",{children:s})]})]})]}),l=({time:n,title:r,body:s,href:o})=>e.jsxs(t.Item,{children:[e.jsx(t.Point,{}),e.jsxs(t.Content,{children:[e.jsx(t.Time,{children:n}),e.jsx(t.Title,{children:r}),e.jsxs(t.Body,{children:[e.jsx("p",{children:s}),e.jsx("br",{}),e.jsx("a",{href:o,children:e.jsx(x,{color:"gray",children:e.jsx("p",{children:"Learn More"})})})]})]})]});function v(){return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("div",{className:"flex justify-center",children:e.jsx(h,{children:e.jsxs(t,{children:[e.jsx(c,{reappear:!0,children:e.jsx(l,{time:"Sept 2017",title:"Xi an Jiao Tong Liverpool University",body:"Admitted in the University",href:"https://www.xjtlu.edu.cn/en"})}),e.jsx(c,{reappear:!0,children:e.jsx(l,{time:"Oct 2019",title:"Climathon",body:"Participate in a competition solution for climate problems",href:"https://climathon.climate-kic.org/"})}),e.jsx(c,{reappear:!0,children:e.jsx(l,{time:"Nov 2020",title:"Future Investor 2020",body:"Attend a webinar focusing on Investment and mutual fund",href:"https://ppitiongkok.org/tag/future-investors/"})}),e.jsx(c,{reappear:!0,children:e.jsx(f,{time:"July 2022",title:"Xi an Jiao Tong Liverpool University",body:"Graduated as Bsc in Information Management Information System"})}),e.jsx(c,{reappear:!0,children:e.jsx(l,{time:"July 2022- 2023",title:"PT Hoki Distribution Niaga",body:"Working as Programmer in Website and Mobile application",href:"https://www.linkedin.com/company/pt-hoki-distribusi-niaga/"})}),e.jsx(c,{reappear:!0,children:e.jsx(l,{time:"Aug 2023",title:"Illinois Institute of Technology",body:"Admitted on the University as Master in Computer Science",href:"https://www.iit.edu/"})})]})})})]})}export{v as default};
