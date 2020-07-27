alert('Hello'); // просто всплывающее окно с каким-либо оповещением

const result = confirm("Are you here?"); // тоже только с вариантоми ответов true false
console.log(result);

const answer = +prompt('Вам есть 18?', '18'); // вопрос-ответ 
console.log(typeof(answer + 5));

// вся информация которая приходит от пользователя будет в виде строк в не зависимости от того как сы её получили

const answers = []; // для того чтобы достучатся до определённого элемента моссива нам необходимо поставить квадратные 
// скобки так можно получить не только элемент который находится в нутри, но и записать его
answers [0] = prompt('как ваше имя?', '');
answers [1] = prompt('как ваша фамилия?', '');
answers [2] = prompt('сколько вам лет?', '');

//document.write(answers);

console.log(typeof(answers));
console.log(typeof(null));