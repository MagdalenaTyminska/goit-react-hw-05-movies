import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from '../Home/Home.module.css';
import { fetchTrending } from 'components/API/API';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const location = useLocation();
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleRenderList = async () => {
    setIsLoading(true);
    const movies = await fetchTrending();
    setTrending(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    handleRenderList();
  }, []);

  return (
    <>
      <h1>Trending movies</h1>
      <ul>
        {trending.length === 0 ? (
          <p>There are no movies</p>
        ) : (
          trending.map(movie => (
            <li key={movie.id}>
              <Link
                id={movie.id}
                to={`/movies/${movie.id}`}
                state={{ from: location }}
                className={css.movieLink}
              >
                {movie.original_title}
              </Link>
            </li>
          ))
        )}
      </ul>
      {isLoading && <Loader />}
    </>
  );
};

export default Home;
