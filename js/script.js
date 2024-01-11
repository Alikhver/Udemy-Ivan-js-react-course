"use strict"

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

let q1 = prompt("Один из последних просмотренных фильмов?", "11:14");
let q2 = prompt("На сколько оцените его?");

personalMovieDB.movies[q1] = q2;
 
console.log(personalMovieDB)