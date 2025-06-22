// script.js

const quizData = [
  { question: "What does JS stand for?", answers: ["Java Style", "JavaScript", "Just Script", "Java Setting"], correct: 1 },
  { question: "Which symbol is used for comments in JS?", answers: ["<!--", "//", "**", "##"], correct: 1 },
  { question: "Which company developed JavaScript?", answers: ["Microsoft", "Netscape", "Google", "Apple"], correct: 1 },
  { question: "Which keyword is used to declare a variable in JS?", answers: ["v", "let", "def", "int"], correct: 1 },
  { question: "What is the output of 'typeof null'?", answers: ["null", "object", "undefined", "boolean"], correct: 1 },
  { question: "What does DOM stand for?", answers: ["Document Object Model", "Data Object Method", "Desktop Object Manager", "None of these"], correct: 0 },
  { question: "How do you write a function in JavaScript?", answers: ["function:myFunc()", "function = myFunc()", "function myFunc()", "def myFunc()"], correct: 2 },
  { question: "Which operator is used to assign a value?", answers: ["=", "==", "===", ":="], correct: 0 },
  { question: "Which method adds a new item to an array?", answers: ["push()", "pop()", "shift()", "append()"], correct: 0 },
  { question: "Which method removes the last item of an array?", answers: ["pop()", "shift()", "remove()", "delete()"], correct: 0 },
  { question: "Which function converts a string to an integer?", answers: ["parseFloat()", "parseInt()", "Number()", "Int()"], correct: 1 },
  { question: "What is the correct syntax to log in console?", answers: ["console.print()", "log.console()", "console.log()", "print.console()"], correct: 2 },
  { question: "How can you add a comment in JS?", answers: ["<!-- comment -->", "# comment", "// comment", "** comment **"], correct: 2 },
  { question: "What keyword is used to loop over objects?", answers: ["for..in", "forEach", "for", "loop"], correct: 0 },
  { question: "Which event occurs when the user clicks an HTML element?", answers: ["onmouseclick", "onchange", "onclick", "onmouseover"], correct: 2 },
  { question: "Which method selects an element by ID?", answers: ["getElementByName", "getElementByClass", "getElementById", "querySelectorAll"], correct: 2 },
  { question: "Which of the following is a JavaScript framework?", answers: ["Laravel", "Vue", "Django", "Rails"], correct: 1 },
  { question: "How do you declare a constant in JS?", answers: ["let", "var", "const", "define"], correct: 2 },
  { question: "What is the result of 3 + '3'?", answers: ["6", "33", "Error", "NaN"], correct: 1 },
  { question: "How do you call a function named 'myFunc'?", answers: ["call myFunc", "myFunc()", "myFunc", "call(myFunc)"], correct: 1 },
  { question: "What is an array in JS?", answers: ["A type of loop", "A collection of elements", "A type of function", "A math operator"], correct: 1 },
  { question: "What does JSON stand for?", answers: ["Java Standard Output Network", "JavaScript Object Notation", "Java Syntax Object Notation", "None"], correct: 1 },
  { question: "What is the file extension of JS files?", answers: [".java", ".js", ".jv", ".jsx"], correct: 1 },
  { question: "Which symbol is used for strict equality?", answers: ["=", "==", "===", "!=="], correct: 2 },
  { question: "Which of these is NOT a JS data type?", answers: ["Boolean", "Undefined", "Float", "Symbol"], correct: 2 }
];

let currentQuestion = 0;

function showQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = `Q${currentQuestion + 1}: ${q.question}`;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(i);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].correct;
  if (selected === correct) {
    alert("✅ Correct!");
  } else {
    alert(`❌ Wrong! Correct answer: ${quizData[currentQuestion].answers[correct]}`);
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = "<h3>🎉 Quiz Completed!</h3><p>Great job! Refresh to play again.</p>";
  }
}

showQuestion();

function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then(res => res.json())
    .then(data => {
      const joke = data[0];
      document.getElementById("joke").innerText = `${joke.setup} — ${joke.punchline}`;
    })
    .catch(() => {
      document.getElementById("joke").innerText = "Couldn't fetch a joke, try again!";
    });
}


// --- Fetch API Data (Joke API) ---
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").innerText = `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      document.getElementById("joke").innerText = "Failed to fetch joke.";
    });
}
