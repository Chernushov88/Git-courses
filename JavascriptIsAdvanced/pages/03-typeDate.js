document.title = 'Типы данных и переменные'

var num = 1;
var str = 'string';

var arr = [1,2,'string'];
var obj={
    a: 1,
    b: 'str'
};

myFunc();
//testFunction(); -  Uncaught TypeError: testFunction is not a function
function myFunc(){
    console.log('myFunc');
}

var testFunction = function(){
    console.log('testFunction');
}
testFunction();

console.log(obj);
console.log(obj.b);

/*
number
string
boolean
null
object
underfined
Simbol
 */

console.log('number', typeof num );
console.log('number', typeof str );
console.log('boolean', typeof true );
console.log('null', null );
console.log('null', typeof null );
console.log('underfined', typeof underfined );
console.log('underfined', typeof void(0) );
console.log('object', typeof {a: 1, b: 'str'} );
console.log('object', typeof arr );
function count(){}
console.log('func', count );
console.log('func', typeof count );
console.log('object', typeof [1,2,3] );
let id = Symbol();
console.log( 'Symbol', Symbol('id') );

// Область видимости пеоеменных
var a = 1,
    b = 2;
console.log('a,b', a,b);


var num1 =5,
    num2 = 4,
    str2 = '3';

console.log('5+4 -', num1+num2);
console.log('5+"3" = ',num1+str2);
console.log('5-"3" = ',num1-str2);
console.log( '[1] + [3] - [2]  = ',[1] + [3] - [2] );