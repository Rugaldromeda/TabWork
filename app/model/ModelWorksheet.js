"use strict"

import { worksheetController } from "../controller/worksheetController.js";
import { ListInputs } from "./ListInputs.js";
import { ModelInputs } from "./ModelInputs.js";

export class ModelWorksheet {
    constructor(name){
        this._nameWorksheet = name;
        this._worksheetController = new worksheetController
        
        this._listInputs = new ListInputs();
    }

    get nameWorksheet(){
        return this._nameWorksheet;
    }

    get listInputs(){
        return this._listInputs;
    }
}