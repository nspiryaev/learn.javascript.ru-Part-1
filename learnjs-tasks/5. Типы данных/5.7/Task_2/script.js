/* Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое. */

function aclean(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].toLowerCase().split("").sort().join("");
        console.log(word);
        map.set(word, arr[i]);
    }

    return [...map.values()];
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));
