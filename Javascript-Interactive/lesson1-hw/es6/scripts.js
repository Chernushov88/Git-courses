import 'babel-polyfill';

import {wordsCount, getWords} from './words.js'



import jQuery from 'jquery/dist/jquery.slim'
jQuery(function(){
    jQuery('.timer1').addClass('active').css({'height': '5vh', 'background': 'green'});
});

window.addEventListener('load', function(){
    let str = '  Всем  привет! Ура ура! ';
    this.console.log(wordsCount(str));
    for(let some of getWords(str)){
        this.console.log(some);			// выводит 4 слова
    }
});