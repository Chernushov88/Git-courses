document.title = "Контекст"
var obj1 = {
    name: 'Object1 name ',
    getName: function(age, newQ){
        age = age || 'age';
        newQ ? newQ : newQ = 'newQ';
        console.log('it\'s name is: ', this.name, age, newQ);
    },
}
obj1.getName(31,101);

var obj2 ={
    name: 'Obj - 2',
}
obj1.getName.bind(obj2)();
obj1.getName.bind(obj2)(12, 99);
let q = obj1.getName.bind(obj2);
q(15);


obj1.getName.call(obj2, 'call test');
obj1.getName.call(obj2, 'test2', 46);


obj1.getName.apply(obj2, ['testAply', 30]);
let arg = ['testAply2', 30];
obj1.getName.apply(obj2, arg);


function bindRedeclate(newContext, newFunction ){
    return function(){
        console.log('argument - ', arguments);
        newFunction.apply(newContext, arguments);
    }
}

bindRedeclate(obj2, obj1.getName)(1111, 123123);
