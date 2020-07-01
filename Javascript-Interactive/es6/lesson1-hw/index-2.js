document.title = `Реализовать модуль  по следующим правилам`;
import 'babel-polyfill';

import {wordsCount, getWords} from './words2.js'
let str = '  Всем  привет! Ура ура! fhfgh  ghfgh gghf ';

window.console.log(wordsCount(str)); // 4

for(let some of getWords(str)){
    window.console.log(some);			// выводит 4 слова
}