let yourName = prompt("Adınızı Giriniz.");
let birthYear = prompt("Doğum Yılınız.");
let dt = new Date();
let year = dt.getFullYear();

let myName = document.getElementById("myName");
let age = document.getElementById("age");

myName.innerHTML = yourName;
age.innerHTML = 
`
Adınız : ${yourName} <br>
Yaşınız : ${year-birthYear}
`




