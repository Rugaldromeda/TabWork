"use strict"
import { activeModal } from "../components/modalBox.js";
export class WorkSheetView {

    constructor(tab, content){

        this._tab = tab;
        this._content = content;

    }

    templateTab(model) {
        return `
            <button class="tabs__button__add" data-add-worksheet>Adicionar</button>
            ${model.worksheets.map(w => `   
            <button class="tabs__button tabs__${w.nameWorksheet.replace(/\s+/g, '').replace(/\.+/g , '')} ${w.nameWorksheet.replace(/\s+/g, '').replace(/\.+/g , '')}">${w.nameWorksheet}</button> 
        `).join('')} `

    }
    
    templateContent(model){
        return `
        
        ${model.worksheets.map( w => `
            <div class="tab__content invisible" id="tabs__${w.nameWorksheet.replace(/\s+/g, '').replace(/\.+/g , '')}">
                <form data-controller-${w.nameWorksheet.replace(/\s+/g, '').replace(/\.+/g , '')}>
                    <input type="text" id="name" data-name-input >
                    <select name="" data-type-input >
                        <option value="numero">Numero</option>
                        <option value="data">Data</option>
                        <option value="dinheiro">Dinheiro</option>
                    </select>
                    <input type="submit" value="adicionar">
                </form>
                <div data-${w.nameWorksheet.replace(/\s+/g, '').replace(/\.+/g , '')}></div>
            </div>
        `).join('')}`
    }

    update(model){
        this._tab.innerHTML = this.templateTab(model);
        this._content.innerHTML = this.templateContent(model);
        const botaoAdd = document.querySelector('[data-add-worksheet]');
        const modalBox =  document.querySelector('[data-modalbox]');

        botaoAdd.addEventListener('click' , () => activeModal(modalBox));
    }
}