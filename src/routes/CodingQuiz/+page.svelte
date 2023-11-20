

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coding Quiz</title>
  <meta name="description" content="Challenge your coding skills with our online coding quiz. Test your programming knowledge and problem-solving abilities in an interactive quiz format." />
  <meta name="keywords" content="coding quiz, programming quiz, online quiz, coding challenges" />
</head>



<script>
    let questionsPool = [
      // Easy
      { question: "What is the output of the following code: \nconsole.log(2 + '2' == '2' + 2);", options: ["true", "false", "TypeError", "NaN"], correctAnswer: "true" },
      { question: "Which of the following is a primitive data type in JavaScript?", options: ["Object", "Array", "String", "Function"], correctAnswer: "String" },
      { question: "What is the purpose of the 'return' statement in a function?", options: ["To end the function execution", "To return a value from the function", "Both A and B", "None of the above"], correctAnswer: "Both A and B" },
      { question: "What is the correct way to comment a single line of code in JavaScript?", options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "''' This is a comment '''"], correctAnswer: "// This is a comment" },
      { question: "What is the result of '5' + 3 in JavaScript?", options: ["8", "53", "TypeError", "NaN"], correctAnswer: "53" },
      { question: "Which keyword is used to declare variables in JavaScript?", options: ["var", "let", "const", "vars"], correctAnswer: "var" },
      { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High-level Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"], correctAnswer: "Hyper Text Markup Language" },
      { question: "What is the purpose of the CSS 'float' property?", options: ["To add a shadow to an element", "To move an element to the left or right", "To control the transparency of an element", "To change the font style of an element"], correctAnswer: "To move an element to the left or right" },
      { question: "Which symbol is used for single-line comments in most programming languages?", options: ["//", "/*", "#", "--"], correctAnswer: "//" },
      { question: "What is the purpose of the '++' operator in JavaScript?", options: ["To decrement a variable", "To increment a variable", "To concatenate strings", "To perform bitwise XOR"], correctAnswer: "To increment a variable" },
  
      // Medium
      { question: "Which of the following is not a valid JavaScript variable name?", options: ["_myVar", "$var", "1var", "my Var"], correctAnswer: "1var" },
      { question: "What is the purpose of the 'let' keyword in JavaScript?", options: ["To declare a constant variable", "To declare a block-scoped variable", "To declare a global variable", "To declare a function"], correctAnswer: "To declare a block-scoped variable" },
      { question: "What does the 'this' keyword refer to in JavaScript?", options: ["The current function", "The global object", "The object that owns the current code", "The prototype of an object"], correctAnswer: "The object that owns the current code" },
      { question: "What is the result of the following code: \nconsole.log('5' - 3);", options: ["2", "52", "TypeError", "NaN"], correctAnswer: "2" },
      { question: "What is the purpose of the 'bind' method in JavaScript?", options: ["To create a new array", "To bind a function to a specific context", "To check if a variable is defined", "To sort an array"], correctAnswer: "To bind a function to a specific context" },
      { question: "What is the purpose of the HTML 'DOCTYPE' declaration?", options: ["To define the document type and version of HTML", "To create a new HTML document", "To link external CSS files", "To define the structure of the HTML document"], correctAnswer: "To define the document type and version of HTML" },
      { question: "What is the result of the following code: \nconsole.log(typeof typeof 42);", options: ["number", "string", "undefined", "object"], correctAnswer: "string" },
      { question: "In CSS, what is the 'box-sizing' property used for?", options: ["To set the border size of an element", "To control the layout model of an element", "To define the size of the content box", "To specify the position of an element"], correctAnswer: "To control the layout model of an element" },
      { question: "What is the purpose of the 'Promise' object in JavaScript?", options: ["To handle asynchronous operations", "To create custom events", "To iterate over arrays", "To define custom classes"], correctAnswer: "To handle asynchronous operations" },
      { question: "What is the result of the following code: \nconsole.log([1, 2, 3] + [4, 5, 6]);", options: ["[1, 2, 3, 4, 5, 6]", "15", "123456", "TypeError"], correctAnswer: "123456" },
      { question: "What does the 'use strict' mode in JavaScript do?", options: ["Enforces a stricter parsing and error handling", "Allows the use of deprecated features", "Disables the use of classes", "Enforces a relaxed parsing mode"], correctAnswer: "Enforces a stricter parsing and error handling" },
      { question: "In JavaScript, what is the purpose of the 'map' method?", options: ["To create a new array with the results of calling a provided function on every element", "To modify the size of an array", "To remove elements from an array", "To concatenate two arrays"], correctAnswer: "To create a new array with the results of calling a provided function on every element" },
  
      // Hard
      { question: "What is a closure in JavaScript?", options: ["A built-in function", "A way to hide variables", "A combination of a function and the lexical environment within which that function was declared", "A data type in JavaScript"], correctAnswer: "A combination of a function and the lexical environment within which that function was declared" },
      { question: "What is the difference between 'let' and 'const' in JavaScript?", options: ["'let' is block-scoped, 'const' is not", "'const' is block-scoped, 'let' is not", "Both are block-scoped", "Neither is block-scoped"], correctAnswer: "'let' is block-scoped, 'const' is not" },
      { question: "What is the purpose of the 'async' keyword in JavaScript?", options: ["To define a function that returns a promise", "To indicate that a function is asynchronous and returns a promise", "To specify the order of execution of scripts", "To create an asynchronous event listener"], correctAnswer: "To indicate that a function is asynchronous and returns a promise" },
      { question: "What is the result of the following code: \nconsole.log('Hello' instanceof Object);", options: ["true", "false", "TypeError", "SyntaxError"], correctAnswer: "false" },
      { question: "What is the purpose of the CSS 'z-index' property?", options: ["To control the vertical stacking order of elements", "To set the font size of an element", "To specify the background color of an element", "To create a 3D effect on an element"], correctAnswer: "To control the vertical stacking order of elements" },
      { question: "In JavaScript, what is the purpose of the 'apply' method?", options: ["To call a function with a given 'this' value and arguments provided as an array", "To create a new array", "To concatenate two arrays", "To convert a string to uppercase"], correctAnswer: "To call a function with a given 'this' value and arguments provided as an array" },
      { question: "What is the result of the following code: \nconsole.log(2 ** 3);", options: ["8", "6", "2", "SyntaxError"], correctAnswer: "8" },
      { question: "In CSS, what does the 'transition' property do?", options: ["Adds a shadow to an element", "Defines the timing function to use for transitions", "Specifies the order of elements", "Changes the font size of an element"], correctAnswer: "Defines the timing function to use for transitions" },
      { question: "What is the purpose of the 'fetch' API in JavaScript?", options: ["To manipulate the DOM", "To make network requests and handle responses", "To create a new array", "To handle asynchronous operations"], correctAnswer: "To make network requests and handle responses" },
      { question: "What is the result of the following code: \nconsole.log('apple' < 'banana');", options: ["true", "false", "TypeError", "NaN"], correctAnswer: "true" },
      { question: "In HTML, what does the 'data-*' attribute do?", options: ["Specifies the color of an element", "Stores custom data private to the page or application", "Defines the structure of the document", "Sets the width of an element"], correctAnswer: "Stores custom data private to the page or application" },
      
     
    ];
  
    let questions = [];
    let currentQuestion = 0;
    let userAnswers = Array(questions.length).fill(null);
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let selectedQuestionCount = 10; // Default to 10 questions
    let quizStarted = false;
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    function startQuiz() {
    shuffleArray(questionsPool); // Shuffle the question pool
    questions = questionsPool.slice(0, selectedQuestionCount);
    currentQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    shuffleArray(questions[currentQuestion].options);
    quizStarted = true;
  }

  function handleAnswer(option) {
    userAnswers[currentQuestion] = option;

    // Move to the next question
    currentQuestion++;

    if (currentQuestion < questions.length) {
      shuffleArray(questions[currentQuestion].options);
    } else {
      // Quiz completed, you can handle the results here
      console.log("Quiz Completed:", userAnswers);

      // Calculate correct and incorrect answers
      for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].correctAnswer) {
          correctAnswers++;
        } else {
          incorrectAnswers++;
        }
      }
    }
  }

  function goBackToStart() {
    currentQuestion = 0;
    userAnswers = Array(questions.length).fill(null);
    correctAnswers = 0;
    incorrectAnswers = 0;
    quizStarted = false;
  }
