"use strict"

export class worksheetControl {
    constructor(nameArea){

        this.nameFormat = nameArea.toLowerCase().replace(/\s+/g, '').replace(/\.+/g , '');
        
        
        
    }

    add(receipt, expense, nameArea){
        
        console.log(receipt, expense)
        const areaTabWork = document.querySelector(`[data-${nameArea.toLowerCase().replace(/\s+/g, '').replace(/\.+/g , '')}]`);
        areaTabWork.innerHTML = `${receipt} e ${expense}`
        //formController.addEventListenner("submit", (event) => event.preventDefault())
        //this.nameInput = formController.querySelector('[data-name-input]');
        //this.typeInput = formController.querySelector('[data-type-input]');
        //this._listInputs.add(this._createInput());
        //this._worksheetView.update(this._listWorksheet);
        
    }
}