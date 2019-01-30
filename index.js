const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const questionContainer = document.querySelector(".question-container");

function appendQuestion(question) {
  if (question) {
    questionContainer.innerText = question.questionText;
  }
}

function askQuestionThen(time) {
  question = questions[0];
  return new Promise((resolve, reject) => {
    setTimeout(appendQuestion(question), time)
  });
}

function removeQuestion() {
  questionContainer.innerText = "";
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time)
}

function trueAndFalseButtons() {
  return Array.from(document.querySelector(".true-false-list").getElementsByClassName("btn"))
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(button => {
    if (button.classList.contains("hide")) {
      button.classList.remove("hide")
    } else {
      button.classList.add("hide")
    }
  })
}

function displayQuestionOnClick(){

}
