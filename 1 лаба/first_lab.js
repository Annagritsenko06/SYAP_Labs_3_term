//1 задание
let a = 5;
let name = "Name";
let i = 0;
let double = 0.23;
let result = 1/0;
let answer = true;
let no = null;
// 2 задание
const widthA = 45; 
const heightA = 21; 
const sideB = 5; 
// Количество квадратов по ширине и высоте
const squaresInWidth = Math.floor(widthA / sideB);
const squaresInHeight = Math.floor(heightA / sideB);
// Общее количество квадратов
const totalSquares = squaresInWidth * squaresInHeight;
console.log("Количество квадратов B, которые поместятся в четырехугольник A: " + totalSquares);
//3 задание
let i_2 = 2;
let a_2 = ++i_2;
let b = i_2++;
alert(a_2 > b);
//4 задание

let result1 = "Котик" === "котик" ? "Равны" : "Не равны";
console.log(`"Котик" и "котик": ${result1}`);  // Ожидаемый вывод: Не равны

let result2 = "Котик" === "китик" ? "Равны" : "Не равны";
console.log(`"Котик" и "китик": ${result2}`);  // Ожидаемый вывод: Не равны

let result3 = "Кот" === "Котик" ? "Равны" : "Не равны";
console.log(`"Кот" и "Котик": ${result3}`);  // Ожидаемый вывод: Не равны

let result4 = "Привет" === "Пока" ? "Равны" : "Не равны";
console.log(`"Привет" и "Пока": ${result4}`);  // Ожидаемый вывод: Не равны

let result5 = 73 == "53" ? "Равны" : "Не равны";
console.log(`73 и "53": ${result5}`);  // Ожидаемый вывод: Не равны

let result6 = false == 0 ? "Равны" : "Не равны";
console.log(`false и 0: ${result6}`);  // Ожидаемый вывод: Равны

let result7 = 54 == true ? "Равны" : "Не равны";
console.log(`54 и true: ${result7}`);  // Ожидаемый вывод: Не равны

let result8 = 123 == false ? "Равны" : "Не равны";
console.log(`123 и false: ${result8}`);  // Ожидаемый вывод: Не равны

let result9 = true == "3" ? "Равны" : "Не равны";
console.log(`true и "3": ${result9}`);  // Ожидаемый вывод: Не равны

let result10 = 3 == "5мм" ? "Равны" : "Не равны";
console.log(`3 и "5мм": ${result10}`);  // Ожидаемый вывод: Не равны

let result11 = 8 == "-2" ? "Равны" : "Не равны";
console.log(`8 и "-2": ${result11}`);  // Ожидаемый вывод: Не равны

let result12 = 34 == "34" ? "Равны" : "Не равны";
console.log(`34 и "34": ${result12}`);  // Ожидаемый вывод: Равны

let result13 = null == undefined ? "Равны" : "Не равны";
console.log(`null и undefined: ${result13}`);  // Ожидаемый вывод: Равны
