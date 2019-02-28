import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

function CategoryList({ categories, className }) {
  return (
    <span className={className}>
      {categories.map((category, index) => (
        <React.Fragment key={category}>
          <Link to={`/categories/${category.toLowerCase()}`}>
            {category}
            {index === categories.length - 1 ? '' : ',\u00A0'}
          </Link>
        </React.Fragment>
      ))}
    </span>
  );
}

export default styled(CategoryList)`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    color: #00d000;
    text-decoration: none;
  }
`;
