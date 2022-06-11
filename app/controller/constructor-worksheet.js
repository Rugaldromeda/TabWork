"use strict"
import { ModelWorksheet } from "../model/ModelWorksheet.js";
import { WorkSheetView } from "../view/WorkSheetView.js";
import { ListWorksheets } from "../model/ListWorksheets.js";
import { worksheetControl } from "./worksheetController.js";

export class constructorWorkSheet {
    constructor(){
        const $ = document.querySelector.bind(document)
        this.nameWorksheet = $('[data-name-worksheet]');
        this.typeWorksheet = $('[data-type-worksheet]');

        this.listWorksheet = new ListWorksheets()
        
        this._worksheetView = new WorkSheetView($('.budget'));
        this._worksheetView.update(this.listWorksheet);

        this.worksheetControl;
        
        
    }

    add(){
        console.log(this.listWorksheet.worksheets.length);
        const verify = this.listWorksheet.worksheets.find( element => element.nameWorksheet.replace(/\s+/g, '').replace(/\.+/g , '') === this.nameWorksheet.value.replace(/\s+/g, '').replace(/\.+/g , ''))
        if( verify == undefined && this.nameWorksheet.value.replace(/\s+/g, '') !== "" ){
            this.listWorksheet.add(this._createWorksheet());
            this._worksheetView.update(this.listWorksheet);

            
        }
        else if(this.nameWorksheet.value.replace(/\s+/g, '') === ""){
            alert("Campo vazio, por favor insira um valor válido!")
        }
        else{alert("Esse nome já existe, por favor escolha outro")}
         
    }

    _createWorksheet(){
        return new ModelWorksheet(this.nameWorksheet.value);
    }
}