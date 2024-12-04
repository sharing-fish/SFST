import { createPlugin, createComponentExtension, createRoutableExtension } from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes.esm.js';

const sfstPlugin = createPlugin({
  id: "sfst",
  routes: {
    root: rootRouteRef
  }
});
const SfstCard = sfstPlugin.provide(
  createComponentExtension({
    component: {
      lazy: () => import('./components/SfstCard/index.esm.js').then((m) => m.SfstCard)
    }
  })
);
const SfstPage = sfstPlugin.provide(
  createRoutableExtension({
    name: "SfstPage",
    component: () => import('./components/ExampleComponent/index.esm.js').then((m) => m.ExampleComponent),
    mountPoint: rootRouteRef
  })
);

export { SfstCard, SfstPage, sfstPlugin };
//# sourceMappingURL=plugin.esm.js.map
