import AmountView from "./AmountView";
import DaysView from "./DaysView";

class DataView {
  constructor(container, data) {
    this.data = data;
    this.container = container;
    this.activeDay = "wed";
  }
  render() {
    this.container.innerHTML = "";
    this.data.forEach((dayOfTheWeekWithAmount) => {
      const wrapper = document.createElement("div");
      const dayContainer = document.createElement("div");
      const amountContainer = document.createElement("div");

      wrapper.appendChild(amountContainer);
      wrapper.appendChild(dayContainer);

      wrapper.className = "data-container";
      this.container.appendChild(wrapper);

      const amountView = new AmountView(
        dayOfTheWeekWithAmount.amount,
        amountContainer,
        this.activeDay === dayOfTheWeekWithAmount.day,
        () => {
          this.setActiveDay(dayOfTheWeekWithAmount.day);
        }
      );
      const dayView = new DaysView(dayOfTheWeekWithAmount.day, dayContainer);

      amountView.setEvents();

      amountView.render();
      dayView.render();
    });
  }

  setActiveDay(day) {
    this.activeDay = day;
    this.render();
  }
}

export default DataView;
