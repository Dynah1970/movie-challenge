// Función para crear un elemento de película
export function createMovieItem(movie) {
  const listItem = document.createElement('li');
  listItem.classList.add('movie-item');
  listItem.dataset.movieId = movie.id; // Añadir ID de la película para el manejo de eventos

  listItem.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Póster de ${movie.title}">
    <h2>${movie.title}</h2>
    <p>${new Date(movie.release_date).getFullYear()}</p>
  `;



  return listItem;
}

// Función para renderizar la lista de películas
export function renderMovieList(movies, container) {
  container.innerHTML = ''; // Limpia el contenedor antes de renderizar

  movies.forEach(movie => {
    const movieItem = createMovieItem(movie);
    container.appendChild(movieItem);
  });

  // Asegúra que los controles sean visibles
  const controls = document.getElementById("controls");
  if (controls) {
    controls.style.display = 'block';
  }
}

// Función para renderizar el detalle de la película en un modal
export function renderMovieDetail(movie) {
  // Elimina el modal existente si ya hay uno
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <h2>${movie.title}</h2>
      <p>Año: ${new Date(movie.release_date).getFullYear()}</p>
      <p>Género(s): ${movie.genres.map(genre => genre.name).join(', ')}</p>
      <p>Votación Media: ${movie.vote_average}</p>
      <p>Votos Totales: ${movie.vote_count}</p>
    </div>
  `;
  document.body.appendChild(modal);

  // Agregar evento para cerrar el modal al hacer clic en el botón de cierre
  document.querySelector('.close-button').addEventListener('click', () => {
    document.body.removeChild(modal);
    // Restaurar la visibilidad de los controles después de cerrar el modal
    const controls = document.getElementById("controls");
    if (controls) {
      controls.style.display = 'block';
    }
  });

  modal.style.display = 'block';

  // Ocultar los controles cuando se muestra el detalle de la película
  const controls = document.getElementById("controls");
  if (controls) {
    controls.style.display = 'none';
  }
}
