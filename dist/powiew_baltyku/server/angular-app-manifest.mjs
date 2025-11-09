
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 40562, hash: '6ca7b5b9dce619a4115748dc17334a0b865fa05a0f30d11083d4795ec27a4059', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 32944, hash: '7f08a6dd86da87cef664c4c9d8f2c134be9786a4a5e2595f7d854132802c87a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 92467, hash: '333ce0a8e6f8b2fccc6dd926c0ce7c74d790d49ef7feb6d5b4031e7c0352cb16', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-K7R3TKKV.css': {size: 8790, hash: 'MeAUpXntA7g', text: () => import('./assets-chunks/styles-K7R3TKKV_css.mjs').then(m => m.default)}
  },
};
