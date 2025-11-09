
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
    'index.csr.html': {size: 40562, hash: 'b15bc14c099ae0215b88ae38ec127e1d78e731eabe2adc4354bdf3b5bd7d0449', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 32944, hash: '55456d2684852995ab33a02504d249ac233f57c9d2560ea52740d2b0e08e8e28', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 92464, hash: 'fdb2b0b510df470082a12a8cf35dc31b27f6f5fea7d26acacc5e0053688764c1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-K7R3TKKV.css': {size: 8790, hash: 'MeAUpXntA7g', text: () => import('./assets-chunks/styles-K7R3TKKV_css.mjs').then(m => m.default)}
  },
};
