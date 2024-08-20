// Función para crear un elemento de película
export function createMovieItem(movie) {
    const listItem = document.createElement('li');
    listItem.classList.add('movie-item');

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
}
