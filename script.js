'use strict';
const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько Вы его оцените?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько Вы его оцените?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);
