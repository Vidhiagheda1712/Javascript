
var a =parseInt(prompt("Enter The Value Of A :"));
var b =parseInt(prompt("Enter The Value Of B :"));

var swap = a;
a = b;
b = swap;

document.getElementById(`swap`).innerHTML = `After Swapping : A = ${a}  B= ${b}`;

