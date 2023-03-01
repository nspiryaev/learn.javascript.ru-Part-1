/* Сколько секунд осталось до завтра?

Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. */

function getSecondsToTomorrow() {
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currenSecond = currentDate.getSeconds();
    let totalCurrentSeconds = currentHour * 3600 + currentMinute * 60 + currenSecond;
    let totalSecondsInDay = 86400;

    return totalSecondsInDay - totalCurrentSeconds;
}


console.log(getSecondsToTomorrow());