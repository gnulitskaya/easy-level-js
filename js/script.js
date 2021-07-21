let numberOfFilms = prompt("Сколько фильмов вы посмотрели?");


let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const questionFirst = prompt("Один из последних просмотренных фильмов?"),
		questionSecond = prompt("На сколько оцените его?");

	if (questionFirst != '' && questionSecond != '' && questionFirst != null &&
		questionSecond != null && questionFirst.length < 50) {
		console.log('done');
		personalMovieDB.movies[questionFirst] = questionSecond;
	} else {
		console.log('error');
		i--;
	}

}

if (personalMovieDB.count < 10) {
	console.log("Мало мало ТЕБя");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("средний БОЕЦ");
} else if (personalMovieDB.count >= 30) {
	console.log("киноМАН");
} else {
	console.log("error");
}

console.log(personalMovieDB);