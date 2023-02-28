/* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно. */

// Моё решение

function camelize(str) {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '-') {
            arr.splice(i, 1);
            arr[i] = arr[i].toUpperCase();
        }
    }
    return arr.join('');
}

console.log(
    camelize("-webkit-transition"),
    camelize("background-color")
);

// Решение в учебнке

/* function camelize(str) {
    str = str.split('-');
    let arr = str.map(function (word, index) {
        if (index === 0) {
            return word;
        } else {
            return word = word[0].toUpperCase() + word.slice(1);
        }
    });
    return arr.join('');
}

console.log(
    camelize("-webkit-transition"),
    camelize("background-color")
); */