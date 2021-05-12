//dom js and other scripting

var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      question:
        "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
    },
    {
        question:
          "Arrays in JavaScript can be used to store ____.",
        choices: ["number and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
      },
    {
      question:
        "String values must be enclosed within ____ when being assigned to variables..",
      choices: ["commas", "curly brackets", "parentheses", "qoutes"],
      answer: "qoutes",
    },
    {
      question:
        "A very useful tool used during development and debuggin for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log",
    },
  ];
  
  var questionEl = document.querySelector("#question");
  var optionListEl = document.querySelector("#option-list");
  var questionResultEl = document.querySelector("#question-result");
  var timerEl = document.querySelector("#timer");
  
  var questionIndex = 0;
  var correctCount = 0;
  
  var time = 20;
  var intervalId;
  
  function endQuiz() {
    clearInterval(intervalId);
    var body = document.body;
    body.innerHTML = "Game over, You scored " + correctCount;
  }
  
  function updateTime() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
      endQuiz();
    }
  }
  
  function renderQuestion() {
    
    if (time == 0) {
      updateTime();
      return;
    }
  
    intervalId = setInterval(updateTime, 1000);
    
    questionEl.textContent = questions[questionIndex].question;
  
    optionListEl.innerHTML = "";
    questionResultEl.innerHTML = "";
  
    var choices = questions[questionIndex].choices;
    var choicesLenth = choices.length;
  
    for (var i = 0; i < choicesLenth; i++) {
      var questionListItem = document.createElement("li");
      questionListItem.textContent = choices[i];
      optionListEl.append(questionListItem);
    }
  }
  
  function nextQuestion() {
    questionIndex++;
    if (questionIndex === questions.length) {
      time = 0;
    }
    renderQuestion();
  }
  
  function checkAnswer(event) {
    clearInterval(intervalId);
    if (event.target.matches("li")) {
      var answer = event.target.textContent;
      if (answer === questions[questionIndex].answer) {
        questionResultEl.textContent = "Correct";
        correctCount++;
      } else {
        questionResultEl.textContent = "Incorrect";
        time = time - 2;
        timerEl.textContent = time;
      }
    }
    setTimeout(nextQuestion, 2000);
  }
  
  renderQuestion();
  optionListEl.addEventListener("click", checkAnswer);
  