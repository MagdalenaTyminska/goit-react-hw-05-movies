import React from 'react';
import { PropTypes } from 'prop-types';
import css from '../ButtonLoad/ButtonLoad.module.css';

export const ButtonLoad = ({ onClick }) => (
  <button onClick={onClick} className={css.buttonLoad}>
    Load more
  </button>
);

ButtonLoad.propTypes = {
  onClick: PropTypes.func,
};
