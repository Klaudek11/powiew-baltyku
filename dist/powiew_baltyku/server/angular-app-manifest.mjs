
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
    'index.csr.html': {size: 40562, hash: '2f524b050dd367a7acafc495ed85f85d88f39a6b65177a8aed6a83bada78d84c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 32944, hash: 'ed67c90be39fc654241e58680dd969512ea6bfb603f616e1296bf087b146662d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 92470, hash: 'd5436be052f2d01f2c5d2bedd551b603601f877d8ae6cad19732c47f3582ca58', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-K7R3TKKV.css': {size: 8790, hash: 'MeAUpXntA7g', text: () => import('./assets-chunks/styles-K7R3TKKV_css.mjs').then(m => m.default)}
  },
};
