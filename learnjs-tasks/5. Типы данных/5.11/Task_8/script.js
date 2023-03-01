/* Форматирование относительной даты

Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) ); */

function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let differenceSeconds = (new Date() - date) / 1000;
    let differenceMinutes = differenceSeconds / 60;
    let differenceHours = differenceMinutes / 60;

    if (differenceSeconds < 1) {
        return 'прямо сейчас';
    } else if (differenceMinutes < 1) {
        return `${differenceSeconds} сек. назад`
    } else if (differenceHours < 1) {
        return `${differenceMinutes} мин. назад`
    } else {
        return `${day}.${month}.${year} ${hour}:${minutes}`
    }
}

console.log(
    formatDate(new Date(new Date - 1)),
    formatDate(new Date(new Date - 30 * 1000)),
    formatDate(new Date(new Date - 5 * 60 * 1000)),
    formatDate(new Date(new Date - 86400 * 1000))
);