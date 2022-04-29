"use strict"
export class ListInputs {
    
    constructor() {
        
        this._inputs = [];
    }
    
    add(input) {
        
        this._inputs.push(input);
    }
    
    get inputs() {
        
        return [].concat(this._inputs);
    }
}