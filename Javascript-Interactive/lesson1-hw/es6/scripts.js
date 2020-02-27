import 'babel-polyfill';
import jQuery from 'jquery/dist/jquery.slim'
jQuery(function(){
    jQuery('.timer1').addClass('active').css({'height': '5vh', 'background': 'green'});
});
import {wordsCount, getWords} from './words.js'
let str = '  Всем  привет! Ура ура! ';




window.addEventListener('load', function(){
    this.console.log(wordsCount(str));
    for(let some of getWords(str)){
        this.console.log(some);			// выводит 4 слова
    }
    /*
    function* some(){
        console.log('yield a');
        yield 'a';
        console.log('yield b');
        yield 'b';
        console.log('yield c');
        yield 'c';
    }

    for(let a of some()){
        this.console.log(a);
    }*/
});