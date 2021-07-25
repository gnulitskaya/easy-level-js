

let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	toggleVisibleMyBD: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	start: function () {
		personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", '');
		}
	},
	rememberMyFilms: function () {
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
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("Мало мало ТЕБя");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("средний БОЕЦ");
		} else if (personalMovieDB.count >= 30) {
			console.log("киноМАН");
		} else {
			console.log("error");
		}
	},
	showMyBD: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i < 2; i++) {
			let nameOfGenres = prompt(`Введите любимые жанры через запятую`).toLowerCase();
			if (nameOfGenres == '' || nameOfGenres == null) {
				i--;
			} else {
				personalMovieDB.genres = nameOfGenres.split(',');
				personalMovieDB.genres.sort();
			}

		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	}
};

// personalMovieDB.start();
// personalMovieDB.toggleVisibleMyBD();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyBD(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();


// const options = {
// 	name: 'lera',
// 	width: 1024,
// 	colors: {
// 		border: 'red',
// 		background: 'yellow'
// 	}
// };

// for (let key in options) {
// 	if (typeof (options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 	}
// }