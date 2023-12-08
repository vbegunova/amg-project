const questionsContainer = document.querySelector(".qustions-list");
const toggleButtonsQuestions =
  questionsContainer.querySelectorAll(".toogle-button");

  toggleButtonsQuestions.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.textContent === "+") {
        button.textContent = "-";
      } else {
        button.textContent = "+";
      }
      const questionItem = button.closest(".questions-item");
      questionItem.classList.toggle("active");
    });
  });