</script>
  
  
  
  
  
  <style>
    main {
      text-align: center;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      max-width: 400px;
      margin: 0 auto;
    }
  
    h1 {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
    }
  
    p {
      margin: 10px 0;
    }
  
    button {
      background-color: #3498db;
      color: #fff;
      border: none;
      padding: 12px 24px;
      font-size: 18px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
      margin-top: 10px;
    }
  
    button:hover {
      background-color: #2980b9;
    }
  
    .question-container {
      text-align: left;
      margin-top: 20px;
    }
  
    .question {
      font-size: 18px;
      color: #333;
      margin-bottom: 10px;
    }
  
    .options {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    button.option-button {
      background-color: #3498db;
      color: #fff;
      border: none;
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
      margin-top: 10px;
      width: 100%;
    }
  
    button.option-button:hover {
      background-color: #2980b9;
    }
  
    .summary {
      margin-top: 20px;
      text-align: left;
    }
  
    .correct-answer {
      color: #4CAF50; /* Green */
    }
  
    .incorrect-answer {
      color: #FF5252; /* Red */
    }
  
    .back-button {
      background-color: #e74c3c;
      color: #fff;
      border: none;
      padding: 12px 24px;
      font-size: 18px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
      margin-top: 10px;
    }
  
    .back-button:hover {
      background-color: #c0392b;
    }
  
    .description {
      margin-top: 20px;
      font-size: 16px;
      color: #555;
    }
  </style>
  
  <main>
    {#if quizStarted}
      {#if currentQuestion < questions.length}
        <!-- Question Screen -->
        <h1>Question {currentQuestion + 1}</h1>
        <p>{questions[currentQuestion].question}</p>
        <div class="options">
          {#each questions[currentQuestion].options as option (option)}
            <button on:click={() => handleAnswer(option)} class="option-button">{option}</button>
          {/each}
        </div>
      {:else}
        <!-- Quiz Summary Screen -->
        <h1>Quiz Completed</h1>
        <p>Correct Answers: {correctAnswers}</p>
        <p>Incorrect Answers: {incorrectAnswers}</p>
        <h2>Incorrectly Answered Questions:</h2>
        {#each questions as { question, correctAnswer }, i}
          {#if userAnswers[i] !== correctAnswer}
            <p>{i + 1}. {question} - Correct Answer: {correctAnswer}</p>
          {/if}
        {/each}
        <button on:click={goBackToStart} class="back-button">Back to Start</button>
      {/if}
    {:else}
      <!-- Initial Screen -->
      <h1>General Coding Quiz</h1>
      <p>Select the number of questions:</p>
      <button on:click={() => { selectedQuestionCount = 5; startQuiz(); }}>5 Questions</button>
      <button on:click={() => { selectedQuestionCount = 10; startQuiz(); }}>10 Questions</button>
      <button on:click={() => { selectedQuestionCount = 20; startQuiz(); }}>20 Questions</button>
      <div class="description">
        <p>This quiz covers a Coding in general, questions range from Easy, Medium and Hard .</p>
      </div>
    {/if}
  </main>