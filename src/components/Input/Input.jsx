import React from 'react';
import css from '../Input/Input.module.css';

export const Input = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchQuery = form.elements.search.value;
    form.reset();
    onSubmit(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        className={css.input}
      />
      <button type="submit" className={css.buttonSearch}>
        Search
      </button>
    </form>
  );
};
