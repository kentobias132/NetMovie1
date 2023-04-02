// Populate dropdown menu with all the available genres
const populateGenreDropdown = (genres) => {
  const select = document.getElementById("genres");

  for (const genre of genres) {
    let option = document.createElement("option");
    option.value = genre.id;
    option.text = genre.name;
    select.appendChild(option);
  }
};

// Returns the current genre selection from the dropdown menu
const getSelectedGenre = () => {
  const selectedGenre = document.getElementById("genres").value;
  return selectedGenre;
};

// Displays the like and dislike buttons on the page
const showBtns = () => {
  const btnDiv = document.getElementById("likeOrDislikeBtns");
  btnDiv.removeAttribute("hidden");
};

// Clear the current movie from the screen
const clearCurrentMovie = () => {
  const movieList = document.getElementById("movieInfo");
  //   const movieTextDiv = document.getElementById("movieText");
  movieList.innerHTML = "";
  //   movieTextDiv.innerHTML = "";
};

// After liking a movie, clears the current movie from the screen and gets another random movie
const likeMovie = () => {
  clearCurrentMovie();
  showRandomMovie();
};

// After disliking a movie, clears the current movie from the screen and gets another random movie
const dislikeMovie = () => {
  clearCurrentMovie();
  showRandomMovie();
};

// Create HTML for movie poster
// const createMoviePoster = (posterPath) => {
//   const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

//   const posterImg = document.createElement("img");
//   posterImg.setAttribute("src", moviePosterUrl);
//   posterImg.setAttribute("id", "moviePoster");

//   return posterImg;
// };

// Create HTML for movie title
// const createMovieTitle = (title) => {
//   const titleHeader = document.createElement("h1");
//   titleHeader.setAttribute("id", "movieTitle");
//   titleHeader.innerHTML = title;

//   return titleHeader;
// };

// Create HTML for movie overview
// const createMovieOverview = (overview) => {
//   const overviewParagraph = document.createElement("p");
//   overviewParagraph.setAttribute("id", "movieOverview");
//   overviewParagraph.innerHTML = overview;

//   return overviewParagraph;
// };

// Returns a random movie from the first page of movies
// const getRandomMovie = (movies) => {
//   const randomIndex = Math.floor(Math.random() * movies.length);
//   const randomMovie = movies[randomIndex];
//   return randomMovie;
// };

/* 
// Uses the DOM to create HTML to display the movie
const displayMovie = (movieInfo) => {
  const moviePosterDiv = document.getElementById("moviePoster");
  const movieTextDiv = document.getElementById("movieText");
  const likeBtn = document.getElementById("likeBtn");
  const dislikeBtn = document.getElementById("dislikeBtn");

  // Create HTML content containing movie info
  const moviePoster = createMoviePoster(movieInfo.poster_path);
  const titleHeader = createMovieTitle(movieInfo.title);
  const overviewText = createMovieOverview(movieInfo.overview);

  // Append title, poster, and overview to page
  moviePosterDiv.appendChild(moviePoster);
  movieTextDiv.appendChild(titleHeader);
  movieTextDiv.appendChild(overviewText);

  showBtns();
  likeBtn.onclick = likeMovie;
  dislikeBtn.onclick = dislikeMovie;
};
*/

const displayMovie = (movies) => {
  for (const movie of movies) {
    const movieCard = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const parag = document.createElement("p");
    const movieContainer = document.getElementById("movieInfo");

    div.setAttribute("class", "video-list");
    img.src = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
    title.textContent = movie.title;
    parag.textContent = movie.overview;

    movieCard.appendChild(img);
    movieCard.appendChild(title);
    movieCard.appendChild(parag);

    movieContainer.appendChild(movieCard);
  }
};
