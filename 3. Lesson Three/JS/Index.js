// Условные операторы
var number = 5;
var isHasHouse = true;

if(number == 15 && isHasHouse == true){
    console.log("Условие верно, переменная равна числу 15 и isHasHouse равна true");
} else if(number == 177 || isHasHouse){
    console.log("Условие верно, переменная равна числу 177 или isHasHouse равна true");
} else {
    console.log("Условие не верно");
}


var str_1 = "word";

switch(str_1){
    case "4":
        console.log("Переменная со значением 5");
        break;
    case "77":
        console.log("Переменная со значением 77");
        break;
    case "word":
        console.log("Переменная со значением 'word'");
        break;
    default:
        console.log("Default.");
}