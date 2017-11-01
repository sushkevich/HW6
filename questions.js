let thisYear = 2017,
    pensionMan = 63,
    pensionWoman = 58,
    variants = [],
    back,
    firstName,
    secondName,
    thirdName,
    birthDay,
    birthMonth,
    birthYear,
    gender,
    country,
    type,
    sity,
    street,
    house,
    quanDays;

do {
    firstName = prompt('Как вас зовут?', 'Иван');
}
while (onlyWord(firstName));

do {
    secondName = prompt('Какая ваша фамилия?', 'Иванов');
}
while (onlyWord(secondName));

do {
    thirdName = prompt('Какое ваше отчество?', 'Иванович');
}
while (onlyWord(thirdName));

calc(thisYear);
let realYear = thisYear - 100;
do {
    birthYear = Number(prompt('В каком году вы родились?', '1990'));
    if (realYear > birthYear) {
        birthYear = '';
    }
}
while (check(birthYear));
variants = [];

calc(12);
do {
    birthMonth = Number(prompt('В каком по счету месяце вы родились?', '5'));
}
while (check(birthMonth));
variants = [];
switch (birthMonth) {
    case 1:
        birthMonth = 'января';
        quanDays = 31;
        break;
    case 2:
        birthMonth = 'февраля';
        quanDays = 28;
        break;
    case 3:
        birthMonth = 'марта';
        quanDays = 31;
        break;
    case 4:
        birthMonth = 'апреля';
        quanDays = 30;
        break;
    case 5:
        birthMonth = 'мая';
        quanDays = 31;
        break;
    case 6:
        birthMonth = 'июня';
        quanDays = 30;
        break;
    case 7:
        birthMonth = 'июля';
        quanDays = 31;
        break;
    case 8:
        birthMonth = 'августа';
        quanDays = 31;
        break;
    case 9:
        birthMonth = 'сентября';
        quanDays = 30;
        break;
    case 10:
        birthMonth = 'октября';
        quanDays = 31;
        break;
    case 11:
        birthMonth = 'ноября';
        quanDays = 30;
        break;
    case 12:
        birthMonth = 'декабря';
        quanDays = 31;
        break;
}

if (quanDays === 28) {
    if (birthYear % 4 === 0) {
        quanDays = 29;
    }
    if ((birthYear % 4 === 0) && (birthYear % 4 === 100) && (birthYear % 4 !== 400)) {
        quanDays = 28;
    }
    if ((birthYear % 4 === 0) && (birthYear % 4 === 100) && (birthYear % 4 === 400)) {
        quanDays = 29;
    }
}

calc(quanDays);
do {
    birthDay = prompt('Какого числа вы родились?', '15');
}
while (check(birthDay));
variants = [];

calc(2);
do {
    gender = Number(prompt(`
Выберите ваш пол:
1 - Мужчина
2 - Женщина`, '1'));
}
while (check(gender));
variants = [];
if (gender === 1) {
    gender = 'Муж';
}
if (gender === 2) {
    gender = 'Жен';
}

do {
    country = prompt('В какой стране вы живете?', 'Беларусь');
}
while (onlyWord(country));

calc(3);
do {
    type = Number(prompt(`
Укажите тип населённого пункта:
1 - Город
2 - Село
3 - Деревня`, '1'));
}
while (check(type));
variants = [];
if (type === 1) {
    type = 'г';
}
if (type === 2) {
    type = 'с';
}
if (type === 3) {
    type = 'дер';
}

do {
    sity = prompt('Название населённого пункта?', 'Минск');
}
while (onlyWord(sity));

do {
    street = prompt('На какой улице вы живете?', 'Ангарская');
}
while (onlyWord(street));

do {
    house = prompt('Какой номер вашего дома?', '18');
}
while (notNumber(house));

let pension = thisYear - birthYear;
if (gender === 'Муж' && pension >= pensionMan) {
    pension = 'Да';
} else if (gender === 'Жен' && pension >= pensionWoman) {
    pension = 'Да';
} else {
    pension = 'Нет';
}

function notNumber(input) {
    input = Number(input);
    if (isNaN(input) || input === 0)
        return true;
}

function onlyWord(input) {
    input = Number(input);
    if (isFinite(input) || input === 0)
        return true;
}

function calc (input) {
    let i;
    input = Number(input);
    for ( i = 1; i <= input; i++)
    {
        variants[i - 1] = i;
    }
    return variants;
}

function check (input) {
    input = Number(input);
    let i = 0,
    s = variants.length - 1;
    do {
        back = variants[i] === input;
        i++;
    } while ((back !== true) && ( i<=s ));

    return back !== true;
}

alert(`
ФИО:   ${secondName} ${firstName} ${thirdName}
Дата рождения:   ${birthDay} ${birthMonth} ${birthYear}
Пол:   ${gender}
Адрес:   ${country}, ${type}. ${sity}, ул. ${street}, д. ${house}
На пенсии:   ${pension}`);




