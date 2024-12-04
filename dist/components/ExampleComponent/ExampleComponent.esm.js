import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Page, Header, HeaderLabel, Content, ContentHeader, SupportButton, InfoCard } from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent/ExampleFetchComponent.esm.js';

const ExampleComponent = () => /* @__PURE__ */ React.createElement(Page, { themeId: "tool" }, /* @__PURE__ */ React.createElement(Header, { title: "Welcome to sfst!", subtitle: "Optional subtitle" }, /* @__PURE__ */ React.createElement(HeaderLabel, { label: "Owner", value: "Team X" }), /* @__PURE__ */ React.createElement(HeaderLabel, { label: "Lifecycle", value: "Alpha" })), /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(ContentHeader, { title: "Plugin title" }, /* @__PURE__ */ React.createElement(SupportButton, null, "A description of your plugin goes here.")), /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 3, direction: "column" }, /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(InfoCard, { title: "Information card" }, /* @__PURE__ */ React.createElement(Typography, { variant: "body1" }, "All content should be wrapped in a card like this."))), /* @__PURE__ */ React.createElement(Grid, { item: true }, /* @__PURE__ */ React.createElement(ExampleFetchComponent, null)))));

export { ExampleComponent };
//# sourceMappingURL=ExampleComponent.esm.js.map
