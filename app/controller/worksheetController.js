"use strict"
import { ListInputs } from "../model/ListInputs.js";

export class worksheetController {
    constructor(){
        const $ = document.querySelector.bind(document)
        this.nameInput = $('[data-name-input]');
        this.typeInput = $('[data-type-input]');

        this._listInputs = new ListInputs()
        
    }

    
}