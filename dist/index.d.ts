import * as react from 'react';
import * as _backstage_core_plugin_api from '@backstage/core-plugin-api';

declare const sfstPlugin: _backstage_core_plugin_api.BackstagePlugin<{
    root: _backstage_core_plugin_api.RouteRef<undefined>;
}, {}, {}>;
declare const SfstCard: () => react.JSX.Element;
declare const SfstPage: () => react.JSX.Element;

export { SfstCard, SfstPage, sfstPlugin };
