"use strict"
import { BudgetControl } from "../../budget_balance/controllers/budget-controller.js";
import { viewBudgetController } from "../../budget_balance/views/viewBudgetController.js";
import { activeModal } from "../../functions/modalBox.js";
import { ListTabworks } from "../models/listTabworks.js";
export class TabworkView {

    public tabContents:HTMLElement;

    constructor(tabSpace:HTMLElement){

        this.tabContents = tabSpace;
        

    }

    templateTab(model:ListTabworks) {

        const spaceTabs = document.createElement("div");
        spaceTabs.classList.add("tabs");

        const buttonCreateTab = document.createElement("button");
        buttonCreateTab.classList.add("tabs__button__add"); 
        buttonCreateTab.setAttribute("data-add-worksheet", "");
        buttonCreateTab.innerHTML = `Criar Planilha`;
        const modalBox =  document.querySelector('[data-modalbox]') as HTMLElement;
        buttonCreateTab.addEventListener('click' , () => activeModal(modalBox));

        spaceTabs.appendChild(buttonCreateTab);
        model.list.map((w) => {    
            const newTab = document.createElement("button");
            newTab.classList.add(`tabs__button`);
            newTab.classList.add(`tabs__${w.name.replace(/\s+/g, '').replace(/\.+/g , '')}`);
            newTab.classList.add(`${w.name.replace(/\s+/g, '').replace(/\.+/g , '')}`);
            newTab.innerHTML = `${w.name}`;
            const deletTab = document.createElement("span");
            deletTab.classList.add("close__delete");
            deletTab.setAttribute("data-exclude", "");
            deletTab.innerHTML = " &#128473;";

            newTab.appendChild(deletTab);

            spaceTabs.appendChild(newTab);
              
        });

        const checkTabs = this.tabContents.querySelector(".tabs");
        if(checkTabs == undefined){
          return spaceTabs;  
        }
        else{
            checkTabs.remove();
            return spaceTabs;
        }
        
        /*`
            <button class="" data-add-worksheet>Criar Planilha</button>
             `*/

    }
    
    templateContent(model:ListTabworks){

        const spaceContent = document.createElement("div");
        spaceContent.classList.add("contents");

        model.list.map( (w) => {
            const newContent = document.createElement("div");
            newContent.classList.add("tab__content");
            newContent.classList.add("invisible");
            newContent.setAttribute("id", `tabs__${w.name.replace(/\s+/g, '').replace(/\.+/g , '')}` );

            
            const spaceTabworks = document.createElement("div");
            spaceTabworks.setAttribute(`data-${w.name.replace(/\s+/g, '').replace(/\.+/g , '')}`, "");

            newContent.appendChild(this._formTabworkController(w.name, w.tabworkControl));
            newContent.appendChild(spaceTabworks);

            spaceContent.appendChild(newContent);
        });

        const checkContents = this.tabContents.querySelector(".contents");
        if(checkContents == undefined){
            return spaceContent;
        }
        else{
            checkContents.remove();
            return spaceContent;
        }
    }

    update(model:ListTabworks){
        this.tabContents.appendChild(this.templateTab(model));
        this.tabContents.appendChild(this.templateContent(model));
        

    }

    _formTabworkController(nameWorksheet:string,tabworkControl:BudgetControl){
        return viewBudgetController(nameWorksheet, tabworkControl);
    }
}