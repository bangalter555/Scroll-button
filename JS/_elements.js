//IMPORTS
import { $scrollButtonDown, $scrollButtonUp } from "./_scroll-button.js";

//Window
const $window = window;
//Documento HTML
const $documentHTML = document.documentElement;
//head HTML
const $documentHead = document.head;

//Links
const $linkToStyles = document.createElement("link");
$linkToStyles.rel = "stylesheet";
$linkToStyles.href = "/DIST/main.css";
$documentHead.insertAdjacentElement("afterbegin", $linkToStyles);

//Scripts
const $mainScript = document.querySelector("script");

//BODY
const $documentBody = document.body;
$documentBody.classList.add("body");

//BODY ELEMENTS

//HEADER
const $header = document.createElement("header");
$documentBody.insertAdjacentElement("afterbegin", $header);
//Adding classes to header
$header.classList.add("header");

//PAGE TITLE (H1)
const $pageTitle = document.createElement("h1");
$header.appendChild($pageTitle);
$pageTitle.textContent = "Scroll Button History";
//Adding classes to page title
$pageTitle.classList.add("page-title");

//MAIN
const $mainSection = document.createElement("main");
$mainSection.classList.add("main");
$header.insertAdjacentElement("afterend", $mainSection);
//MAIN Sections

const sectionArrayClasses = [
  "first-section",
  "second-section",
  "third-section",
  "fourth-section",
];

for (let i = 0; i < sectionArrayClasses.length; i++) {
  //Sections
  let $section = document.createElement("section");
  $section.classList.add(sectionArrayClasses[i]);
  $section.id = `section-num-${i + 1}`;
  //Section titles
  $section.innerHTML = `<h2> Section ${i + 1}</h2>`;
  $mainSection.appendChild($section);
}

//ADDING SCROLL BUTTONS
$mainSection.insertAdjacentElement("afterbegin", $scrollButtonUp);
$mainSection.insertAdjacentElement("beforeend", $scrollButtonDown);

console.log($header.getBoundingClientRect());

//EXPORTS
export { $documentHTML, $window };
