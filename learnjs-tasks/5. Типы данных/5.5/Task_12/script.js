/* Оставить уникальные элементы массива

Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

Например:

function unique(arr) {
 
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O */

function unique(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.includes(arr[i])) {
            continue;
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings));