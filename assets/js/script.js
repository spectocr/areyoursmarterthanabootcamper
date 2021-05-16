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

  var questionIndex = 0;
  var correctCount = 0;
  
  var time = 60;

  var intervalId;

 
 

  // attempting to fix line 70s bug.
  console.log(questions); // this looks like the array is populating fine.
  console.log(questions[questionIndex].question); // this is working now by moving vars up above (qi,cc,t,ii)
  
  var questionEl = document.querySelector("#question-title"); //spelled with "-title" in index, whoops. -title
  var questionEl2 = document.querySelector("#questions");
  var optionListEl = document.querySelector("#choices"); // 
  var hideStart = document.querySelector("#startquiz"); // hide start
  console.log(hideStart);
  var questionResultEl = document.querySelector("#question-right-wrong"); ////BYYYYEE errors. We're error free right meow.
  var timerEl = document.querySelector("#timer");
  var startQuizBtn = document.querySelector("#start-quiz");
  var StartTimerTxt = document.querySelector("#timerTxt");
  var choices = questions[questionIndex].choices;
  var choicesLenth = choices.length;
  console.log(questionEl.textContent);
  optionListEl.innerHTML = "";
  questionResultEl.innerHTML = "";


  var startQuiz = function() {
    updateTime()
    hideStart.className = "hide";
    questionEl2.className = "";
    questionEl.innerHTML = questionEl.textContent
    console.log(questionIndex);
  };

  function endQuiz() {
    clearInterval(intervalId);
    var body = document.body;
    body.innerHTML = "Game over, You scored " + correctCount;
    body.className = "center"; // adding class to center this.
  }
  // this gets called on page load, need to disable this.
  function updateTime() {
    timerEl.textContent = time;
    intervalId = setInterval(updateTime, 1000);
    time--;
    if (time <= 0) {
      endQuiz();
    }
  }
  
  function renderQuestion() {
    questionEl.textContent = questions[questionIndex].question;

    // empty choices div so that the following code will past the NEW choices. 
    
    for (var i = 0; i < choicesLenth; i++) {

        var questionListItem = document.createElement("li");
        questionListItem.textContent = choices[i];
        //questionListItem.classList = "bg-primary text-purple";
        optionListEl.append(questionListItem);
      }
    }
    
    // if (time == 0) {
    //   updateTime();
    //   //return;
    // }
  
    
    //bug - debbuger states "uncaught type error 'cannot set property 'textContent' of null"

  

  

  
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
        questionEl.innerHTML = "";
        optionListEl.innerHTML = "";
        //main.innerHTML = clear(main);
        nextQuestion();
        console.log(questionIndex);

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
  startQuizBtn.addEventListener("click", startQuiz);
  console.log(startQuizBtn);
  