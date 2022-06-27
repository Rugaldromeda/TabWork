"use strict"

import { worksheetControl } from "../controller/worksheetController.js";
import { ListInputs } from "./ListInputs.js";

export class ModelWorksheet {
    constructor(name){
        this._nameWorksheet = name;
        this.workSheetControl = new worksheetControl();
        //this._listInputs = new ListInputs();
    }

    get nameWorksheet(){
        return this._nameWorksheet;
    }

    get listInputs(){
        return this._listInputs;
    }
}