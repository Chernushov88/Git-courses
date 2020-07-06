export {some, double, double2, double3};

/*

*/
/*/*
// let func1 = {
//     i : 2
// };

function func2(n, m){
    function func1(i){
        i = i || 1;
        return i;
    }
    return func1(2) * func1() * n * m;
}
console.log(func2( 3, 2));

// console.log(func2.call(func1, 3, 2));
*/



let some = {
    i: 2
};

function double(n, m){
    return this.i * this.i * n * m;
}

let doubleF = (n, m) => {

}

let doubleFF = (function(n, m){

}).bind(this);

(function(){
    let _that = this;

    let doubleFFF = function(n, m){
        // this -> _that
    };
})();

// console.log(double(3));

console.log(double.call(some, 3, 2));
console.log(double.apply(some, [3, 2]));

let double2 = double.bind(some);
console.log('bind',  double2);
console.log(double2(3, 2));
console.log(double2.call(null, 2, 3));

// double(3, 2) - this -> some

// function.bind(context) -> new_function context = const



let double3 = double.bind(some, 3 );
console.log(double3(1, 1));

for(var i = 0; i < 5; i++){
    window.setTimeout((function(i){
        console.log(i);
    }).bind(null, i), i * 200);
}

