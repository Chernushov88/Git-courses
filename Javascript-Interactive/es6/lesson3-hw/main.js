document.title  = "3-hw";
/*let div = document.createElement('div');
document.body.prepend(div);
div.innerHTML = `
<hr>
<hr>
<input type="button" id="hider" value="Нажмите, чтобы спрятать текст" />
<button id="button">button</button>
<div id="text">Текст</div>

Нажмите на поле для перемещения мяча.
<br> Мяч не должен выходить за границы поля.


<div id="field">
    <img src="https://ru.js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
</div>
<hr>
<hr>
`
*/
import * as ArticlesModel from './articles';
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