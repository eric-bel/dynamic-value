
/* При каждом запуске Функции:
1. Функция должна генерировать массив объектов, столько, сколько указано в параметрах. 
2. У каждого объекта значения свойств должны генерироваться в случайном порядке.
Например, если массив персон: разные имена, разные возраста,  разные должности. 
___________________________________________________

Разделение на подзадачи:
+ Генерить в массиве столько объектов, сколько указано в параметрах;
+ Создать переменную, значением которой будет рандомное число.
+ Создать объект, свойство которого будут иметь рандомное число.
+ Создать переменную, значением которой будеть являться значение случайного индекса массива.
+ Сделать так, чтобы рандомное числовое значие свойства объекта являлось значением случайного индекса массива. 
*/

// Подзадачи

// Генерить в массиве столько объектов, сколько указано в параметрах;

function makeArr(numOfObj) {
    let arrOfObj = [];
    for (let i = 0; i < numOfObj; i++) {
      arrOfObj.push({});
    }
    return arrOfObj;
  }
  
  makeArr(3)
  
  // Создать переменную, значением которой будет рандомное число.
  
  const randomNum = Math.floor(Math.random() * 15);
  
  // Создать объект, свойство которого будут иметь рандомное число.
  
  let obj = { random: Math.floor(Math.random() * 15) };
  
  // Создать переменную, значением которой будеть являться значение случайного индекса массива.
  
  let arr = ['Alex', 'John', 'April', 'Sarah', 'Elton', 'Jessica', 'Max']
  
  let randIndex = arr[Math.floor(Math.random() * arr.length)]
  
  // Сделать так, чтобы рандомные числовые значия свойств объектов являлись значением случайных индексов массива. 
  
  let arr = ['Alex', 'John', 'April', 'Sarah', 'Elton', 'Jessica', 'Max'];
  
  let obj = {
      randomNames1: Math.floor(Math.random() * arr.length),
      randomNames2: Math.floor(Math.random() * arr.length)
  }
  
  //  Итог/Финал: сгенерировать массив объектов. Объекты должны ииметь рандомные значения.
  
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
  
  createArrOfObj(6);
  