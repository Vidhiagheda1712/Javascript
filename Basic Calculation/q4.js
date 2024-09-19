var bs = parseInt(prompt("Enter The Value Of BS :"));
var hra = parseInt(prompt("Enter The Value Of HRA :"));
var da = parseInt(prompt("Enter The Value Of DA :"));
var ta = parseInt(prompt("Enter The Value Of TA :"));


hra = (bs * hra) / 100;
da = (bs * da) / 100;
ta = (bs * ta) / 100;
var ans = bs + hra + ta + da;

document.write(`<h2>Base Salary : ${ans}</h2>`);