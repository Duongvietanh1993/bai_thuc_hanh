//DOM - document Object Model

/*// truy cập qua id
let table = document.getElementById("table");
console.log(table)

// truy cập thông qua class
let tds = document.getElementsByClassName("td")
console.log(tds)

// truy cập thông qua tên thẻ

let trs = document.getElementsByTagName("tr")
console.log(trs)

//dùng bộ chọn css
let tdd= document.querySelector("td.td");
console.log(tdd);
let tddd= document.querySelectorAll("td.td");
console.log(tddd);

console.log("======================================");
let phoneNumber =document.querySelectorAll("td a")
console.log(phoneNumber)

let nameList =  document.querySelector("td span");
console.log(nameList)

console.log("======================================");

//di chuyển vị trí
let box = document.querySelector(".box p")
console.log(box)
//gọi đến thẻ chứa
let box1= document.querySelector(".box h2").parentNode;
console.log(box1)
//gọi thẻ đứng trước nó
let p = document.querySelector(".box p")
console.log(p.nextElementSibling)//đứng sau
console.log(p.previousElementSibling)//đứng trước

//lấy phần tử đầu
console.log(document.querySelector("tr").firstElementChild);
console.log(document.querySelector("tr").lastElementChild);*/

let box = document.querySelector(".btn");
/*box.addEventListener("mousedown",function () {
    alert("Ấn xuống")
})
box.addEventListener("mouseup",function () {
    alert("Thả ra")
})
box.addEventListener("mouseout",function () {
    alert("đưa chuột qua")
})
box.addEventListener("mouseover",function () {
    alert("đưa chuột vào")
})
box.addEventListener("click",function () {
    alert("ấn vào")
})
box.addEventListener("bdlclick",function () {
    alert("ấn 2 lần")
})*/

//sự kiện phím
/*window.addEventListener("keyup", function (e) {
    console.log("Bạn vừa ấn phím " + e.key) // keycode
})
window.addEventListener("keypress", function (e) {
    console.log("Bạn vừa ấn phím " + e.key) // keycode
})*/

//sự kiện thanh quận
window.addEventListener("scroll", function (e) {
    console.log("Bạn vừa ấn phím " + e.key) // keycode
})




