
export function sortMovies(movies, order) {
  return movies.slice().sort((a, b) => {
    if (order === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
}


// Función para filtrar películas por año
export function filterMoviesByYear(movies, year) {
  if (year === "all") {
    return movies;
  }
  return movies.filter(
    (movie) => new Date(movie.release_date).getFullYear() === parseInt(year)
  );
}