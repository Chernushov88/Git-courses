/* global Proxy */
function watchObj(node, callback){
    return new Proxy(node, {
        set(target, name, value){
            target[name] = value;
            callback(name, value);
            return true;
        },
        get(target, name){
            switch(typeof target[name]){
                case 'object':
                    return watchObj(target[name], callback);
                case 'function':
                    return target[name].bind(target);
                default:
                    return target[name];
            }
        }
    });
}

// class EmailParser {
//     constructor(email) {
//         this.email = email;
//     }
//     get isCorrect(){
//         // нужна регулярка с просторов интернета
//         return /^.+@.+\..+/.test(this.email);
//     }
//     get name(){
//         return this.isCorrect ? this.email.split('@')[0] : null;
//     }
//     get domain(){
//         return this.isCorrect ? this.email.split('@')[1] : null;
//     }
//
// }

class EmailParser{
    constructor(email) {
        this.email = email;
        Object.defineProperty(this, 'isCorrect', {
            get(){
                return /^.+@.+\..+/.test(this.email);
            }
        })
        Object.defineProperty(this, 'name', {
            get(){
                return this.isCorrect ? this.email.split('@')[0] : null;
            }
        })
        Object.defineProperty(this, 'domain', {
            get(){
                return this.isCorrect ? this.email.split('@')[1] : null;
            }
        })
    }

}

export {watchObj, EmailParser};