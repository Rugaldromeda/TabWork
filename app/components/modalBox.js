"use strict"
export const activeModal = (divModal) => {
    divModal.classList.remove("invisible");
}

export const closeModal = (divModal) => {
    divModal.classList.add("invisible");
}