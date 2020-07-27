"use strict";
// конкатенация (2 след строки) Конкатена́ция (лат.«присоединение цепями; сцепле́ние») — операция склеивания объектов
// линейной структуры, обычно строк. Например, конкатенация слов «микро» и «мир» даст слово «микромир».

console.log('arr' + " - object"); // arr - object (строка)
console.log('4' + " - object"); // 4 - object (строка)

console.log(4 + + " - object"); // NaN
console.log(4 + +"5"); // 9 ( унарный плюс(2) плюс который ставится перед определённым аргументом (использует
// только 1 аргумент для совей работы))


//инкремент и дикремент сущёствуют для укарачения кода и соответственно уменьшают и увеличивают значение

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