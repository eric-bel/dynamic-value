/* При каждом запуске Функции:
1. Функция должна генерировать массив объектов, столько, сколько указано в параметрах. 
2. У каждого объекта значения свойств должны генерироваться в случайном порядке.
Например, если массив персон: разные имена и фамилии, разные возраста и разные должности. 
*/

// Разделение на подзадачи:

// Генерить в массиве столько объектов, сколько указано в параметрах;

function makeArr(numOfObj) {
  let arrOfObj = [];
  for (let i = 0; i < numOfObj; i++) {
    arrOfObj.push({});
  }
  return arrOfObj;
}

makeArr(3);

// Создать переменную, значением которой будет рандомное число.

const randomNum = Math.floor(Math.random() * 15);

// Создать объект, свойство которого будут иметь рандомное число.

let obj = { random: Math.floor(Math.random() * 15) };

// Создать переменную, значением которой будеть являться значение случайного индекса массива.

let arr = ["Alex", "John", "April", "Sarah", "Elton", "Jessica", "Max"];

let randIndex = arr[Math.floor(Math.random() * arr.length)];

// Сделать так, чтобы рандомные числовые значия свойств объектов являлись значением случайных индексов массива.

let arrOfNames0 = ["Alex", "John", "April", "Sarah", "Elton", "Jessica", "Max"];

let objRandom = {
  randomNames1: arrOfNames0[Math.floor(Math.random() * arrOfNames0.length)],
  randomNames2: arrOfNames0[Math.floor(Math.random() * arrOfNames0.length)],
};

//  Итог/Финал: Сгенерировать массив объектов. Свойства объектов должны ииметь рандомные значения.

let arrOfNames = ["Alex", "John", "April", "Sarah", "Elton", "Jessica", "Max"];
let arrOfAges = [23, 54, 12, 32, 45, 65, 32, 21, 34];

function createArrOfObj(numOfObj) {
  let arrOfObj = [];
  for (let i = 0; i < numOfObj; i++) {
    arrOfObj.push({
      name: arrOfNames[Math.floor(Math.random() * arrOfNames.length)],
      age: arrOfAges[Math.floor(Math.random() * arrOfAges.length)],
    });
  }
  return arrOfObj;
}

// console.log(createArrOfObj(5));

// _____________________________________________________________________________________________________________

// ПОСЛЕ РЕВЬЮ | AFTER THE REVIEW

// вынести в одельную функцию генерацию рандомного целого числа в диапазоне от 0 по N

const randInt = (howMany) => Math.floor(Math.random() * howMany);

// создать массив имён

let arrFirstNames = [
  "Alex",
  "John",
  "April",
  "Sarah",
  "Elton",
  "Jessica",
  "Max",
  "Christopher",
  "Ethan",
  "Malcolm",
  "Valentine",
  "Vincent",
  "Kyle",
  "Amanda",
  "Angelina",
  "Clayton",
  "Bridget",
  "Edmund",
  "Vanessa",
  "Franklin",
  "Juliet",
  "Harry",
  "Jessie",
  "Jacob",
  "Isabella",
  "Kevin",
  "Candy",
  "Maximilian",
];

// создать массив фамилий

let arrLastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Jones",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Garcia",
  "Martinez",
  "Robinson",
  "Clark",
  "Rodriguez",
  "Lewis",
  "Lee",
  "Walker",
  "Hall",
  "Allen",
  "Young",
  "Hernandez",
  "King",
  "Wright",
  "Lopez",
  "Hill",
  "Scott",
  "Green",
  "Adams",
  "Baker",
];

// создать массив должностей

const arrOfPositions = [
  "Web designer",
  "Imposer",
  "Programmer",
  "Software tester",
  "System administrator",
  "Neural interface designer",
  "Ios developer",
  "Android developer",
  "Database architect",
  "Database developer",
  "Network administrator",
  "Game developer",
  "Aystem engineer",
  "Front-end developer",
  "Business Analyst",
  "Database Analyst",
  "Data Analyst",
  "Data Administrator",
  "Data Scientist",
  "Project Manager",
  "Team Leader",
  "CTO",
  "CIO",
  "CEO",
  "Сryptographer",
  "Support specialist",
  "IT technician",
  "UX designer",
  "Web administrator",
  "Help desk technician",
  "IT coordinator",
  "Cloud Architect",
  "IT Analyst",
  "IT Support Manager",
  ".NET Developer",
  "Python developer",
  "C++ developer",
  "JS developer",
];

// вынести в отдельную функцию создание обьектов

const createObj = (howMany) => {
  return {
    firstName: arrFirstNames[randInt(arrFirstNames.length)],
    lastName: arrLastNames[randInt(arrLastNames.length)],
    position: arrOfPositions[randInt(arrOfPositions.length)],
    age: randInt(60),
  };
};

// Финал № 2 | The final № 2

const createArrOfObj2 = (howMany) => {
  let arrOfObj = [];
  for (let i = 0; i < howMany; i++) {
    arrOfObj.push(createObj(howMany));
  }
  return arrOfObj;
};

console.log(createArrOfObj2(3));

// Вывести итоговые результаты в таблицу на странице
