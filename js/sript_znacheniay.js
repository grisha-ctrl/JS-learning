//{} это пустой объект
//[] пустой массив (здесь элементы идут строго по порядку)
//создание переменной (var/const)
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, // пустой объект
    actors: {}, // тоже
    genres: [], // пустой массив
    privet: false // boolean(логическое) значение false
};

alert('Hello'); // просто всплывающее окно с каким-либо оповещением

const result = confirm("Are you here?"); // тоже только с вариантоми ответов true false
console.log(result);

const answer = +prompt('Вам есть 18?', '18'); // вопрос-ответ 
console.log(typeof(answer + 5));

let incr = 10, // можно так писать
    decr = 10; 

    ++incr; // увеличавает на 1 (incr++)
    --decr; // уменьшает на 1 (--decr)

    console.log(incr); // ()
    console.log(decr);

    console.log(5%3); // возвращает остаток от деления двух чисел
    
  // 1 занк = означает присваевание  
// 2 знака = означает сравнение (сравнение только по значению (строки или числа) (действительное булиново значение 8=8)
  // 3 знака = означает сравнение только чисел
    
    console.log(2*4 == 8); //true
    console.log(2*4 == '8'); //true

    console.log(2*4 === 8); // true
    console.log('2*4' === '8'); // false хз можно ли так писать
    console.log(2*4 === '8'); //false

    && // оператор и 2 амперсанта (работает толь тогда когда 2 или больше подопотных являются правдивыми (true true))
    || // оператор или (может работать и с одним правдивым подопотным)

    const isChecked = true,
          isClose = true;
      
    console.log(isChecked && isClose); // можно и больше
    
    const isChecked = true,
    isClose = false;
    
    console.log(isChecked || isClose);

    const isChecked = false, // оператор отрецания ! (было false стало true и наоборот)
    isClose = false;

    console.log(isChecked || !isClose);

    console.log(2 + 2 * 2 != 8); // != (не равен)
    console.log(2 + 2 * 2 != '8')
    console.log(2 + 2 * 2 !== '6'); // не является числом (true)