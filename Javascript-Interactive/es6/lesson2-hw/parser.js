class EmailParser {
    constructor(email) {
        this.email = email;
    }
    get isCorrect(){
        // нужна регулярка с просторов интернета
        return /^.+@.+\..+/.test(this.email);
    }
    get name(){
        return this.isCorrect ? this.email.split('@')[0] : null;
    }
    get domain(){
        return this.isCorrect ? this.email.split('@')[1] : null;
    }

}

export {EmailParser};