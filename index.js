import express from "express";
import { configDotenv } from "dotenv";
import axios from "axios";

configDotenv();

const app = express();
const PORT = process.env.PORT;

app.use(express.static('public'));

const API_URL = "https://api.themoviedb.org/3/discover/movie";
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
// https://api.themoviedb.org/3/movie/{movie_id}/images

// Multi search (movies, series, people)
// https://api.themoviedb.org/3/search/multi
// https://developer.themoviedb.org/reference/search-multi (Documentation)

// Movies
// ======
// Discover movies
// https://api.themoviedb.org/3/discover/movie
// https://developer.themoviedb.org/reference/discover-movie (Documentation)
// sort_by : popularity.desc (default) -> Get all movies

// Get all movies genres
// https://api.themoviedb.org/3/genre/movie/list
// https://developer.themoviedb.org/reference/genre-movie-list (Documentation)

// Get movie details
// https://api.themoviedb.org/3/movie/{movie_id}
// https://developer.themoviedb.org/reference/movie-details (Documentation)

// Get popular movies
// https://api.themoviedb.org/3/movie/popular
// https://developer.themoviedb.org/reference/movie-popular-list (Documentation)

// Get top rated movies
// https://api.themoviedb.org/3/movie/top_rated
// https://developer.themoviedb.org/reference/movie-top-rated-list (Documentation)

// Trending movies
// https://api.themoviedb.org/3/trending/movie/{time_window} (day/week)
// https://developer.themoviedb.org/reference/trending-movies (Documentation)

// Get upcoming movies
// https://api.themoviedb.org/3/movie/upcoming
// https://developer.themoviedb.org/reference/movie-upcoming-list (Documentation)

// Latest movies
// https://api.themoviedb.org/3/movie/latest
// https://developer.themoviedb.org/reference/movie-latest-id (Documentation)

// Similar movies
// https://api.themoviedb.org/3/movie/{movie_id}/similar Return similar movie
// https://developer.themoviedb.org/reference/movie-similar (Documentation)

// Search movies
// https://api.themoviedb.org/3/search/movie
// https://developer.themoviedb.org/reference/search-movie (Documentation)

// Series
// ======
// Discover series
// https://api.themoviedb.org/3/discover/tv
// https://developer.themoviedb.org/reference/discover-tv (Documentation)
// sort_by : popularity.desc (default) -> Get all series

// Get all series genres
// https://api.themoviedb.org/3/genre/tv/list
// https://developer.themoviedb.org/reference/genre-tv-list (Documentation)

// Get serie details
// https://api.themoviedb.org/3/tv/{series_id}
// https://developer.themoviedb.org/reference/tv-series-details (Documentation)

// Get popular series
// https://api.themoviedb.org/3/tv/popular
// https://developer.themoviedb.org/reference/tv-series-popular-list (Documentation)

// Get top rated series
// https://api.themoviedb.org/3/tv/top_rated
// https://developer.themoviedb.org/reference/tv-series-top-rated-list (Documentation)

// Trending series
// https://api.themoviedb.org/3/trending/tv/{time_window} (day/week)
// https://developer.themoviedb.org/reference/trending-tv (Documentation)

// Latest series
// https://api.themoviedb.org/3/tv/latest
// https://developer.themoviedb.org/reference/tv-series-latest-id (Documentation)

// Similar series
// https://api.themoviedb.org/3/tv/{series_id}/similar Return similar movie
// https://developer.themoviedb.org/reference/tv-series-similar (Documentation)

// Search series
// https://api.themoviedb.org/3/search/tv
// https://developer.themoviedb.org/reference/search-tv (Documentation)

const config = {
     headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + process.env.MOVIE_DB_ACCESS_TOKEN
     }
};

app.get('/', async (req, res) => {
     try{
          const request = await axios.get(API_URL, config);
          const response = request.data;
          res.render("index.ejs");
     }catch(error){
          console.log(error);
     }
});

app.listen(PORT, () => {
     console.log("server is running on port: " + PORT);
});