import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import config from '../../data/SiteConfig';
import './index.css';
import MainContainer from '../components/MainContainer';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta content={config.siteDescription} name="description" />
      </Helmet>
      <Header />
      <MainContainer style={{ marginTop: '80px' }}>{children}</MainContainer>
      <Footer />
    </React.Fragment>
  );
}
