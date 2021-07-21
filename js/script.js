let numberOfFilms = prompt("Сколько фильмов вы посмотрели?");
let questionFirst = prompt("Один из последних просмотренных фильмов?");
let questionSecond = prompt("На сколько оцените его?");

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

personalMovieDB.movies[questionFirst] = questionSecond;

console.log(personalMovieDB);