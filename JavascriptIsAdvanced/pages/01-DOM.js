document.title = "01-querySelector.js";
let div = document.createElement('div');
div.className = "lesson1";
div.innerHTML = `<div id="app">id APP</div>
    <div class="class-name">class-name</div>
    <ul>
        <li class="q">1</li>
        <li class="q">2</li>
        <li class="q">3</li>
        <li class="q">4</li>
        <li class="q">5</li>
    </ul>
    <div id="test">
        <h1>Hellow</h1>
    </div>`;
document.body.append(div)
window.addEventListener('load', function () {

    var id0 = document.getElementById('app');

    var className0 = document.getElementsByClassName('q');
    console.log(id0);
    console.log(className0);


    var id = document.querySelector('#app');
    var className = document.querySelector('.q');
    console.log(id);
    console.log(className);
    var element = document.querySelector('#test  h1');
    console.log(element);
})
