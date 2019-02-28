import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

import CategoryList from '../components/CategoryList';

const propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  date: PropTypes.string,
  html: PropTypes.string,
  image: PropTypes.string,
  timeToRead: PropTypes.number,
  title: PropTypes.string
};

const defaultProps = {};

function Post({ categories, className, date, html, image, timeToRead, title }) {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('es-AR', options).format(new Date(date));
  };
  return (
    <article className={className}>
      <Img
        fluid={image.childImageSharp.fluid}
        style={{
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          width: '100vw',
          height: '400px'
        }}
      />
      <div className="PostHeader">
        <div>
          <CategoryList categories={categories} />
          <div>Tiempo de lectura: {timeToRead} minutos</div>
        </div>
        <div>Publicado el {formatDate(date)}</div>
      </div>
      <div className="PostBody">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </article>
  );
}

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

export default styled(Post)`
  font-size: 22px;
  line-height: 1.5;

  .PostBody {
    width: 100%;
    margin: 0 auto;
    max-width: 900px;
    padding: 0 20px;
  }

  .PostHeader {
    width: 100%;
    margin: 0 auto;
    max-width: 900px;
    padding: 60px 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 14px;
  }
  h1 {
    font-size: 48px;
    font-weight: 300;
  }

  .PostBody a {
    color: black;
    text-decoration: none;
    border-bottom: 1px solid #00d000;
  }
`;
