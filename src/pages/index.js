import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import { graphql } from 'gatsby';

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
      </Layout>
    );
  }
}

export const query = graphql`
  fragment PostThumbnail on File {
    childImageSharp {
      fluid(maxWidth: 900) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;
export default Index;
