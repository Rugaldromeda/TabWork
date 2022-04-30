"use strict"
import { ModelWorksheet } from "../model/ModelWorksheet.js";
import { WorkSheetView } from "../view/WorkSheetView.js";
import { ListWorksheets } from "../model/ListWorksheets.js";
import { worksheetController } from "./worksheetController.js";

export class constructorWorkSheet {
    constructor(){
        const $ = document.querySelector.bind(document)
        this.nameWorksheet = $('[data-name-worksheet]');

        this._listWorksheet = new ListWorksheets()
        
        this._worksheetView = new WorkSheetView($('.tabs'),$('.contents'));
        this._worksheetView.update(this._listWorksheet);

        this.worksheetControl;
        
        
    }

    add(){
        const verify = this._listWorksheet.worksheets.find( element => element.nameWorksheet.replace(/\s+/g, '').replace(/\.+/g , '') === this.nameWorksheet.value.replace(/\s+/g, '').replace(/\.+/g , ''))
        if( verify == undefined && this.nameWorksheet.value.replace(/\s+/g, '') !== "" ){
            this._listWorksheet.add(this._createWorksheet());
            this._worksheetView.update(this._listWorksheet);
            this.worksheetControl = new worksheetController(this.nameWorksheet.value);

            console.log(this._listWorksheet);
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