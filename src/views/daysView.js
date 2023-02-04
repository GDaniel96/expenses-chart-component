class DaysView {
  constructor(element, newElement) {
    // this.daysView(element);
    this.element = element;
    this.newElement = newElement;
  }

  daysView(element, newElement) {
    const day = element.day;

    /// New container for the day element
    let dayElement = document.createElement("div");
    dayElement.className = "day";
    dayElement.innerText = day;
    newElement.appendChild(dayElement);
  }
}

export default DaysView;
