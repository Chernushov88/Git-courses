document.title = "02-addEventListener"
let div = document.createElement('div');
div.className = "lesson2";
div.innerHTML = `
    <div id="big" style=" padding: 50px; background: red;">
        <div id="small-1" style="width:50px; height: 50px; background: blue; float: left"">small-1</div>
        <div id="small-2" style="width:50px; height: 50px; background: green; float: right">small-2</div>
    </div>
    <button>click</button>
`;
document.body.append(div)


document.querySelector('button').addEventListener('click', (event) =>{
    console.log('click', event);
});

document.querySelector('#big').addEventListener('click', function(event){
    console.log('Big click', event);
    event.target.style.background = '#f0f'
}, true);
document.querySelector('#small-1').addEventListener('click', function(event){
    console.log('Small click', event);
   //event.stopPropagation();
    event.stopImmediatePropagation()
},  false);

document.querySelector('#small-2').addEventListener('click', function(event){
    /*let backg = this.style.background
    backg = this.style.background == '#0f0' ? 'green' : '#0f0'
    console.log('Small click', event);
    //
    */
    event.stopPropagation();
    this.style.background = '#0f0'
},  );