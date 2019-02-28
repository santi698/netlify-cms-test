import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { Index } from 'elasticlunr';

import SEO from '../components/SEO/SEO';
import Layout from '../layout';
import PostCard from '../components/PostCard';
import config from '../../data/SiteConfig';

const propTypes = {};

const defaultProps = {};

export default function Search({ page = 1, perPage = 10, data, location }) {
  const query = new URLSearchParams(location.search).get('q');
  const [results, setResults] = useState([]);
  const getDocuments = () => {
    const index = Index.load(data.siteSearchIndex.index);
    const documents = index
      .search(query, { expand: true })
      .map((result) => {
        return index.documentStore.getDoc(result.ref);
      })
      .slice((page - 1) * perPage, page * perPage);
    setResults(documents);
  };
  useEffect(() => getDocuments(), [query]);
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <h1>Búsqueda</h1>
      <div>
        <div>
          <input defaultValue={query} />
          <button onClick={getDocuments}>Buscar</button>
        </div>
        {results.map((document) => (
          <PostCard key={document.title} {...document} />
        ))}
        {results.length === 0 && <p>Su búsqueda no produjo resultados</p>}
      </div>
    </Layout>
  );
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export const query = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`;
