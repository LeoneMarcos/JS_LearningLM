/*
//string
var text = 'Hello';
const text1 = ' World';
let text2 = ' !';
//number
var number = -7;
const number1 = 6;
let number2 = 10.10;
//boolean
var test = true;
const test1 = true;
let test2 = false;
//Write using alert
alert (text + text1 + text2);
//Writing directly in HTML
document.write(text + text1 + text2);
//Writing in terminal
console.log(text + text1 +text2);
*/
/*
//Creation of dynamic variables that adapt to what the user writes.;
const name = prompt('what is your name?');
const age = prompt ('What is your age?');
document.write('<h1>Hello ' + name + ', you are ' + age + ' Years Old right?');
*/
/*
//null
let test = null;
console.log(test);
//modifying variable
test = 'Hello World';
console.log(test);
*/
/*
let a = 10;
let b = 20;
let c = null;

document.write('a = ' + a);
document.write('b = ' + b);
document.write('c = ' + c);
//Inverting values of variables
c=a;
a=b;
b=c;
//Result of inversion of values
document.write('a = ' + a);
document.write('b = ' + b);
document.write('c = ' + c);
*/
//it works
/*
if(true){
    document.write('entered inside the if (true) block')
}
*/
//does not work
/*
if(false){
    document.write('entered inside the if (true) block')
}
*/
/*
if (false){
    document.write('entered inside the if (true) block')
}else{
    document.write('entered inside the if (false) block')
}
*/
/*
var a = window.prompt('How old are you?');
let b = parseInt(a)
if (b >= 0 && b<15 ){
    document.write('Child')
}else if (b>=15 && b<30 ){
    document.write('young')
}else if (b>=30 && b<60 ){
    document.write('Adult')
}else if(b>=60){
    document.write('elderly')
}else{
    window.alert(' Invalid value')
}
*/