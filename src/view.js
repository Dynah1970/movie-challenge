
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

    // Agregar evento de click para navegar a los detalles de la película
    listItem.addEventListener('click', () => navigateToMovieDetail(movie.id));

    return listItem;
}

// Función para renderizar la lista de películas
export function renderMovieList(movies, container) {
    container.innerHTML = ''; // Limpia el contenedor antes de renderizar

    movies.forEach(movie => {
        const movieItem = createMovieItem(movie);
        container.appendChild(movieItem);
    });
}

// Función para renderizar el detalle de la película en un modal
export function renderMovieDetail(movie) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>Año: ${new Date(movie.release_date).getFullYear()}</p>
            <p>Género(s): ${movie.genres.join(', ')}</p> <!-- Ajuste aquí -->
            <p>Votación Media: ${movie.vote_average}</p>
            <p>Votos Totales: ${movie.vote_count}</p>
        </div>
    `;
    document.body.appendChild(modal);

    // Cerrar el modal
    document.querySelector('.close-button').addEventListener('click', () => {
        document.body.removeChild(modal);
        window.history.back();  // Regresar a la lista de películas
    });

    modal.style.display = 'block';
}

// Función para manejar la navegación a los detalles de la película
export function navigateToMovieDetail(movieId) {
    window.history.pushState({}, '', `/movie/${movieId}`);
    // Aquí llamamos al router para mostrar el detalle de la película
    router();
}
