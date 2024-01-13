"use strict"

// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// }

// let q1 = prompt("Один из последних просмотренных фильмов?", "11:14");
// let q2 = prompt("На сколько оцените его?");

// personalMovieDB.movies[q1] = q2;
 
// console.log(personalMovieDB3)

// first: for (let i = 0; i < 3; i++) {
//     console.log(`F${i}`)
//     for (let j = 0; j < 3; j++) {
//         console.log(`S${j}`)
//         for (let k = 0; k < 3;) {
//             console.log(`T${k}`)
//             if (k === 2) {continue first;}
//             k++;
//         }
//     }
//     console.log(`${str}\n`)
// }

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
let stars = 1;
let spaces = 5;
while (spaces > -1) {
    for (let i = 0; i < spaces; i++) {
        result += ' ';
    }
    for (let i = 0; i < stars; i++) {
        result += '*'
    }
    result += '\n'
    stars += 2
    spaces-- 
}

console.log(result)