/* Преобразуйте объект в JSON, а затем обратно в обычный объект

Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
}; */

let user = {
    name: "Василий Иванович",
    age: 35
};

user = JSON.stringify(user);
console.log(user);

user = JSON.parse(user);
console.log(user);