const quizContainer = document.querySelector(".questions-box");
const quiz = quizContainer.querySelectorAll(".question");
const quizNextButton = document.querySelector(
  ".quiz-buttons button:last-of-type"
);
const quizPrevButton = document.querySelector(
  ".quiz-buttons button:first-of-type"
);
const currentPage = document.querySelector(".quiz-progress .current-page");

let currentQuiz = 0;
const answers = {};

function showQuiz(quizIndex) {
  if (quizIndex === 0) {
    quizPrevButton.style.display = "none";
    quizNextButton.style.marginLeft = "auto";
  } else if (quizIndex === quiz.length - 1) {
    quizNextButton.style.display = "none";
  } else {
    quizNextButton.style.display = "block";
    quizPrevButton.style.display = "block";
    quizNextButton.style.marginLeft = "0";
  }
  quiz.forEach((quiz, index) => {
    if (index === quizIndex) {
      quiz.style.display = "block";
    } else {
      quiz.style.display = "none";
    }
  });
  processAnswersForCurrentQuiz();
}

showQuiz(currentQuiz);

function nextQuiz() {
  currentQuiz++;
  currentPage.innerHTML = `0${currentQuiz + 1}`;
  if (currentQuiz >= quiz.length) {
    currentQuiz = 0;
  }
  showQuiz(currentQuiz);
}

function prevQuiz() {
  currentQuiz--;
  currentPage.innerHTML = `0${currentQuiz + 1}`;
  if (currentQuiz < 0) {
    currentQuiz = quiz.length - 1;
  }
  showQuiz(currentQuiz);
}

quizNextButton.addEventListener("click", nextQuiz);
quizPrevButton.addEventListener("click", prevQuiz);

function processAnswersForCurrentQuiz() {
  const question = document.querySelectorAll(".question")[currentQuiz];
  const answersList = question.querySelectorAll(".item-list");
  quizNextButton.disabled = true;

  answersList.forEach((answer) => {
    if (answers[`question${currentQuiz + 1}`] !== undefined) {
      quizNextButton.disabled = false;
    }
    answer.addEventListener("click", () => {
      quizNextButton.disabled = false;
      const selectedAnswer = answer.querySelector("p").textContent;

      answersList.forEach((elem) => {
        elem.style.border = "none";
      });
      answer.style.border = "2px solid green";

      answers[`question${currentQuiz + 1}`] = selectedAnswer;
      console.log(answers);
    });
  });
}

jQuery(document).ready(function () {
    jQuery(".quiz .form-button").click(function () {
      let form = jQuery(this).closest(".quiz .form");
      let actUrl = form.attr("action");
  
      let formData = form.serialize();
  
      for (const key in answers) {
        if (Object.prototype.hasOwnProperty.call(answers, key)) {
          formData += `&${encodeURIComponent(key)}=${encodeURIComponent(
            answers[key]
          )}`;
        }
      }
  
      jQuery.ajax({
        url: actUrl,
        type: "post",
        dataType: "html",
        data: formData,
        success: function (data) {},
        error: function () {},
      });
    });
  });
  