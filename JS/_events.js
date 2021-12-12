//IMPORTS
import { $documentHTML, $window } from "./_elements.js";
import { $scrollButtonDown, $scrollButtonUp } from "./_scroll-button.js";

//EVENTS

//Clicks w/Scroll
$documentHTML.addEventListener("click", (e) => {
  let target = e.target;
  if (target.matches(".scroll-down") || target.matches(".arrow-down")) {
    $documentHTML.scrollTop += 400;
  }
  if (target.matches(".scroll-up") || target.matches(".arrow-up")) {
    $documentHTML.scrollTop -= 400;
  }
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 90) {
    $scrollButtonUp.classList.remove("is-hidden");
  } else if (window.scrollY < 90) {
    $scrollButtonUp.classList.add("is-hidden");
  }
  if (window.scrollY > 1830) {
    $scrollButtonDown.classList.add("is-hidden");
  } else if (window.scrollY < 1830) {
    $scrollButtonDown.classList.remove("is-hidden");
  }
});
