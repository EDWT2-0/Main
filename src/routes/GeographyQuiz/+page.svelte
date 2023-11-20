


<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Geography Quiz</title>
  <meta name="description" content="Explore the world with our online geography quiz. Test your knowledge of countries, capitals, and geographical features in an engaging quiz format." />
  <meta name="keywords" content="geography quiz, world geography, online quiz, geographical knowledge" />
</head>



<script>
    let questionsPool = [
      { question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], correctAnswer: "Ottawa" },
      { question: "Which river is the longest in the world?", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], correctAnswer: "Nile" },
      { question: "In which continent is the Sahara Desert located?", options: ["Africa", "Asia", "South America", "North America"], correctAnswer: "Africa" },
      { question: "What is the highest mountain in the world?", options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"], correctAnswer: "Mount Everest" },
      { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Vietnam"], correctAnswer: "Japan" },
      { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correctAnswer: "Canberra" },
      { question: "Which ocean is the largest on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"], correctAnswer: "Pacific Ocean" },
      { question: "In which country is the Amazon Rainforest primarily located?", options: ["Brazil", "Peru", "Colombia", "Venezuela"], correctAnswer: "Brazil" },
      { question: "What is the currency of Japan?", options: ["Yuan", "Yen", "Won", "Ringgit"], correctAnswer: "Yen" },
      { question: "Which canal connects the Mediterranean Sea to the Red Sea?", options: ["Panama Canal", "Suez Canal", "Kiel Canal", "Erie Canal"], correctAnswer: "Suez Canal" },
      { question: "What is the smallest continent in the world?", options: ["Asia", "Europe", "Australia", "Antarctica"], correctAnswer: "Australia" },
      { question: "Which river flows through Egypt?", options: ["Amazon", "Nile", "Ganges", "Danube"], correctAnswer: "Nile" },
      { question: "In which country is the Great Barrier Reef located?", options: ["Australia", "Indonesia", "Philippines", "Maldives"], correctAnswer: "Australia" },
      { question: "What is the capital of Russia?", options: ["St. Petersburg", "Moscow", "Kiev", "Minsk"], correctAnswer: "Moscow" },
      { question: "Which country is known as the Land of the Midnight Sun?", options: ["Norway", "Sweden", "Finland", "Canada"], correctAnswer: "Norway" },
      { question: "What is the largest desert in the world?", options: ["Sahara Desert", "Gobi Desert", "Arabian Desert", "Antarctica Desert"], correctAnswer: "Antarctica Desert" },
      { question: "Which mountain range separates Europe and Asia?", options: ["Himalayas", "Andes", "Alps", "Ural Mountains"], correctAnswer: "Ural Mountains" },
      { question: "In which country is Mount Kilimanjaro located?", options: ["Kenya", "Uganda", "Tanzania", "Ethiopia"], correctAnswer: "Tanzania" },
      { question: "What is the capital of South Africa?", options: ["Cape Town", "Johannesburg", "Pretoria", "Durban"], correctAnswer: "Pretoria" },
      { question: "Which two countries are connected by the Strait of Gibraltar?", options: ["Spain and Morocco", "Italy and Tunisia", "Greece and Turkey", "France and Algeria"], correctAnswer: "Spain and Morocco" },
      { question: "What is the longest river in Europe?", options: ["Volga", "Danube", "Thames", "Seine"], correctAnswer: "Volga" },
      { question: "In which country is the city of Marrakech located?", options: ["Egypt", "Morocco", "Algeria", "Tunisia"], correctAnswer: "Morocco" },
      { question: "What is the capital of Mexico?", options: ["Cancun", "Guadalajara", "Monterrey", "Mexico City"], correctAnswer: "Mexico City" },
      { question: "Which sea is located between Europe and Africa?", options: ["Black Sea", "Red Sea", "Caspian Sea", "Mediterranean Sea"], correctAnswer: "Mediterranean Sea" },
      { question: "In which country is the city of Bangkok located?", options: ["Vietnam", "Thailand", "Cambodia", "Laos"], correctAnswer: "Thailand" },
      { question: "What is the capital of Argentina?", options: ["Buenos Aires", "Sao Paulo", "Lima", "Bogota"], correctAnswer: "Buenos Aires" },
      { question: "Which country is known as the Land of a Thousand Lakes?", options: ["Sweden", "Norway", "Finland", "Denmark"], correctAnswer: "Finland" },
      { question: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Luxor", "Giza"], correctAnswer: "Cairo" },
      { question: "Which island is known as the Pearl of the Indian Ocean?", options: ["Hawaii", "Maldives", "Sri Lanka", "Mauritius"], correctAnswer: "Sri Lanka" },
      { question: "What is the currency of Brazil?", options: ["Peso", "Real", "Sol", "Escudo"], correctAnswer: "Real" },
      { question: "In which country is the city of Istanbul located?", options: ["Greece", "Turkey", "Bulgaria", "Romania"], correctAnswer: "Turkey" },
      { question: "What is the smallest country in the world?", options: ["Monaco", "Liechtenstein", "San Marino", "Vatican City"], correctAnswer: "Vatican City" },
      { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Vietnam"], correctAnswer: "Japan" },
      { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correctAnswer: "Canberra" },
      { question: "Which ocean is the largest on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"], correctAnswer: "Pacific Ocean" },
      { question: "In which country is the Amazon Rainforest primarily located?", options: ["Brazil", "Peru", "Colombia", "Venezuela"], correctAnswer: "Brazil" },
      { question: "What is the currency of Japan?", options: ["Yuan", "Yen", "Won", "Ringgit"], correctAnswer: "Yen" },
      { question: "Which canal connects the Mediterranean Sea to the Red Sea?", options: ["Panama Canal", "Suez Canal", "Kiel Canal", "Erie Canal"], correctAnswer: "Suez Canal" },
      { question: "What is the smallest continent in the world?", options: ["Asia", "Europe", "Australia", "Antarctica"], correctAnswer: "Australia" },
      { question: "Which river flows through Egypt?", options: ["Amazon", "Nile", "Ganges", "Danube"], correctAnswer: "Nile" },
      { question: "In which country is the Great Barrier Reef located?", options: ["Australia", "Indonesia", "Philippines", "Maldives"], correctAnswer: "Australia" },
      { question: "What is the capital of Russia?", options: ["St. Petersburg", "Moscow", "Kiev", "Minsk"], correctAnswer: "Moscow" },
      { question: "Which country is known as the Land of the Midnight Sun?", options: ["Norway", "Sweden", "Finland", "Canada"], correctAnswer: "Norway" },
      { question: "What is the largest desert in the world?", options: ["Sahara Desert", "Gobi Desert", "Arabian Desert", "Antarctica Desert"], correctAnswer: "Antarctica Desert" },
      { question: "Which mountain range separates Europe and Asia?", options: ["Himalayas", "Andes", "Alps", "Ural Mountains"], correctAnswer: "Ural Mountains" },
      { question: "In which country is Mount Kilimanjaro located?", options: ["Kenya", "Uganda", "Tanzania", "Ethiopia"], correctAnswer: "Tanzania" },
      { question: "What is the capital of South Africa?", options: ["Cape Town", "Johannesburg", "Pretoria", "Durban"], correctAnswer: "Pretoria" },
      { question: "Which two countries are connected by the Strait of Gibraltar?", options: ["Spain and Morocco", "Italy and Tunisia", "Greece and Turkey", "France and Algeria"], correctAnswer: "Spain and Morocco" },
      { question: "What is the longest river in Europe?", options: ["Volga", "Danube", "Thames", "Seine"], correctAnswer: "Volga" },
      { question: "In which country is the city of Marrakech located?", options: ["Egypt", "Morocco", "Algeria", "Tunisia"], correctAnswer: "Morocco" },
      { question: "What is the capital of Mexico?", options: ["Cancun", "Guadalajara", "Monterrey", "Mexico City"], correctAnswer: "Mexico City" },
      { question: "Which sea is located between Europe and Africa?", options: ["Black Sea", "Red Sea", "Caspian Sea", "Mediterranean Sea"], correctAnswer: "Mediterranean Sea" },
      { question: "In which country is the city of Bangkok located?", options: ["Vietnam", "Thailand", "Cambodia", "Laos"], correctAnswer: "Thailand" },
      { question: "What is the capital of Argentina?", options: ["Buenos Aires", "Sao Paulo", "Lima", "Bogota"], correctAnswer: "Buenos Aires" },
      { question: "Which country is known as the Land of a Thousand Lakes?", options: ["Sweden", "Norway", "Finland", "Denmark"], correctAnswer: "Finland" },
      { question: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Luxor", "Giza"], correctAnswer: "Cairo" },
      { question: "Which island is known as the Pearl of the Indian Ocean?", options: ["Hawaii", "Maldives", "Sri Lanka", "Mauritius"], correctAnswer: "Sri Lanka" },
      { question: "What is the currency of Brazil?", options: ["Peso", "Real", "Sol", "Escudo"], correctAnswer: "Real" },
      { question: "In which country is the city of Istanbul located?", options: ["Greece", "Turkey", "Bulgaria", "Romania"], correctAnswer: "Turkey" },
      { question: "What is the smallest country in the world?", options: ["Monaco", "Liechtenstein", "San Marino", "Vatican City"], correctAnswer: "Vatican City" },

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
  :root {
    --background-light: #f9f9f9;
    --background-dark: #1f1f1f;
    --text-light: #333;
    --text-dark: #eee;
    --button-light: #0078d4;
    --button-dark: #009688;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: var(--background-dark);
      --text: var(--text-dark);
      --button: var(--button-dark);
    }

    /* Additional styling for dark mode */
    body {
      background-color: var(--background);
      color: var(--text);
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    main {
      text-align: center;
    }

    h1 {
      font-size: 28px;
      margin-bottom: 20px;
    }

    p {
      font-size: 16px;
      margin-bottom: 15px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      margin: 5px;
      cursor: pointer;
      background-color: var(--button);
      color: white;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #005a4d;
    }

    .options {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .option-button {
      margin: 5px;
    }

    .back-button {
      margin-top: 20px;
      background-color: #666;
    }

    .back-button:hover {
      background-color: #333;
    }

    .description {
      margin-top: 20px;
    }
  }

  /* Other styles for light mode */
  body {
    /* Add your light mode styles here */
  }

  /* Common styles for both light and dark modes */
  /* ... */

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
      <h1>General Geography Quiz</h1>
      <p>Select the number of questions:</p>
      <button on:click={() => { selectedQuestionCount = 5; startQuiz(); }}>5 Questions</button>
      <button on:click={() => { selectedQuestionCount = 10; startQuiz(); }}>10 Questions</button>
      <button on:click={() => { selectedQuestionCount = 20; startQuiz(); }}>20 Questions</button>
      <div class="description">
        <p>This quiz covers a variety of Geography topics from Middle school and High school.</p>
      </div>
    {/if}
  </main>