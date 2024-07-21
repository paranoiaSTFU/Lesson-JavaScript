// Простые матемтические действия
var num_1 = 10;
var num_2 = 5;

console.log(
                "Значение num_1 равняется: " + num_1 + "\n" +
                "Значение num_2 равняется: " + num_2 + "\n" +
                "Вычитание: " + (num_1 - num_2) + "\n" +
                "Сложение: " + (num_1 + num_2) + "\n" +
                "Умножение: " + (num_1 * num_2) + "\n" +
                "Деление: " + (num_1 / num_2) + "\n" +
                "Остаток от деления: " + (num_1 % num_2) + "\n" 
            );
// Сокращенные записи
var num_3 = 100;
console.log(num_3 += 5);
console.log(num_3 -= 5);
console.log(num_3 *= 5);
console.log(num_3 /= 5);
console.log(num_3 %= 5);
// +1 или -1
var num_4 = 99;
num_4++;
console.log(num_4);
num_4--;
console.log(num_4);
// Попытка преобразовать строку в число
var str_1 = "12";
var str_2 = "5";
console.log("Результат сложения строк 12 и 5 равен:" + (Number(str_1) + Number(str_2)));
// Обьект Math - ну классическая математическая библиотека
console.log("Math: " + Math.min(99, 100, 842, 0));
console.log("Math: " + Math.max(99, 100, 842, 0));
console.log("Math: " + Math.PI);