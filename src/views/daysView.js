class DaysView {
  constructor(day, container) {
    this.day = day;
    this.container = container;
  }
  render() {
    /// New container for the day element
    let dayElement = document.createElement("div");
    dayElement.className = "day";
    dayElement.innerText = this.day;
    this.container.appendChild(dayElement);
  }
}

export default DaysView;
