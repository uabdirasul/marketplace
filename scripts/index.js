const burger_menu_button = document.querySelector(
  ".header__burger-menu-button"
);
const header_nav = document.querySelector(".header__nav");

burger_menu_button.addEventListener("click", () => {
  header_nav.classList.toggle("display-block");
});
