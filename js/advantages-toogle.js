const advantagesContainer = document.querySelector(".advantages-lists");
const toggleButtonsAdvantages =
  advantagesContainer.querySelectorAll(".toogle-button");

toggleButtonsAdvantages.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.textContent === "+") {
      button.textContent = "-";
    } else {
      button.textContent = "+";
    }
    const advantageItem = button.closest(".adv-item");
    advantageItem.classList.toggle("active");
  });
});
