class ActiveView {
  render() {
    const elementContainer = document.querySelectorAll("[data-amount]");

    elementContainer.forEach((item) => {
      item.classList.add("amount");
      item.addEventListener("click", () => {
        const current = document.querySelector(".active");
        current.classList.remove("active");
        item.classList.add("active");
      });
    });
  }
}

export default ActiveView;
