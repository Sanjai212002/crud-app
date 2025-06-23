
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/crud-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/crud-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5209, hash: '0f9120c10784103ca87cf5f277a51216ecd4d355cc29cc9b7c015dce68949ddc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1181, hash: '2747dd851184a9e1fff48fb97c4b6d2e2e8615a12ddd3bdb4b6eb59b653bd064', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18212, hash: '85bc3a4bb095dc7d30bc4f109f4fe4fe687129b0042362239a93e75891c3191c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
