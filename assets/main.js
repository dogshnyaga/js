let price = prompt("сколько стоит:");
let money = prompt("сколько у тебя денег:");

if(price < 0 || money<0){
    console.log("неверный формат")
} else if (price === money) {
    console.log("покупка совершена");
} else if (price > money) {
    let neHvataet = price - money;
    console.log(`для покупки не хватает ${neHvataet} р.`);
} else {
    let sdacha = money - price;
    console.log(`покупка совершена. Сдача ${sdacha} р.`);
}

let number = prompt("введите число:");

if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

let result = (a + b < 4) ? 'Мало' : 'Много';