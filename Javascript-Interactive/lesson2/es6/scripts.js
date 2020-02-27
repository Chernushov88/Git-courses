import 'babel-polyfill';

//import Timer from './timer';
//let timer = new Timer(document.querySelector('.timer1'), 100);

// import * as callBindApply from "./callBindApply";
// callBindApply;

/*
import some from './getters';
console.log(some.cnt); // some._private.cnt
some.cnt = 5; // some.cnt.setter(5) ...
console.log(some.cnt);
some.cnt = -10;
console.log(some.cnt);
some.cnt = 100;
console.log(some.cnt);
*/


import data from './proxy';
console.log(data.a);
data.a = 5;
console.log(data.a);
data.b = 7;
console.log(data.b);


import VueGetters from './vue-getters';
import VueProxy from './vue-proxy';

let vg = new VueGetters({
    el: '.elem1',
    data: {
        clicks: 1,
        name: 'Some!'
    },
    template: `<div><h2>{{ clicks }}</h2>{{ name }}</div>`
});

document.querySelector('.elem1').addEventListener('click', function(){
    vg.data.clicks++;
});



let vp = new VueProxy({
    el: '.elem2',
    data: {
        clicks: 1,
        name: 'Some!'
    },
    template: `<div><h2>{{ clicks }}</h2>{{ name }}</div>`
});

document.querySelector('.elem2').addEventListener('click', function(){
    vp.data.clicks++;
});

/*
import {watchObj, EmailParser} from './hw';

let parser = new EmailParser('info@ntschool.ru');
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);

parser.email = 'some@nz';
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);

let div = document.createElement('div');
document.body.appendChild(div);

let cleverDiv = watchObj(div, function(prop, val){
    console.log(prop, val);
});

cleverDiv.innerHTML = '<strong>HTML</strong><em>Changed</em>';
*/
/*
    в консоли:
    innerHTML <strong>HTML</strong><em>Changed</em
*/

//cleverDiv.style.color = 'red';
/*
    весь текст стал красным
    в консоли:
    color red
*/

// cleverDiv.querySelector('em').style.color = 'green';
/*
    em стал зелёным
    в консоли ничего не добавилось

    // популярная ошибка Illegal invocation - из-за манипуляций у функции сломался this
*/








