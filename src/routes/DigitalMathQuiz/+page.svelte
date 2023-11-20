

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Math Quiz</title>
  <meta name="description" content="Sharpen your math skills with our online digital math quiz. Solve diverse math problems and enhance your mathematical knowledge in an interactive quiz format." />
  <meta name="keywords" content="math quiz, digital math, online quiz, mathematical knowledge" />
</head>



<script>
    let questionsPool = [
      { question: "What is the value of 2 × (4 + 7)?", options: ["18", "22", "26", "30"], correctAnswer: "22" },
      { question: "Solve for x in the equation 3x - 5 = 16.", options: ["5", "7", "8", "9"], correctAnswer: "7" },
      { question: "Calculate the area of a rectangle with length 8 cm and width 5 cm.", options: ["35 cm²", "40 cm²", "45 cm²", "50 cm²"], correctAnswer: "40 cm²" },
      { question: "Simplify the expression: 2³ × 3².", options: ["36", "54", "72", "108"], correctAnswer: "72" },
      { question: "Find the solution to the inequality: 2x + 7 > 15.", options: ["x > 4", "x > 5", "x > 6", "x > 7"], correctAnswer: "x > 4" },
      { question: "If a triangle has angles of 30°, 60°, and 90°, what is the measure of the right angle?", options: ["30°", "45°", "60°", "90°"], correctAnswer: "90°" },
      { question: "Evaluate the expression: 4! + 2.", options: ["22", "24", "26", "28"], correctAnswer: "26" },
      { question: "Solve the system of equations: 2x + y = 10, x - y = 2.", options: ["(x, y) = (4, 2)", "(x, y) = (3, 1)", "(x, y) = (2, 0)", "(x, y) = (1, -1)"], correctAnswer: "(x, y) = (4, 2)" },
      { question: "What is the value of √25?", options: ["2", "3", "4", "5"], correctAnswer: "5" },
      { question: "Calculate the perimeter of a square with side length 12 units.", options: ["36 units", "40 units", "44 units", "48 units"], correctAnswer: "48 units" },
      { question: "Simplify the expression: 3/4 × 5/6.", options: ["1/2", "5/8", "5/6", "15/24"], correctAnswer: "5/8" },
      { question: "Solve for x in the equation (x/3) = 7.", options: ["18", "21", "24", "27"], correctAnswer: "21" },
      { question: "Find the volume of a cylinder with radius 4 cm and height 10 cm.", options: ["80π cm³", "160π cm³", "320π cm³", "640π cm³"], correctAnswer: "160π cm³" },
      { question: "Determine the value of 2⁴ ÷ 2².", options: ["2", "4", "6", "8"], correctAnswer: "4" },
      { question: "Solve the inequality: -3x + 8 ≤ 5.", options: ["x ≥ 1", "x ≥ 2", "x ≥ 3", "x ≥ 4"], correctAnswer: "x ≥ 1" },
      { question: "If a circle has a radius of 6 units, what is its circumference?", options: ["6π units", "12π units", "18π units", "24π units"], correctAnswer: "12π units" },
      { question: "Evaluate the expression: √16 - √9.", options: ["1", "2", "3", "4"], correctAnswer: "1" },
      { question: "Calculate the area of a trapezoid with bases 6 cm and 8 cm, and height 5 cm.", options: ["35 cm²", "40 cm²", "45 cm²", "50 cm²"], correctAnswer: "35 cm²" },
      { question: "Simplify the expression: (2/3) + (1/2).", options: ["5/6", "4/5", "3/4", "7/6"], correctAnswer: "5/6" },
      { question: "Solve for x in the equation 5x - 3 = 2x + 8.", options: ["2", "3", "4", "5"], correctAnswer: "3" },
      { question: "Find the solution to the system of equations: 3x + 2y = 12, 2x - y = 5.", options: ["(x, y) = (3, 2)", "(x, y) = (2, 1)", "(x, y) = (1, 0)", "(x, y) = (0, -1)"], correctAnswer: "(x, y) = (3, 2)" },
      { question: "What is the value of sin(45°)?", options: ["0", "1/2", "√2/2", "1"], correctAnswer: "√2/2" },
      { question: "Calculate the perimeter of a rectangle with length 15 m and width 7 m.", options: ["38 m", "40 m", "42 m", "44 m"], correctAnswer: "44 m" },
      { question: "Simplify the expression: (3/5) × (4/9).", options: ["4/15", "8/27", "12/45", "16/63"], correctAnswer: "8/27" },
      { question: "Solve for x in the equation (2x/3) = 10.", options: ["15", "18", "21", "24"], correctAnswer: "15" },
      { question: "Determine the volume of a cone with radius 5 cm and height 8 cm.", options: ["80π cm³", "160π cm³", "320π cm³", "640π cm³"], correctAnswer: "160π cm³" },
      { question: "Evaluate the expression: 5! - 3!.", options: ["114", "116", "118", "120"], correctAnswer: "118" },
      { question: "Solve the inequality: 2x - 7 > 3x + 4.", options: ["x < -11", "x < -10", "x < -9", "x < -8"], correctAnswer: "x < -11" },
      { question: "If a parallelogram has a base of 10 cm and a height of 8 cm, what is its area?", options: ["60 cm²", "64 cm²", "80 cm²", "100 cm²"], correctAnswer: "80 cm²" },
      { question: "Find the value of cos(60°).", options: ["0", "1/2", "√2/2", "1"], correctAnswer: "1/2" },
      { question: "Calculate the area of a circle with radius 9 units.", options: ["81π units²", "162π units²", "243π units²", "324π units²"], correctAnswer: "81π units²" },
      { question: "Simplify the expression: (1/2) × (3/4).", options: ["1/4", "3/8", "3/4", "9/8"], correctAnswer: "3/8" },
      { question: "Solve for x in the equation 4(x - 2) = 3x + 5.", options: ["2", "3", "4", "5"], correctAnswer: "3" },
      { question: "Determine the value of 2⁵ ÷ 2³.", options: ["2", "4", "6", "8"], correctAnswer: "4" },
      { question: "Solve the system of equations: 2x + 3y = 15, 4x - y = 7.", options: ["(x, y) = (3, 2)", "(x, y) = (2, 1)", "(x, y) = (1, 0)", "(x, y) = (0, -1)"], correctAnswer: "(x, y) = (3, 2)" },
      { question: "What is the value of tan(30°)?", options: ["0", "1/√3", "1/√2", "√3/3"], correctAnswer: "1/√3" },
      { question: "Calculate the perimeter of an equilateral triangle with side length 6 cm.", options: ["12 cm", "15 cm", "18 cm", "21 cm"], correctAnswer: "18 cm" },
      { question: "Evaluate the expression: √36 + √25.", options: ["9", "10", "11", "12"], correctAnswer: "11" },
      { question: "Simplify the expression: 3 - (2/3).", options: ["7/3", "8/3", "9/3", "10/3"], correctAnswer: "7/3" },
      { question: "Solve for x in the equation 2(3x - 1) = 5.", options: ["1", "2", "3", "4"], correctAnswer: "2" },
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
      <h1>General Math Quiz</h1>
      <p>Select the number of questions:</p>
      <button on:click={() => { selectedQuestionCount = 5; startQuiz(); }}>5 Questions</button>
      <button on:click={() => { selectedQuestionCount = 10; startQuiz(); }}>10 Questions</button>
      <button on:click={() => { selectedQuestionCount = 20; startQuiz(); }}>20 Questions</button>
      <div class="description">
        <p>This quiz covers a variety of math topics from Middle school and High school.</p>
      </div>
    {/if}
  </main>