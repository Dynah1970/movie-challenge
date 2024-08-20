import {renderMovieList} from "./view.js"
import movies from "./data/dataset.js"

const movielist = document.getElementById("movie-list")
renderMovieList(movies,movielist)