"use strict";
export class ListInputs {
    add(input) {
        this.inputs.push(input);
    }
    get list() {
        return this.inputs;
    }
}
