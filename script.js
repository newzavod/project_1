'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько Вы его оцените?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMoviesDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMoviesDB.count < 10) {
        console.log('просмотрено мало фильмов');
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
        console.log('Вы классный зритель');
    } else if (personalMoviesDB.count >= 30) {
        console.log('вы киноман');
    } else {
        console.log('произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoviesDB);
    }
}
showMyDB(personalMoviesDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

console.log(personalMoviesDB);
