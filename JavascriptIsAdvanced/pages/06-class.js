document.title = 'class'
var User = function(name){
    this.name = name || 'New User';
}
User.prototype = {
    age:30,
    getName: function(){
        console.log('this name = ', this.name);
    },
    get:  function(filed){
        var self = this;
        window.setTimeout(()=> {
            console.log(this);
            console.log(self);
            console.log('GET : ', self[filed]);
            console.log('GET : ', this[filed]);
        }, 1000);
    }
}

var user = new User('Ivan');
user.getName();
user.get('name');

var user2 = new User('Sergey');
user2.getName();

var user3 = new User();
user3.get('name');
user3.get('age');
user3.get('getName');