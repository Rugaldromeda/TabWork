"use strict"
import { ListInputs } from "../model/ListInputs.js";

export class worksheetController {
    constructor(){
        const $ = document.querySelector.bind(document)
        this.nameInput = $('[data-name-input]');
        this.typeInput = $('[data-name-input]');

        this._listInputs = new ListInputs()
        
    }

    add(){
        
        this._listWorksheet.add(this._createWorksheet());
        this._worksheetView.update(this._listWorksheet);
        
    }

    _createWorksheet(){
        return new ModelWorksheet(this.nameWorksheet.value);
    }
}