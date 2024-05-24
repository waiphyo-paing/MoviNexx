const moviedb_api_version = 3;
export const API_URL = `https://api.themoviedb.org/${moviedb_api_version}`;
export const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const movieDefaultPlaceholder = API_URL + "/movie";
const serieDefaultPlaceholder = API_URL + "/tv";

export const API_ENDPOINTS = {
     movie: {
          all: (sort_type = "popularity.desc") => `${API_URL}/discover/movie?sort_by=${sort_type}`,
          genres: `${API_URL}/genre/movie/list`,
          details: (movieId) => `${movieDefaultPlaceholder}/${movieId}`,
          popular: `${movieDefaultPlaceholder}/popular`,
          topRated: `${movieDefaultPlaceholder}/top_rated`,
          trending: (timeWindow = "day") => `${API_URL}/trending/movie/${timeWindow}`,
          upcoming: `${movieDefaultPlaceholder}/upcoming`,
          latest: `${movieDefaultPlaceholder}/latest`,
          similar: (movieId) => `${movieDefaultPlaceholder}/${movieId}/similar`,
          search: (query) => `${API_URL}/search/movie?query=${query}`
     },
     series: {
          all: (sort_type = "popularity.desc") => `${API_URL}/discover/tv?sort_by=${sort_type}`,
          genres: `${API_URL}/genre/tv/list`,
          details: (seriesId) => `${serieDefaultPlaceholder}/${seriesId}`,
          popular: `${serieDefaultPlaceholder}/popular`,
          topRated: `${serieDefaultPlaceholder}/top_rated`,
          trending: (timeWindow = "day") => `${API_URL}/trending/tv/${timeWindow}`,
          latest: `${serieDefaultPlaceholder}/latest`,
          similar: (seriesId) => `${serieDefaultPlaceholder}/${seriesId}/similar`,
          search: (query) => `${API_URL}/search/tv?query=${query}`
     }
};

export const config = {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.MOVIE_DB_ACCESS_TOKEN
    }
};
