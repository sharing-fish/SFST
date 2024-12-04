import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { sfstPlugin, SfstPage } from '../src/plugin';

createDevApp()
  .registerPlugin(sfstPlugin)
  .addPage({
    element: <SfstPage />,
    title: 'Root Page',
    path: '/sfst',
  })
  .render();
