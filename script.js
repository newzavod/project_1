'use strict';

const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMoviesDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');

        while (personalMoviesDB == '' || personalMoviesDB == null || isNaN(personalMoviesDB)) {
            personalMoviesDB = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMoviesDB.count < 10) {
            console.log('просмотрено мало фильмов');
        } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
            console.log('Вы классный зритель');
        } else if (personalMoviesDB.count >= 30) {
            console.log('вы киноман');
        } else {
            console.log('произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMoviesDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMoviesDB.privat) {
            personalMoviesDB.privat = false;
        } else {
            personalMoviesDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректрые данные или не ввели их вообще');
                i--;
            } else {
                personalMoviesDB.genres[i - 1] = genre;
            }
        }

        personalMoviesDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

