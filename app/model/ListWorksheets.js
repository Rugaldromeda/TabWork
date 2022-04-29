"use strict"
export class ListWorksheets {
    
    constructor() {
        
        this._worksheets = [];
    }
    
    add(worksheet) {
        
        this._worksheets.push(worksheet);
    }
    
    get worksheets() {
        
        return [].concat(this._worksheets);
    }
}