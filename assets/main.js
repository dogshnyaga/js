// let price = prompt("сколько стоит:");
// let money = prompt("сколько у тебя денег:");

// if(price < 0 || money<0){
//     console.log("неверный формат")
// } else if (price === money) {
//     console.log("покупка совершена");
// } else if (price > money) {
//     let neHvataet = price - money;
//     console.log(`для покупки не хватает ${neHvataet} р.`);
// } else {
//     let sdacha = money - price;
//     console.log(`покупка совершена. Сдача ${sdacha} р.`);
// }

// let number = prompt("введите число:");

// if (number > 0) {
//     alert(1);
// } else if (number < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }

// let result = (a + b < 4) ? 'Мало' : 'Много';

// 1
let a = Number(prompt("введите число a"));
let b = Number(prompt("введите число б"));

for (let i = a; i < b + 1 ; i++){
   if (i % 2 == 0){
    console.log(i)  
   }
}


// 2
function min(a,b){  
    if (a > b){
        return b;
    } else {
        return a;  
    } 
}
let num = min(a,b);
console.log("минимальное число - " , num)

// 3
let styles = ["Джаз", "Блюз"];
console.log(styles); 

styles.push("Рок-н-ролл");
console.log("добавлен рокнролл)")
console.log(styles); 

let seredina = Math.floor(styles.length / 2); 
styles[seredina] = "Классика";
console.log("значение всередине заменено на классика)")
console.log(styles); 

let firstElement = styles.shift();
console.log("был удален", firstElement);
console.log(styles); 

styles.unshift("Рэп", "Регги");
console.log("вставлен рэп и регги в начало")
console.log(styles); 