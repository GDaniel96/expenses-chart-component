class DataView {
  constructor(container, newElement) {
    this.container = container;
    this.newElement = newElement;
  }

  dataView(container, newElement) {
    newElement.className = "data-container";
    container.appendChild(newElement);
  }
}

export default DataView;
