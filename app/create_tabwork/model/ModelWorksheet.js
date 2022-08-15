"use strict"

import { worksheetControl } from "../../budget_balance/controller/worksheetController.js";


export class ModelWorksheet {
    constructor(name){
        this._nameWorksheet = name;
        this.workSheetControl = new worksheetControl(this._nameWorksheet);
    }

    get nameWorksheet(){
        return this._nameWorksheet;
    }

    get listInputs(){
        return this._listInputs;
    }
}