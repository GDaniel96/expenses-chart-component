import "../src/assets/styles/global.css";
import "../src/assets/styles/component-style.css";
import "../src/assets/styles/pseudo-elements.css";
import logoImage from "./assets/images/logo.svg";
import data from "./data.json";
import ActiveView from "./views/activeView";
import DataView from "./views/dataView";
import DaysView from "./views/daysView";
import AmountView from "./views/amountView";

const logo = document.querySelector("img");
logo.src = logoImage;
const container = document.querySelector(".graph-container");
const dataView = new DataView();
const dayView = new DaysView();
const amountView = new AmountView();

data.forEach((element) => {
  const newElement = document.createElement("div");
  console.log(newElement);
  dataView.dataView(container, newElement);
  dayView.daysView(element, newElement);
  amountView.amountView(element, newElement);
});

new ActiveView();
