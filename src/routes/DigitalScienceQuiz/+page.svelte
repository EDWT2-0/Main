

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Science Quiz</title>
  <meta name="description" content="Test your knowledge with our online digital science quiz. Explore various scientific topics and challenge yourself with engaging quiz questions." />
  <meta name="keywords" content="science quiz, digital science, online quiz, scientific knowledge" />
</head>



<script>
    let questionsPool = [
      { question: "What is the powerhouse of the cell?", options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum"], correctAnswer: "Mitochondria" },
      { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], correctAnswer: "Au" },
      { question: "In which year did Christopher Columbus reach the Americas?", options: ["1492", "1500", "1600", "1700"], correctAnswer: "1492" },
      { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correctAnswer: "Paris" },
      { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Mars", "Venus"], correctAnswer: "Jupiter" },
      { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"], correctAnswer: "William Shakespeare" },
      { question: "What is the chemical symbol for sodium?", options: ["Na", "K", "Li", "Ca"], correctAnswer: "Na" },
      { question: "In which layer of the Earth's atmosphere does weather occur?", options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], correctAnswer: "Troposphere" },
      { question: "What is the function of the nucleus in a cell?", options: ["Control center", "Energy production", "Food storage", "Cell movement"], correctAnswer: "Control center" },
      { question: "Which planet is known as the 'Red Planet'?", options: ["Mars", "Venus", "Jupiter", "Saturn"], correctAnswer: "Mars" },
      { question: "What is the process by which plants make their own food?", options: ["Photosynthesis", "Respiration", "Transpiration", "Digestion"], correctAnswer: "Photosynthesis" },
      { question: "What is the largest mammal on Earth?", options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"], correctAnswer: "Blue Whale" },
      { question: "What is the basic unit of life?", options: ["Cell", "Molecule", "Atom", "Organism"], correctAnswer: "Cell" },
      { question: "How many bones are there in the adult human body?", options: ["206", "208", "210", "212"], correctAnswer: "206" },
      { question: "What is the speed of light in a vacuum?", options: ["299,792 kilometers per second", "300,000 kilometers per second", "299,458 kilometers per second", "300,458 kilometers per second"], correctAnswer: "299,792 kilometers per second" },
      { question: "What is Newton's first law of motion?", options: ["An object at rest stays at rest, and an object in motion stays in motion with the same speed and in the same direction, unless acted on by an unbalanced external force.", "Force equals mass times acceleration.", "For every action, there is an equal and opposite reaction.", "None of the above."], correctAnswer: "An object at rest stays at rest, and an object in motion stays in motion with the same speed and in the same direction, unless acted on by an unbalanced external force." },
      { question: "What gas do plants absorb from the atmosphere during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: "Carbon Dioxide" },
      { question: "Who is known as the father of modern physics?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"], correctAnswer: "Albert Einstein" },
      { question: "What is the main function of the respiratory system?", options: ["Transporting oxygen to cells", "Digesting food", "Pumping blood", "Filtering waste"], correctAnswer: "Transporting oxygen to cells" },
      { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "O2", "NaCl"], correctAnswer: "H2O" },
      { question: "In the periodic table, what element has the symbol 'O'?", options: ["Oxygen", "Gold", "Osmium", "Oganesson"], correctAnswer: "Oxygen" },
      { question: "What is the process by which water changes from a liquid to a gas?", options: ["Evaporation", "Condensation", "Melting", "Freezing"], correctAnswer: "Evaporation" },
      { question: "What is the Earth's primary source of energy?", options: ["Fossil fuels", "Wind", "Sun", "Nuclear energy"], correctAnswer: "Sun" },
      { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"], correctAnswer: "Albert Einstein" },
      { question: "What is the function of the mitochondria in a cell?", options: ["Energy production", "Cell movement", "Food storage", "Control center"], correctAnswer: "Energy production" },
      { question: "What is the boiling point of water in Celsius?", options: ["0°C", "100°C", "50°C", "200°C"], correctAnswer: "100°C" },
      { question: "What is the conservation of energy law?", options: ["Energy cannot be created or destroyed, only transformed from one form to another.", "Energy is created and destroyed in all processes.", "Energy can only be conserved in closed systems.", "Energy is always lost as heat in any process."], correctAnswer: "Energy cannot be created or destroyed, only transformed from one form to another." },
      { question: "What is the process by which plants release water vapor into the atmosphere?", options: ["Transpiration", "Condensation", "Evaporation", "Precipitation"], correctAnswer: "Transpiration" },
      { question: "What is the pH scale used to measure?", options: ["Temperature", "Acidity or basicity", "Pressure", "Density"], correctAnswer: "Acidity or basicity" },
      { question: "What is the force that attracts two masses toward each other?", options: ["Gravity", "Magnetism", "Friction", "Tension"], correctAnswer: "Gravity" },
      { question: "What is the chemical symbol for iron?", options: ["Fe", "Au", "Ag", "Cu"], correctAnswer: "Fe" },
      { question: "What is the process by which rocks are broken down into smaller particles?", options: ["Erosion", "Deposition", "Weathering", "Transportation"], correctAnswer: "Weathering" },
      { question: "What is the function of the ribosomes in a cell?", options: ["Protein synthesis", "Energy production", "Cell movement", "Food storage"], correctAnswer: "Protein synthesis" },
      { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Mars", "Venus"], correctAnswer: "Jupiter" },
      { question: "What is the primary function of the nervous system?", options: ["Communication", "Transportation", "Digestion", "Respiration"], correctAnswer: "Communication" },
      { question: "What is the chemical formula for glucose?", options: ["C6H12O6", "H2O", "CO2", "O2"], correctAnswer: "C6H12O6" },
      { question: "What is the process by which plants respond to light?", options: ["Phototropism", "Geotropism", "Hydrotropism", "Thigmotropism"], correctAnswer: "Phototropism" },
      { question: "Who developed the laws of motion?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"], correctAnswer: "Isaac Newton" },
      { question: "What is the process by which an organism changes over time?", options: ["Evolution", "Adaptation", "Photosynthesis", "Reproduction"], correctAnswer: "Evolution" },
      { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Cu"], correctAnswer: "Au" },
      { question: "What is the function of the endoplasmic reticulum in a cell?", options: ["Protein synthesis", "Energy production", "Cell movement", "Food storage"], correctAnswer: "Protein synthesis" },
      { question: "What is the chemical symbol for carbon?", options: ["C", "Ca", "Co", "Cu"], correctAnswer: "C" },
      { question: "What is the process by which rocks are formed from pre-existing rocks?", options: ["Metamorphism", "Sedimentation", "Compaction", "Melting"], correctAnswer: "Metamorphism" },
      { question: "Who proposed the heliocentric model of the solar system?", options: ["Nicolas Copernicus", "Galileo Galilei", "Johannes Kepler", "Isaac Newton"], correctAnswer: "Nicolas Copernicus" },
      
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
      <h1>General Science Quiz</h1>
      <p>Select the number of questions:</p>
      <button on:click={() => { selectedQuestionCount = 5; startQuiz(); }}>5 Questions</button>
      <button on:click={() => { selectedQuestionCount = 10; startQuiz(); }}>10 Questions</button>
      <button on:click={() => { selectedQuestionCount = 20; startQuiz(); }}>20 Questions</button>
      <div class="description">
        <p>This quiz covers a variety of science topics from Middle school and High school.</p>
      </div>
    {/if}
  </main>