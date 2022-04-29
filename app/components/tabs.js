"use strict"
export const tabActive = (selectorDiv, selectorTab) =>{
    const content = document.querySelector(selectorDiv);
    const tab = document.querySelector(selectorTab);
    
    tab.classList.add("tabs__button__active");
    content.classList.remove("invisible");
    
};

export const closeContent = ()=>{
    // desativa as tabs active
    let tabsAll = document.querySelectorAll(".tabs__button");
    for (let i = 0; i < tabsAll.length; i++) {
        tabsAll[i].className = tabsAll[i].className.replace("tabs__button__active", "");
    }
    //deixa as divs inativas invisiveis 
    let contentDiv = document.getElementsByClassName("tab__content");
    for (let z = 0; z < contentDiv.length; z++) {
        contentDiv[z].classList.add("invisible");
        
    }
    
}