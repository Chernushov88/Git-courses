document.title  = "3-hw";
/*import * as ArticlesModel from './articles';
import 'babel-polyfill';

async function testArticlesModel(){
    let articles = await ArticlesModel.all();
    console.log('articles count = ' + articles.length);

    // берём случайный индекс
    let ind = Math.floor(Math.random() * articles.length);
    console.log('select index ' + ind + ', id = ' + articles[ind].id)

    // получаем статью по id
    let article = await ArticlesModel.one(articles[ind].id);
    console.log(article);

    let removeRes = await ArticlesModel.remove(article.id);
    console.log('что с удалением? - ' + removeRes);

    let articlesNewList = await ArticlesModel.all();
    console.log('articles count = ' + articlesNewList.length);
}

testArticlesModel().then(() => {

}).catch((e) => {
    document.querySelector('body').innerHTML += `<p>${e.message}</p>`;
    console.log(e.stack);
});
*/
window.localStorage.setItem('test', 1);
let btn = document.querySelector('#hider');
let text = document.querySelector('#text');
console.log(btn);

try{
    btn.addEventListener("click", hideText);
}catch(e){
    console.log(e)
}


function hideText(event){
    let _this = event.currentTarget;
    _this.hidden = true;
    _this.hidden == false ? _this.hidden = true : btnVisible();

    // event.currentTarget.style.display == 'block' ? '1' : '0';
    if (text.hidden == false){
        text.hidden = true;
    }else{
        text.hidden = false;
    }
    function btnVisible(){
        window.setTimeout(function(){
            _this.hidden = false;
        },1000)
    }
}

let button = document.querySelector('#button');
button.addEventListener("click", () => window.alert("1"));
button.removeEventListener("click", () => window.alert("3"));
button.onclick = () => {
    window.alert(2);
}

/*
let field = document.querySelector("#field");
console.log(field);
field.addEventListener('click', function(event){
    console.log(event.clientX);
    console.log(event.clientY)
    let x = event.clientX;
    let y = event.clientY;
    let ball = document.querySelector('#ball');
    ball.style.top = y - 20 + 'px';
    ball.style.left = x - 20 + 'px';
})
 */
field.onclick = function(event) {
    console.log('event', event);
    console.log('this', this);
    // координаты поля относительно окна браузера

    let fieldCoords = this.getBoundingClientRect();
    console.log('getBoundingClientRect', this.getBoundingClientRect())

        // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
    // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
    console.log('event.clientY', event.clientY);
    console.log('fieldCoords.top', fieldCoords.top);
    console.log('field.clientTop', field.clientTop);
    console.log('ball.clientHeight / 2', ball.clientHeight / 2);
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };

    // запрещаем пересекать верхнюю границу поля
    if (ballCoords.top < 0) ballCoords.top = 0;

    // запрещаем пересекать левую границу поля
    if (ballCoords.left < 0) ballCoords.left = 0;


    // // запрещаем пересекать правую границу поля
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    // запрещаем пересекать нижнюю границу поля
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}