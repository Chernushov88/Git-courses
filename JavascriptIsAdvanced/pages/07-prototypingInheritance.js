document.title = 'Прототипирование наследование.' +
    ''
var Animal = function(name){
    this.name = name;
};

Animal.prototype = {
    legsCount: 4,
    headsCount: 1,
    taillsExists: false
};


var an1 = new Animal('Cat');
console.log(an1);


var Cat = function(){
    this.isCat = true;
}

var cat = new Cat('TestName0');
console.log(cat);

Cat.prototype = new Animal();

var cat2 = new Cat('TestName');
console.log(cat2);
console.log(cat2.legsCount);

console.log(cat2 instanceof Cat);
console.log(cat2 instanceof Animal);
console.log(cat2 instanceof Object);
console.log(cat2 instanceof String);