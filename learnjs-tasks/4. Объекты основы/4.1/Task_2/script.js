/* Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false */

function isEmpty(obj) {
    let isKey = true;
    for (let key in obj) {
        if (key !== undefined) isKey = false;
    }
    return isKey;
}

console.log(
    isEmpty({}),
    isEmpty({ name: 'Kolya' })
);