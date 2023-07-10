import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../Layout/Layout.module.css';
import styled from 'styled-components';

const Link = styled(NavLink)`
  &.active {
    transform: scale(1.05);
    background-color: pink;
    color: white;
    box-shadow: 10px 10px 10px -10px rgba(0, 0, 0, 0.41);
  }
`;

export const Layout = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.mainNavigation}>
          <Link to="/" end className={css.link}>
            Home
          </Link>
          <Link to="/movies" className={css.link}>
            Movies
          </Link>
        </nav>
      </header>
      <main className={css.main}>{children}</main>
    </>
  );
};
