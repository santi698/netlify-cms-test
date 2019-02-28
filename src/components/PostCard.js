import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import CategoryList from '../components/CategoryList';

const propTypes = {
  author: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  image: PropTypes.object,
  path: PropTypes.string,
  title: PropTypes.string
};

const defaultProps = {};

function PostCard({ author, categories, className, date, excerpt, title, path, image }) {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('es-AR', options).format(new Date(date));
  };
  return (
    <article className={className}>
      <Link to={path}>
        {image.childImageSharp && <Img alt={title} fluid={image.childImageSharp.fluid} />}
      </Link>
      <div className="body">
        <Link to={path}>
          <h1>{title}</h1>
          <p>{excerpt}</p>
        </Link>
        <div className="footer">
          <CategoryList categories={categories} />
          <span className="DateAndAuthor">
            {formatDate(date)} por <strong>{author}</strong>
            <img alt="Author photography" />
          </span>
        </div>
      </div>
    </article>
  );
}

PostCard.propTypes = propTypes;
PostCard.defaultProps = defaultProps;

export default styled(PostCard)`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  font-weight: 300;

  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
  }

  img {
    width: 100%;
    margin: 0 auto;
  }

  .body {
    padding: 30px;
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .DateAndAuthor {
    color: rgba(0, 0, 0, 0.35);
  }

  .DateAndAuthor strong {
    color: black;
    font-weight: inherit;
  }

  h1 {
    font-size: 26px;
    margin: 0;
  }

  & + & {
    margin-top: 30px;
  }
`;
