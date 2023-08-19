(() => {
    const refs = {
      openMenulBtn: document.querySelector("[data-menu-open]"),
      closeMenulBtn: document.querySelector("[data-menu-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenulBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();