document.title = 'Замыкания'

let div = document.createElement('div')
div.className = "lesson4"
div.innerHTML = `
<div><a href="#" id="size-12">size-12</a></div>
br
<div><a href="#" id="size-16">size-16</a></div>
br
<div><a href="#" id="size-20">size-20</a> </div>
`
document.body.append(div)

function printConsole(x) {
    console.log('I0 - ' + x);
    return function () {
        console.log('If - ' + x);
    }
}

for (var i = 0; i < 10; i++) {
    //console.log('I - ' + i);
    window.setTimeout(printConsole(i), 1000);
}

for (let j = 0; j < 10; j++) {
    // console.log('I - ' + i);
    window.setTimeout( () => {
        console.info('let J - ' + j);
    }, 3000);
}

function makeAdder(x) {
    return function(y) {
        console.log('y',y);
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5);
console.log(add5(2));  // 7
console.log(add10(2)); // 12

function makeSize(size) {
    return function () {
        document.body.style.fontSize = size + 'px'
    }
}
let size12 = makeSize(12)
let size16 = makeSize(16)
let size20 = makeSize(20)

window.addEventListener('load', ()=>{
    document.querySelector('#size-12').onclick = size12
    document.querySelector('#size-16').onclick = size16
    document.querySelector('#size-20').onclick = size20

})