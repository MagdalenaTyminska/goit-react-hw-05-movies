import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from '../Cast/Cast.module.css';
import { fetchCast } from 'components/API/API';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const handleCast = async () => {
      setIsLoading(true);
      setCast([]);

      const movieCast = await fetchCast(Number(movieId));
      setCast(movieCast);

      setIsLoading(false);
    };

    handleCast();
  }, [movieId]);

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.length === 0 ? (
          <p>There is no cast</p>
        ) : (
          cast.map(actor => (
            <li className={css.castItem} key={actor.name}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
              />
              <div className={css.actor}>
                <p>Name: {actor.name}</p>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          ))
        )}
      </ul>
      {isLoading && <Loader />}
    </div>
  );
};

export default Cast;
