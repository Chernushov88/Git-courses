export {wordsCount, getWords}

function clear(str){
    return str.trim().replace(/ +/g, ' ');
}
function wordsCount(str){
    return clear(str).split(' ').length
}

function* getWords(str) {
    /*
    let words = cleanStr(str).split(' ');
    for(let i =  0; i < words.length; i++){
        yield words[i];
    }
    */
    let text = clear(str);
    let start = 0;
    let current = text.indexOf(' ', start);
    console.log(current);
    while(current !== -1){
        yield text.substr(start, current - start);
        start = current + 1;
        current = text.indexOf(' ', start)
    }
}