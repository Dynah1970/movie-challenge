import { renderMovieList, renderMovieDetail } from "./view.js";
import movies from "./data/dataset.js";
import { sortMovies, filterMoviesByYear } from "./functions.js";

// Selección de elementos
const movieList = document.getElementById("movie-list");
const filterYearSelect = document.getElementById("filter-year");
const sortOrderSelect = document.getElementById("sort-order");
const clearFiltersButton = document.getElementById("clear-filters");

// Función para aplicar filtros y orden en la lista de películas
function applyFilters() {
  let filteredMovies = filterMoviesByYear(movies, filterYearSelect.value);
  filteredMovies = sortMovies(filteredMovies, sortOrderSelect.value);
  renderMovieList(filteredMovies, movieList);
}

// Evento para aplicar filtros cuando se cambia alguna opción
filterYearSelect.addEventListener("change", applyFilters);
sortOrderSelect.addEventListener("change", applyFilters);

// Evento para limpiar filtros
clearFiltersButton.addEventListener("click", () => {
  filterYearSelect.value = "all";
  sortOrderSelect.value = "asc";
  applyFilters();
});

// Función para manejar el enrutamiento y mostrar detalles
export function router() {
  const path = window.location.pathname;
  const movieIdMatch = path.match(/^\/movie\/(\d+)$/);

  if (path === "/") {
    // Mostrar la lista de películas
    applyFilters();
    document.getElementById("controls").style.display = "block";
  } else if (movieIdMatch) {
    const movieId = parseInt(movieIdMatch[1], 10);
    const movie = movies.find((m) => m.id === movieId);
    if (movie) {
      renderMovieDetail(movie);
      document.getElementById("controls").style.display = "none";
    }
  }
}

// Navegar a la página de detalles
function navigateToMovieDetail(movieId) {
  window.history.pushState({}, "", `/movie/${movieId}`);
  router();
}

// Evento para manejar navegación cuando se usa el botón de retroceso o avance del navegador
window.addEventListener("popstate", router);

// Llama al enrutador inicialmente
router();

// Renderiza la lista de películas inicialmente
applyFilters();

// Manejo del clic en cada película para navegación
movieList.addEventListener("click", (event) => {
  const movieItem = event.target.closest(".movie-item");
  if (movieItem) {
    const movieId = movieItem.dataset.movieId;
    navigateToMovieDetail(movieId);
    fetchMovieDetails(movieId); // Verifica si la función fetchMovieDetails está bien implementada
  }
});

// Función para obtener los detalles de la película desde la API
function fetchMovieDetails(movieId) {
  const apiKey = "ac50c776c864e174cd255694891496d8"; // Tu API Key de The Movie DB
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al obtener los detalles de la película');
      }
      return response.json();  // Convertir la respuesta a JSON
    })
    .then(movieData => {
      renderMovieDetail(movieData);  // Llama a renderMovieDetail con los datos obtenidos
    })
    .catch(error => {
      console.error("Error al obtener los detalles de la película:", error);
    });
}

