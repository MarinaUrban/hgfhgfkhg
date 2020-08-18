/*first practica*/

'use strict';
let numberOfFilms; /*Переменная обьявлена глобально*/

function start() {
	numberOfFilms = +prompt("Сколько фильмов  вы уже посмотрели?", " "); /*Здесь уже локальная переменная*/
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms /*Проверяет, что введенот число, а не строка*/ )) {
		/*Повторяем вопрос снова*/
		numberOfFilms = +prompt("Сколько фильмов  вы уже посмотрели?", " ");
	}
}
/*Вызываем функцию, чтобы она отобразилась*/
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
/*const a = prompt("Один из последних просмотренных фильмов?", ""),
	b = prompt("На сколько оцените его?", ""),
	c = prompt("Один из последних просмотренных фильмов?", ""),
	d = prompt("На сколько оцените его?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);*/

/*Вторая практика*/
/*for (let i = 0; i < 2; i++) {
	const a = prompt("Один из последних просмотренных фильмов?", ""),
		b = prompt("На сколько оцените его?", "");

	/*Условия для второй задачи*/
/*	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		/*пользователь ввел все верно*/
/*тогда выполняется это условие*/
/*		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--; /*Возвращает цикл на 1 повторение назад*/
/*	}
}*/

/*Создаем функцию, которая обернет весь предыдущий цикл*/
function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Один из последних просмотренных фильмов?", ""),
			b = prompt("На сколько оцените его?", "");

		/*Условия для второй задачи*/
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			/*пользователь ввел все верно*/
			/*тогда выполняется это условие*/
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--; /*Возвращает цикл на 1 повторение назад*/
		}
	}
}
rememberMyFilms();




/*if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла ошибка");
}*/
console.log(personalMovieDB);


/*Также оборачиваем в функцию предыдущие условия*/

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count >= 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}

detectPersonalLevel();


function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] = genre;
		/*i-1: Так как для пользователя отсчет начинается с 1, но в массиве должно все считаться с 0*/
	}
}
writeYourGenres();