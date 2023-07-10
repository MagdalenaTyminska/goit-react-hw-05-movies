const apiKey = 'ad45530c40a43b1ba52c40045584bc7b';

export const fetchTrending = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
    );
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchSearch = async (searchQuery, pageNumber) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=${pageNumber}&include_adult=false`
    );
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchDetails = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchCast = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
    );
    const data = await response.json();
    return data.cast;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchReviews = async movieId => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`
    );
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
