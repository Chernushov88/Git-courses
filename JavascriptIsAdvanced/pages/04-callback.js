document.title = 'Замыкания'

let div = document.createElement('div')
div.className = "lesson4"
div.innerHTML = `
<div><a href="#" id="size-12" data-size="12">size-12</a></div>
br
<div><a href="#" id="size-26" data-size="26">size-26</a></div>
br
<div><a href="#" id="size-40" data-size="40">size-40</a> </div>
`
document.body.append(div)

function printConsole(x) {
    console.log('I0 - ' + x);
    return function () {
        console.log('If - ' + x);
    }
}

for (var i = 0; i < 5; i++) {
    //console.log('I - ' + i);
    window.setTimeout(printConsole(i), 1000);
}

for (let j = 0; j < 5; j++) {
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
function makeNewFunck(a){
    return (b) => a * b;
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5); // ƒ (y)
console.log(add5(2));  // 7
console.log(add10(2)); // 12

let add3 = makeNewFunck(3)
console.log(add3);
console.log(add3(5)); // 15

function makeSize(size) {
    return function () {
        document.body.style.fontSize = size + 'px'
    }
}
let size12 = makeSize(12)
let size26 = makeSize(26)
let size40 = makeSize(40)

window.addEventListener('load', ()=>{
    document.querySelector('#size-12').onclick = size12
    document.querySelector('#size-26').onclick = size26
    document.querySelector('#size-40').onclick = size40

    let a = document.querySelectorAll('a');
    a.forEach ( (e)=>{
        e.addEventListener('click', ()=>{
            console.log(e)
            let dataSize = e.getAttribute('data-size')
            window.setTimeout(()=>{document.body.style.fontSize = Number(dataSize) + 10 + 'px';},1000)
        })
    })
})