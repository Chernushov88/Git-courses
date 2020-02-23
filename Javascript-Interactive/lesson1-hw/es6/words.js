export {wordsCount, getWords}

function cleanStr(str) {
    return str.trim().replace(/ +/g, ' ');
}
function wordsCount(str) {
    return cleanStr(str).split(' ').length;
}
// function getWords(str){
//     return cleanStr(str).split(' ');
// }

function* getWords(str) {
    /*
    let words = cleanStr(str).split(' ');
    for(let i =  0; i < words.length; i++){
        yield words[i];
    }
    */
    let text = cleanStr(str);
    let start = 0;
    let current = text.indexOf(' ', start);
    console.log(current)

    // return cleanStr(str).split(' ');

    while(current !== -1){
         yield text.substr(start, current - start);
         start = current + 1;
         current = text.indexOf(' ', start)
    }



}
/*global Symbol*/
/*
function getWords(str){
    return {
        words: cleanStr(str).split(' '),
        [Symbol.iterator](){
            let i = 0;

            return {
                next: () => {
                    if (i < this.words.length){
                        return{
                            done: false,
                            value: this.words[i++]
                        };
                    }else{
                        return{
                            dane : true
                        };
                    }
                }
            }
        }
    }
}
*/