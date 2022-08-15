export class List {
    constructor() {
        this.listItens = [];
    }
    add(item) {
        this.listItens.push(item);
    }
    get list() {
        return this.listItens;
    }
}
