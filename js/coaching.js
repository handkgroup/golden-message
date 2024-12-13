
const modal = document.getElementById("modal");
const closeModal = modal.querySelector(".modal-close");
const buttons = document.querySelectorAll(".case-study-btn");


const openModal = (event) => {
    const cardText = event.target.closest(".more__modal").querySelector("p").textContent;

    modal.querySelector(".modal__text").textContent = cardText;

    modal.classList.remove("hidden");
};


const hideModal = () => {
    modal.classList.add("hidden");
};


buttons.forEach((button) => {
    button.addEventListener("click", openModal);
});


closeModal.addEventListener("click", hideModal);


modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        hideModal();
    }
});
