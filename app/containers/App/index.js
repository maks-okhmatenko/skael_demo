/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from 'antd';

import AppHeader from '../../components/AppHeader';
import AppSidebar from '../../components/AppSidebar';
import Breadcrumbs from '../../components/Breadcrumbs';
import ModalsList from './Modals/ModalsList';
import Router from '../Router';

import GlobalStyle from '../../global-styles';

const { Content } = Layout;

const AppWrapper = styled.div`
  min-height: 100%;
`;

export default function App() {
  const helmetProps = {
    titleTemplate: '%s - Skael Platform',
    defaultTitle: 'Skael platform',
  };

  return (
    <AppWrapper>
      <Helmet {...helmetProps}>
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>

      <Layout style={{ minHeight: '100vh' }}>
        <AppSidebar />

        <Layout>
          <AppHeader />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumbs />
            <Router />
          </Content>
        </Layout>
      </Layout>

      <ModalsList />
      <GlobalStyle />
    </AppWrapper>
  );
}
