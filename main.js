const tmdbKey = "283158bd06dd1684146f37464c01d6d7";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");

const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=283158bd06dd1684146f37464c01d6d7`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      return genres;
    }
  } catch (error) {
    console.log(error);
  }
};
///////////////// NEW FEATURE ///////////////////////
const searchBtn = document.getElementById("searchBtn");

const getMovieBySearchArray = async () => {
  const input = document.getElementById("movieIput").value;
  console.log(input);
  const movieKeywordEndpoint = "/search/movie";
  const requestParams = `?api_key=283158bd06dd1684146f37464c01d6d7&query=${input}`;
  const urlToFetch = `${tmdbBaseUrl}${movieKeywordEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const movie = jsonResponse.results;
      console.log(movie);
      return movie;
    }
  } catch (error) {
    console.log(error);
  }
};

const createMovieCard = () => {
  const movieCard = document.createElement("div");
  movieCard.setAttribute("class", "video-card");
  return movieCard;
};

const resMovie = async () => {
  clearCurrentMovie();

  const relatedMovie = await getMovieBySearchArray();
  displayMovie(relatedMovie);
};

// getMovieBySearchArray(getSearchInput);

searchBtn.onclick = resMovie;
////////////////////// END ///////////////////////
const populateGenreDropdown = (genres) => {
  const select = document.getElementById("genres");

  for (const genre of genres) {
    let option = document.createElement("option");
    option.value = genre.id;
    option.text = genre.name;
    select.appendChild(option);
  }
};
const getSelectedGenre = () => {
  const selectedGenre = document.getElementById("genres").value;
  return selectedGenre;
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = "/discover/movie";
  const requestParams = `?api_key=283158bd06dd1684146f37464c01d6d7&with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      //   console.log(jsonResponse);
      const movie = jsonResponse.results;
      console.log(movie);
      return movie;
    }
  } catch (error) {
    console.log(error);
  }
};



// const getMovieInfo = async (movie) => {
//   const movieId = movie.id;
//   const movieEndpoint = `/movie/${movieId}`;
//   const requestParams = `?api_key=283158bd06dd1684146f37464c01d6d7`;
//   const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;
//   try {
//     const response = await fetch(urlToFetch);
//     if (response.ok) {
//       const movieInfo = await response.json();
//       console.log(movieInfo);
//       return movieInfo;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// Create HTML for movie container

// Create HTML for movie poster
const createMoviePoster = (posterPath) => {
  const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

  const posterImg = document.createElement("img");
  posterImg.setAttribute("src", moviePosterUrl);
  posterImg.setAttribute("id", "moviePoster");

  return posterImg;
};



// Create HTML for movie title
const createMovieTitle = (title) => {
  const titleHeader = document.createElement("h2");
  titleHeader.setAttribute("id", "movieTitle");
  titleHeader.innerHTML = title;

  return titleHeader;
};

// Create HTML for movie overview
const createMovieOverview = (overview) => {
  const overviewParagraph = document.createElement("p");
  overviewParagraph.setAttribute("id", "movieOverview");
  overviewParagraph.innerHTML = overview;

  return overviewParagraph;
};

const displayMovie = (movies) => {
  console.log(movies);
  const movieContainer = document.getElementById("movieInfo");

  movies.forEach((movie) => {
    // const movieCard = document.createElement("div");
    const movieCard = createMovieCard();
    const img = createMoviePoster(movie.poster_path);
    const title = createMovieTitle(movie.title);
    const parag = createMovieOverview(movie.overview);

    movieCard.appendChild(img);
    movieCard.appendChild(title);
    movieCard.appendChild(parag);

    movieContainer.appendChild(movieCard);
  });
};

const clearCurrentMovie = () => {
  const movieList = document.getElementById("movieInfo");
  movieList.innerHTML = "";
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showMovie = async () => {
  const movieContainer = document.getElementById("movieInfo");
  clearCurrentMovie();

  const movies = await getMovies();
  console.log(movies);
  //   const randomIndex = Math.floor(Math.random() * movies.length);
  //   const randomMovie = movies[randomIndex];

  //   const movieInfo = await getMovieInfo(randomMovie);
  //   displayMovie([movieInfo], movieContainer);
  displayMovie(movies);
};

// getMovies()
getGenres().then(populateGenreDropdown);
playBtn.onclick = showMovie;
