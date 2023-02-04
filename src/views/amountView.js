class AmountView {
  constructor(element, newElement) {
    this.element = element;
    this.newElement = newElement;
  }

  amountView(element, newElement) {
    const amount = element.amount;
    let amountElement = document.createElement("div");
    amountElement.style.height = `${amount * 3}px`;
    amountElement.setAttribute("data-amount", `$${amount}`);
    newElement.appendChild(amountElement);

    if (amountElement.previousSibling.innerText === "wed") {
      amountElement.classList.add("active");
    }
  }
}

export default AmountView;
