var arr = [];
var n = 5;

for (var i = 1; i <= n; i++){
  var name = prompt('Введите имя ' + i);
  arr.push (name);
}

var yourName = prompt('Введите свое имя')
console.log('Ваше имя =', yourName);

var nameTrue = 0;

for (var j = 0; j < arr.length; j++){
  if (arr[j] == yourName){
  	nameTrue++;
  }
 }

if (nameTrue == 1){
    alert (yourName + ', вы успешно вошли')
  } else {
    alert ('Ошибка');
 }