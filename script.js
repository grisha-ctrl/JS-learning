const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");
    // не нажал отмену, не оставил пустую строку, строка мнньше 50 эллемментов
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
     
        personalMovieDB.movies[a] = b;
        console.log('ok');
    } else {
        console.log('nope');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
   alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}
console.log(personalMovieDB);






