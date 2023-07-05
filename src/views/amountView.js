class AmountView {
  constructor(amount, container, active, onClick) {
    this.amount = amount;
    this.container = container;
    this.active = active;
    this.onClick = onClick;
  }

  render() {
    let amountElement = document.createElement("div");
    amountElement.style.height = `${this.amount * 3}px`;
    amountElement.setAttribute("data-amount", `$${this.amount}`);
    amountElement.classList.add("amount");
    this.container.appendChild(amountElement);

    if (this.active) {
      amountElement.classList.add("active");
    }
  }

  setEvents() {
    this.container.addEventListener("click", () => {
      this.onClick();
    });
  }
}

export default AmountView;
