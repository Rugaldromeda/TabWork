"use strict"
import { ListInputs } from "../model/ListInputs.js";
import { ModelInputs } from "../model/ModelInputs.js";

export class worksheetController {
    constructor(worksheetController){
        const $ = document.querySelector.bind(document)
        // use uma classe, pra essa forma de seleção é melhor. 
        const formController = $(`[data-controller-${worksheetController.replace(/\s+/g, '').replace(/\.+/g , '').toLowerCase()}]`)
        this.nameInput;
        this.typeInput;

        this._listInputs = new ListInputs()
        
    }

    add(){
        this.nameInput = formController.querySelector('[data-name-input]');
        this.typeInput = formController.querySelector('[data-type-input]');
        this._listInputs.add(this._createInput());
        this._worksheetView.update(this._listWorksheet);
        
    }

    createInput(){
        return new ModelInputs(this.nameInput.value, this.typeInput.value);
    }
}