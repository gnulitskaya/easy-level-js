let numberOfFilms = prompt("Сколько фильмов вы посмотрели?");

function start() {
	let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", '');
	}
}

start();

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Мало мало ТЕБя");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("средний БОЕЦ");
	} else if (personalMovieDB.count >= 30) {
		console.log("киноМАН");
	} else {
		console.log("error");
	}
}

detectPersonalLevel();

function showMyBD(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyBD(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i} `);
	}
}

writeYourGenres();