
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
    'index.csr.html': {size: 40562, hash: '0445fd6043179d87e77c6d52c351039c1514b00d79b139526130607f2b8335e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 32944, hash: 'd2b3b7ddcea25afc3685e3088403b33908a8e902d9a1b7f3d48dc28d5c8f8d67', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 92437, hash: 'fa9329c3227df75d9f6bd25a35ebfdea5396c1e9673040fe8a20e6cde74e8c5b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-K7R3TKKV.css': {size: 8790, hash: 'MeAUpXntA7g', text: () => import('./assets-chunks/styles-K7R3TKKV_css.mjs').then(m => m.default)}
  },
};
