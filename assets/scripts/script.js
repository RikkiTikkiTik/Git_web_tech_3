let flag = true;
function change_color() {
let element = document.getElementById("el1");
// if (flag) {
//    element.classList.add("first_class"); //добавляем класс элемента
//   flag = false;
// }
// else {
//    element.classList.remove("first_class"); //удаляем класс элеента
//    flag = true;
// }

element.classList.toggle("first_class"); //добавление класса если его нет или удаление, если он есть
// element.textContent = "Кнопка была нажата" // изменение текста в элементе
if ( element.textContent == "Кнопка была нажата") element.textContent = "Соляночка";
else element.textContent = "Кнопка была нажата" ;
console.log(element) //вывод в консоль
}
let btn = document.getElementById("button");
console.log(btn);
btn.addEventListener("click", change_color)