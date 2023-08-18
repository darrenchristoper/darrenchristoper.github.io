export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import '../../chunks/astro.1d8372e8.mjs';
import 'html-escaper';
import 'react';
import 'react-dom/server';

const page = () => import('../../chunks/pages/about.astro.c7518ed8.mjs').then(n => n.a);

export { page };
