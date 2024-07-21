// Функции - это блоки кода, которые могут быть вызваны для выполнения определённых задач.
// Аргумент - объект который принимает в себя функция и как то его обрабатывает.
function Hello(name){
    alert("Привет, " + name + ". Приятно познакомиться)");
}
// Функции можно вызывать внутри других функций.
// Используя 'return' можно вернуть из функции значение.
// Рекурсия – вызов функции (процедуры) из неё же самой, непосредственно (простая рекурсия) или через другие функции (сложная рекурсия).
function RememberName(bool){
    while(bool){
        var name = prompt("Как вас зовут?");
        if(name != null && name != ""){
            bool = false;
            return name;
        }else{
            alert("Я не расслышал, повтори ещё раз.");
            RememberName();
        }
    }
}
function Finding_a_friend(){
    alert("Привет.");
    var bool = true;
    if(confirm("Давай познакомимся?")){
        var HisName = RememberName(bool);
        Hello(HisName);
        return HisName;
    }
    else{
        alert("Ну ладно.");
    }
}
var NameUser = Finding_a_friend();
console.log("Имя пользователя: " + NameUser);