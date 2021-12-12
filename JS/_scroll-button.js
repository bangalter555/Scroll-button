//Scroll button

//Scroll Up
const $scrollButtonUp = document.createElement("button");
$scrollButtonUp.classList.add("scroll-up", "is-hidden");
$scrollButtonUp.innerHTML = `&#x2b06;`;

//Scroll Down
const $scrollButtonDown = document.createElement("button");
$scrollButtonDown.classList.add("scroll-down");
$scrollButtonDown.innerHTML = `&#x2b07;`;

//EXPORTS
export { $scrollButtonUp, $scrollButtonDown };
