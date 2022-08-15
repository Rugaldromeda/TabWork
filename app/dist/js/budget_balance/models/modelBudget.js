"use strict";
import { ListInputs } from "../../create_inputs/lists/ListInputs.js";
export class ModelBudget {
    constructor(data) {
        this.dataModel = data;
        this.listInputs = new ListInputs();
    }
    get data() {
        return this.dataModel;
    }
    get inputs() {
        return this.listInputs;
    }
}
