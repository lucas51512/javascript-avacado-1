class Funcionario {
    constructor(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;       
    }
}

const FuncionarioProxy = new Proxy(new Funcionario('abc@abc.com'), {
    get(target, prop, receiver){
        console.log('Armadilha Aqui');

        return Reflect.get(target, prop, receiver);
    }
});

console.log(FuncionarioProxy.email);