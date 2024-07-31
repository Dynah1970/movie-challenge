# Backlog Opción - Empieza con API y HTTP

El [Product Owner](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s) nos
resenta este _backlog_ que es el resultado de su trabajo con el cliente hasta el
momento.

---

## [Historia de Usuario 1] Lista de Películas

Yo como ususaria, quiero ver un catálogo de películas en una tabla (líneas y
columnas).

### Criterios de aceptación

- [El endpoint `/discover/movie`](https://developer.themoviedb.org/reference/discover-movie)
debe ser utilizado.
- La aplicación debe incluir la paginación para explorar el catálogo por páginas
- Cada película debe mostrar al menos : póster, título original y año de estreno

### Definición de terminado

- Los componentes desarrollados deben tener pruebas unitarias

---

## [Historia de Usuario 2] Detalles de película

Yo, como usuaria, quiere consultar detalles de las películas

### Criterios de aceptación

- El endpoint debe ser utilizado [/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).
- Cada película debe mostrar al menos : póster, título original, año de
lanzamiento, género, votación media, votos totales.
- La interfaz debe permitir volver a la lista de películas manteniendo el filtro
y la orden.

### Definición de terminado

- Los componentes desarrollados deben tener pruebas unitarias

---

## [Historia de Usuario 3 - Hacker Edition] Filtrar y Ordenar

Yo, como usuaria, quiero filtrar y ordenar el catálogo de la película usando los
críterios compatibles con Themovie Database API V3.

### Criterios de aceptación

- Para filtrar, se debe utilizar el endpoint [/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
y uno o más parámetros, como por ejemeplo with_genres.
- Para ordenar, debes utilizar el enpoint [/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
y uno o más parámetros, como por ejemplo sort_by
- La página debe mantener el filtro y el ordenamiento.
- Cada película debe mostrar al menos: póster, título original y año de estreno.

### Definición de terminado

- Los componentes desarrollados deben tener pruebas unitarias
- Un pull request y code review de una compañera o coach
- Pasa [los tests de Lighthouse accessibility](https://web.dev/learn/accessibility/test-automated)
