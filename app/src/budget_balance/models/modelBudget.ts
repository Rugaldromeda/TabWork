"use strict"

import { ListInputs } from "../../create_inputs/lists/ListInputs.js";

export class ModelBudget {
    private dataModel:IBudget;
    private listInputs: ListInputs;
    
    constructor(data:IBudget){
        this.dataModel = data;
        this.listInputs = new ListInputs();

    }

    get data(){
        return this.dataModel;
    }

    get inputs() {
        return this.listInputs;
    }
}