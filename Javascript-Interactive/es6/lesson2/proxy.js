/* global Proxy*/
let data = {
    _private: {
        nz: 3
    },
    a: 1,
    b: 2
};

export default new Proxy(data, {
    get(target, name){
        console.log(target)
        console.log(name)
        return target[name];
    }, 
    set(target, name, value){
        target[name] = value;
        console.log(`set ${name} = ${value}`);
        return true;
    }
});