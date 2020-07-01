document.title = "Контекст"

var obj1 = {
    name: 'Object1 name ',
    getName: function(age, newQ){
        age = age || 31.5;
        newQ ? newQ : newQ = 'newQ';
        console.log('it\'s name is: ', this.name, age, newQ);
    }
}
obj1.getName(31,101);

var obj2 ={
    name: 'Obj - 2',
    testMethods(age, newQ){
        age = age || 31.5;
        newQ ? newQ : newQ = 'newQ';
        console.log(`testMethods new format ${this.name}, ${age}, ${newQ}`)
    }
}
//obj1.getName.bind(obj2)();
obj1.getName.bind(obj2)(12, 99);
let q = obj1.getName.bind(obj2);
q('',15);


obj1.getName.call(obj2, 'call test');
obj1.getName.call(obj2, 'test2', 46);


obj1.getName.apply(obj2, ['testAply', 30]);
let arg = ['testAply2', 30];
obj1.getName.apply(obj2, arg);

obj2.testMethods.bind(obj1)(22,99)

function bindRedeclate(newContext, newFunction ){
    return function(){
        console.log('argument - ', arguments);
        newFunction.apply(newContext, arguments);
    }
}

bindRedeclate(obj2, obj1.getName)(1111, 123123);


this.x = 9;

var module = {
    x: 81,
    getX: (x)=>  this.x
};

console.log(module.getX()); // 81

var getX = module.getX;
console.log(getX()); // 9, поскольку в этом случае this ссылается на глобальный объект

// создаём новую функцию с this, привязанным к module
var boundGetX = getX.bind(module);
boundGetX(); // 81

