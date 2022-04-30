"use strict"
import { constructorWorkSheet } from "./controller/constructor-worksheet.js";
import { tabActive, closeContent } from "./components/tabs.js";
import { closeModal } from "./components/modalBox.js";

const initTabs = () => {
    const listTabs = document.querySelectorAll(".tabs__button");
    for (let counter = 0; counter < listTabs.length; counter++) {
        const tabsList = listTabs[counter];
        const divContent = tabsList.classList[2];
        const idContent = `#tabs__${divContent}`;
        const idTab = `.tabs__${divContent}`;

        tabsList.onclick = () => {
            closeContent()
            tabActive(idContent, idTab);
        }
    
    }

}

initTabs()


const $ = document.querySelector.bind(document);
const formAdd = $(".form-add");
function callController(event) {
    event.preventDefault();
    worksheetController.add();
    initTabs()
    formAdd.reset();
};
const worksheetController = new constructorWorkSheet();

formAdd.addEventListener('submit' , callController);

const modal = $('[data-modalbox]');
const closeButton = $('[data-close-modalbox');
closeButton.addEventListener('click', () => closeModal(modal))