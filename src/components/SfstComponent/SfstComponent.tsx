import React from 'react';
import {
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="Welcome to SFST!" subtitle="The Sharing Fish Space Telescope!">
      <HeaderLabel label="Owner" value="Sharing Fish" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Plugin title">
        <SupportButton>Use the card that comes with this plugin to see how many stars are on your GitHub Repos!</SupportButton>
      </ContentHeader>
    </Content>
  </Page>
);