import {
  createPlugin,
  createRoutableExtension,
  createComponentExtension
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const sfstPlugin = createPlugin({
  id: 'sfst',
  routes: {
    root: rootRouteRef,
  },
});

export const SfstCard = sfstPlugin.provide(
  createComponentExtension({
    component: {
      lazy: () => import('./components/SfstCard').then(m => m.SfstCard),
    },
  }),
);

export const SfstPage = sfstPlugin.provide(
  createRoutableExtension({
    name: 'SfstPage',
    component: () =>
      import('./components/SfstComponent').then(m => m.SfstComponent),
    mountPoint: rootRouteRef,
  }),
);
