import { createMovieItem, renderMovieList, renderMovieDetail } from '../src/view';
import '@testing-library/jest-dom'; 
import { fireEvent } from '@testing-library/dom';

// Test para createMovieItem
test('createMovieItem crea un elemento de película correctamente', () => {
  const movie = {
    id: 1,
    title: 'Test Movie',
    release_date: '2024-09-14',
    poster_path: '/path/to/poster.jpg',
    genres: ['Action', 'Adventure'],
    vote_average: 7.5,
    vote_count: 123
  };

  const movieItem = createMovieItem(movie);
  document.body.appendChild(movieItem);

  expect(movieItem).toBeInTheDocument();
  expect(movieItem.querySelector('img')).toHaveAttribute('src', 'https://image.tmdb.org/t/p/w500/path/to/poster.jpg');
  expect(movieItem.querySelector('h2').textContent).toBe('Test Movie');
  expect(movieItem.querySelector('p').textContent).toBe('2024');
  
  document.body.removeChild(movieItem); // Limpiar el DOM
});

// Test para renderMovieList
test('renderMovieList renderiza una lista de películas en el contenedor', () => {
  const movies = [
    {
      id: 1,
      title: 'Movie One',
      release_date: '2024-01-01',
      poster_path: '/path/to/one.jpg',
      genres: ['Drama'],
      vote_average: 8.0,
      vote_count: 100
    },
    {
      id: 2,
      title: 'Movie Two',
      release_date: '2024-02-01',
      poster_path: '/path/to/two.jpg',
      genres: ['Comedy'],
      vote_average: 6.0,
      vote_count: 50
    }
  ];

  const container = document.createElement('ul');
  renderMovieList(movies, container);
  document.body.appendChild(container);

  expect(container.querySelectorAll('.movie-item').length).toBe(2);
  expect(container.querySelectorAll('.movie-item')[0].querySelector('h2').textContent).toBe('Movie One');
  expect(container.querySelectorAll('.movie-item')[1].querySelector('h2').textContent).toBe('Movie Two');
  
  document.body.removeChild(container); // Limpiar el DOM
});

// Test para renderMovieDetail
test('renderMovieDetail muestra el detalle de la película en un modal', () => {
  const movie = {
    id: 1,
    title: 'Detailed Movie',
    release_date: '2024-03-01',
    poster_path: '/path/to/detail.jpg',
    genres: ['Sci-Fi', 'Thriller'],
    vote_average: 9.0,
    vote_count: 200
  };

  renderMovieDetail(movie);

  const modal = document.querySelector('.modal');
  expect(modal).toBeInTheDocument();
  expect(modal.querySelector('img')).toHaveAttribute('src', 'https://image.tmdb.org/t/p/w500/path/to/detail.jpg');
  expect(modal.querySelector('h2').textContent).toBe('Detailed Movie');
  expect(modal.querySelector('p').textContent).toContain('Género(s): Sci-Fi, Thriller');

  fireEvent.click(modal.querySelector('.close-button'));
  expect(modal).not.toBeInTheDocument(); // Modal debe desaparecer tras cerrar
});
