
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sanjai212002.github.io/crud-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/crud-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5239, hash: '6e6c1bbc19e7bc2fa93070b21a4c13f76a0463f7e253f02c9939eb9fd005411a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1211, hash: 'bd530c8460e4968de37dbe6f7ee39ffdf47eb59d9484ee93af2ce235886581ac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18242, hash: 'cfa77429e7acfc449e11dfedf95e8a2cc908c05a9504dd02b52d6f11f986de66', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
