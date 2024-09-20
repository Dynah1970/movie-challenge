import { sortMovies, filterMoviesByYear } from '../src/functions';

// Datos de prueba
const mockMovies = [
  { title: 'Inception', release_date: '2010-07-16' },
  { title: 'The Matrix', release_date: '1999-03-31' },
  { title: 'Interstellar', release_date: '2014-11-07' },
  { title: 'Parasite', release_date: '2019-05-30' }
];

describe('sortMovies', () => {
  test('sorts movies in ascending order by title', () => {
    const sortedMoviesAsc = sortMovies(mockMovies, 'asc');
    const expectedAsc = ['Inception', 'Interstellar', 'Parasite', 'The Matrix'];

    const resultTitles = sortedMoviesAsc.map(movie => movie.title);
    expect(resultTitles).toEqual(expectedAsc);
  });

  test('sorts movies in descending order by title', () => {
    const sortedMoviesDesc = sortMovies(mockMovies, 'desc');
    const expectedDesc = ['The Matrix', 'Parasite', 'Interstellar', 'Inception'];

    const resultTitles = sortedMoviesDesc.map(movie => movie.title);
    expect(resultTitles).toEqual(expectedDesc);
  });
});

describe('filterMoviesByYear', () => {
  test('filters movies by the year 2010', () => {
    const filteredMovies = filterMoviesByYear(mockMovies, '2010');
    const expectedTitles = ['Inception'];

    const resultTitles = filteredMovies.map(movie => movie.title);
    expect(resultTitles).toEqual(expectedTitles);
  });

  test('returns all movies if year is "all"', () => {
    const allMovies = filterMoviesByYear(mockMovies, 'all');
    const expectedTitles = ['Inception', 'The Matrix', 'Interstellar', 'Parasite'];

    const resultTitles = allMovies.map(movie => movie.title);
    expect(resultTitles).toEqual(expectedTitles);
  });

  test('returns an empty array if no movies match the year', () => {
    const filteredMovies = filterMoviesByYear(mockMovies, '2000');
    expect(filteredMovies).toEqual([]);
  });
});
