import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import IncreaseLogoType from './IncreaseLogoType';
import MainContainer from './MainContainer';

const propTypes = {
  className: PropTypes.string
};
const defaultProps = {};

function Header({ className }) {
  return (
    <header className={className}>
      <MainContainer style={{ flexDirection: 'row' }}>
        <ul>
          <li className="logo">
            <IncreaseLogoType />
          </li>
          <li>
            <Link to="/blog">Blog home</Link>
          </li>
          <li>
            <a href="/categories/tarjetas-de-credito">Tarjetas de crédito</a>
          </li>
          <li>
            <a href="/categories/pymes">Pymes</a>
          </li>
          <li>
            <a href="/categories/e-commerce">E-commerce</a>
          </li>
          <li>
            <a href="/categories/atencion-al-cliente">Atención al cliente</a>
          </li>
          <li>
            <a href="/categories/marketing-online">Marketing online</a>
          </li>
          <li>
            <a href="/categories/nosotros">Nosotros</a>
          </li>
          <li>
            <a href="/categories/ebooks">Ebooks</a>
          </li>
        </ul>
      </MainContainer>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default styled(Header)`
  display: flex;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  flex-direction: row;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  height: 80px;
  line-height: 1;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    text-transform: uppercase;
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    padding: 4px;
    margin-right: 32px;
    white-space: nowrap;
    position: relative;
  }

  li:not(.logo):hover::after,
  li.active::after {
    content: '';
    display: block;
    width: 16px;
    height: 2px;
    background-color: #00d000;
    position: absolute;
    left: calc(50% - 8px);
    bottom: -2px;
  }

  li.logo {
    margin-right: 120px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
