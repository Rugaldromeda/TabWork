"use strict"
export class ModelInputs {
    constructor(nome, tipo) {
        this._name = nome;
        this._type = tipo;
    }

    get name() {
        return this._name;
    }

    get type(){
        return this._type;
    }
    
}