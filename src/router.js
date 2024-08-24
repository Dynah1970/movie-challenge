import movies from './data/dataset.js';
import { renderMovieDetail } from './view.js';

// Función para manejar el enrutamiento
export function router() {
    const path = window.location.pathname;
    const movieIdMatch = path.match(/^\/movie\/(\d+)$/);

    if (path === '/') {
        // Mostrar la lista de películas
        document.getElementById('controls').style.display = 'block';
        document.getElementById('movie-list').style.display = 'block';
    } else if (movieIdMatch) {
        const movieId = parseInt(movieIdMatch[1], 10);
        const movie = movies.find(m => m.id === movieId);
        if (movie) {
            renderMovieDetail(movie);
            document.getElementById('controls').style.display = 'none';
            document.getElementById('movie-list').style.display = 'none';
        }
    }
}

// Llama al enrutador inicialmente
window.addEventListener('popstate', router);
