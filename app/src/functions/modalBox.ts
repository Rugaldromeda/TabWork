export const activeModal = (divModal:HTMLElement) => {
    divModal.classList.remove("invisible");
}

export const closeModal = (divModal:HTMLElement) => {
    divModal.classList.add("invisible");
}