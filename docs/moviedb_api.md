# TMDB API Documentation

## API Version

- **Version:** 3

## Base URL

- **API URL:** `https://api.themoviedb.org/3`
- **Image Path:** `https://image.tmdb.org/t/p/w1280`

## Endpoints

### Multi Search (Movies, Series, People)

- **URL:** `https://api.themoviedb.org/3/search/multi`
- **Documentation:** [Search Multi](https://developer.themoviedb.org/reference/search-multi)

### Movies

#### Discover Movies

- **URL:** `https://api.themoviedb.org/3/discover/movie`
- **Documentation:** [Discover Movie](https://developer.themoviedb.org/reference/discover-movie)
- **Default Sort:** `popularity.desc`

#### Get All Movie Genres

- **URL:** `https://api.themoviedb.org/3/genre/movie/list`
- **Documentation:** [Genre Movie List](https://developer.themoviedb.org/reference/genre-movie-list)

#### Get Movie Details

- **URL:** `https://api.themoviedb.org/3/movie/{movie_id}`
- **Documentation:** [Movie Details](https://developer.themoviedb.org/reference/movie-details)

#### Get Popular Movies

- **URL:** `https://api.themoviedb.org/3/movie/popular`
- **Documentation:** [Popular Movies](https://developer.themoviedb.org/reference/movie-popular-list)

#### Get Top Rated Movies

- **URL:** `https://api.themoviedb.org/3/movie/top_rated`
- **Documentation:** [Top Rated Movies](https://developer.themoviedb.org/reference/movie-top-rated-list)

#### Trending Movies

- **URL:** `https://api.themoviedb.org/3/trending/movie/{time_window}` (day/week)
- **Documentation:** [Trending Movies](https://developer.themoviedb.org/reference/trending-movies)

#### Get Upcoming Movies

- **URL:** `https://api.themoviedb.org/3/movie/upcoming`
- **Documentation:** [Upcoming Movies](https://developer.themoviedb.org/reference/movie-upcoming-list)

#### Latest Movies

- **URL:** `https://api.themoviedb.org/3/movie/latest`
- **Documentation:** [Latest Movies](https://developer.themoviedb.org/reference/movie-latest-id)

#### Similar Movies

- **URL:** `https://api.themoviedb.org/3/movie/{movie_id}/similar`
- **Documentation:** [Similar Movies](https://developer.themoviedb.org/reference/movie-similar)

#### Search Movies

- **URL:** `https://api.themoviedb.org/3/search/movie`
- **Documentation:** [Search Movies](https://developer.themoviedb.org/reference/search-movie)

### Series

#### Discover Series

- **URL:** `https://api.themoviedb.org/3/discover/tv`
- **Documentation:** [Discover TV](https://developer.themoviedb.org/reference/discover-tv)
- **Default Sort:** `popularity.desc`

#### Get All Series Genres

- **URL:** `https://api.themoviedb.org/3/genre/tv/list`
- **Documentation:** [Genre TV List](https://developer.themoviedb.org/reference/genre-tv-list)

#### Get Series Details

- **URL:** `https://api.themoviedb.org/3/tv/{series_id}`
- **Documentation:** [TV Series Details](https://developer.themoviedb.org/reference/tv-series-details)

#### Get Popular Series

- **URL:** `https://api.themoviedb.org/3/tv/popular`
- **Documentation:** [Popular Series](https://developer.themoviedb.org/reference/tv-series-popular-list)

#### Get Top Rated Series

- **URL:** `https://api.themoviedb.org/3/tv/top_rated`
- **Documentation:** [Top Rated Series](https://developer.themoviedb.org/reference/tv-series-top-rated-list)

#### Trending Series

- **URL:** `https://api.themoviedb.org/3/trending/tv/{time_window}` (day/week)
- **Documentation:** [Trending Series](https://developer.themoviedb.org/reference/trending-tv)

#### Latest Series

- **URL:** `https://api.themoviedb.org/3/tv/latest`
- **Documentation:** [Latest Series](https://developer.themoviedb.org/reference/tv-series-latest-id)

#### Similar Series

- **URL:** `https://api.themoviedb.org/3/tv/{series_id}/similar`
- **Documentation:** [Similar Series](https://developer.themoviedb.org/reference/tv-series-similar)

#### Search Series

- **URL:** `https://api.themoviedb.org/3/search/tv`
- **Documentation:** [Search Series](https://developer.themoviedb.org/reference/search-tv)
