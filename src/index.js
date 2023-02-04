import "../src/assets/styles/global.css";
import "../src/assets/styles/component-style.css";
import "../src/assets/styles/pseudo-elements.css";
import logoImage from "./assets/images/logo.svg";
import data from "./data.json";
import DataView from "./views/DataView";

const logo = document.querySelector("img");
logo.src = logoImage;
const container = document.querySelector(".graph-container");
const dataView = new DataView(container, data);

dataView.render();
// data.forEach((dayOfTheWeekWithAmount) => {
//   dataView.render(dayOfTheWeekWithAmount);

//   // dayView.render(dayOfTheWeekWithAmount, newElement);
//   // amountView.render(dayOfTheWeekWithAmount, newElement);
// });
