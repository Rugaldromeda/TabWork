"use strict"

import { worksheetControl } from "../controller/worksheetController.js";


export class ModelWControl {
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