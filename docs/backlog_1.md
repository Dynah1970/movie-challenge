
# Backlog Opción - Refuerza arrays, objetos y sus métodos

El [Product Owner](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s) nos
resenta este _backlog_ que es el resultado de su trabajo con el cliente hasta el
momento.

---

## [Historia de Usuario 1] Lista de Películas

Yo como usuaria, quiero ver un catálogo de películas en una tabla (líneas y
columnas).

### Criterios de aceptación

- Usa el arreglo de peliculas en `data/dataset.js` para crear una pagina de peliculas
- La aplicación debe incluir todos los peliculas en la data
- Cada película debe mostrar al menos: póster, título original y año de estreno
- La página debe ser responsive

### Definición de terminado

- Un pull request y code review de una compañera o coach
- Pasa [los tests de Lighthouse accessibility](https://web.dev/learn/accessibility/test-automated)

---

## [Historia de Usuario 2] Filtrar y ordenar la data

Yo, como usuaria, quiere filtrar y ordenar las películas.

### Criterios de aceptación

- El interfaz debe tener una manera filtrar, ordenar y limpiar (controls de `select`)
- La página debe ser responsive

### Definición de terminado

- Las funcionalidades de filter y sort deben tener pruebas unitarias
- Un pull request y code review de una compañera o coach
- Pasa [los tests de Lighthouse accessibility](https://web.dev/learn/accessibility/test-automated)

---

## [Historia de Usuario 3] Detalles de película

Yo, como usuaria, quiere consultar detalles de las películas

### Criterios de aceptación

- El endpoint debe ser utilizado [/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).
- Cada película debe mostrar al menos : póster, título original, año de
lanzamiento, género, votación media, votos totales.
- Las detalles debe ser en una pagina nueva utilizando un router, o en un modal.
- La interfaz debe permitir volver a la lista de películas manteniendo el filtro
y la orden.

### Definición de terminado

- Si usas un router:
  - la pagina principal debe ser renderizado 100% dinamicamente
  - las funcionalidades de router debe tener pruebas unitarias
- Los componentes desarrollados deben tener pruebas unitarias

---

## [Historia de Usuario 4 - Hacker Edition] Usa completa de API

Yo, como usuaria, quiero filtrar y ordenar el catálogo de la películas usando los
críterios compatibles con Themovie Database API V3.

### Criterios de aceptación

- [El endpoint `/discover/movie`](https://developer.themoviedb.org/reference/discover-movie)
debe ser utilizado para la lista de peliculas (reemplaza el dataset estatica)
- Para filtrar, se debe utilizar el endpoint [/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
y uno o más parámetros, como por ejemeplo with_genres.
- Para ordenar, debes utilizar el enpoint [/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
y uno o más parámetros, como por ejemplo sort_by
- La aplicación debe incluir la paginación para explorar el catálogo por páginas
- La página debe mantener el filtro y el ordenamiento.
- Cada película debe mostrar al menos: póster, título original y año de estreno.

### Definición de terminado

- Los componentes desarrollados deben tener pruebas unitarias
