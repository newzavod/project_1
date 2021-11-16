'use strict';
const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько Вы его оцените?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько Вы его оцените?', '');

// personalMoviesDB.movies[a] = b;
// personalMoviesDB.movies[c] = d;

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

if (personalMoviesDB.count < 10) {
    console.log('просмотрено мало фильмов');
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log('Вы классный зритель');
} else if (personalMoviesDB.count >= 30) {
    console.log('вы киноман');
} else {
    console.log('произошла ошибка');
}

console.log(personalMoviesDB);
