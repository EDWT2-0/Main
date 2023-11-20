<!-- src/routes/RealOrFakeNewsQuiz.svelte -->



<head>
  <title>Real or Fake News Quiz</title>
  <meta name="description" content="Test your knowledge with the Real or Fake News Quiz. Can you distinguish between real and fake news headlines?" />
  <meta name="keywords" content="real or fake news, quiz, online quiz, news headlines" />
</head>




<script>

import GoogleAds from '../../components/GoogleAds.svelte';


    let questions = [
      {
        question: "NASA discovers a new Earth-like planet.",
        answer: "Real"
      },
      {
        question: "A giant asteroid will hit Earth next month.",
        answer: "Fake"
      },
      {
        question: "A new cure for the common cold has been found.",
        answer: "Real"
      },
      {
        question: "Aliens have been confirmed to be living among us.",
        answer: "Fake"
      },
      {
        question: "Eating chocolate can make you smarter.",
        answer: "Fake"
      },
      {
        question: "Scientists discover a new species of dinosaur.",
        answer: "Real"
      },
      {
        question: "A cure for all types of cancer is discovered.",
        answer: "Fake"
      },
      {
        question: "A UFO was spotted over a major city.",
        answer: "Real"
      },
      {
        question: "Eating garlic can ward off vampires.",
        answer: "Fake"
      },
      {
        question: "A new vaccine is developed for a deadly virus.",
        answer: "Real"
      },
      {
        question: "A man claims to have seen Bigfoot in the woods.",
        answer: "Fake"
      },
      {
        question: "Scientists find evidence of water on Mars.",
        answer: "Real"
      },
      {
        question: "A celebrity is abducted by aliens.",
        answer: "Fake"
      },
      {
        question: "A new type of renewable energy source is discovered.",
        answer: "Real"
      },
      {
        question: "A volcano erupts in a major city.",
        answer: "Fake"
      },
      {
        question: "A robot becomes self-aware and escapes from a lab.",
        answer: "Fake"
      },
      {
        question: "A meteor shower will be visible from Earth next week.",
        answer: "Real"
      },
      {
        question: "A giant squid is found in the ocean depths.",
        answer: "Real"
      },
      {
        question: "A billionaire plans to build a colony on Mars.",
        answer: "Real"
      },
      {
        question: "A psychic predicts the end of the world.",
        answer: "Fake"
      },
      {
        question: "A new type of superfood is discovered in the Amazon rainforest.",
        answer: "Real"
      },
      {
        question: "A time traveler from the future is caught on camera.",
        answer: "Fake"
      },
      {
        question: "A lost city is found in the Sahara Desert.",
        answer: "Real"
      },
      {
        question: "A man claims to have invented a perpetual motion machine.",
        answer: "Fake"
      },
      {
        question: "A new species of shark is discovered in the ocean.",
        answer: "Real"
      },
      {
        question: "A haunted house is up for sale in a quiet neighborhood.",
        answer: "Fake"
      },
      {
        question: "Scientists develop a pill that can cure all diseases.",
        answer: "Fake"
      },
      {
        question: "A mysterious crop circle appears in a farmer's field.",
        answer: "Fake"
      },
      {
        question: "A rare blue moon will occur next month.",
        answer: "Real"
      },
      {
        question: "A woman claims to have seen a ghost in her attic.",
        answer: "Fake"
      }
    ];
  
    let currentQuestion = 0;
    let score = 0;
    let showResult = false;
    let timer = null;
    let selectedQuestionCount = 5; // Default to 5 questions
    let quizStarted = false; // Track if the quiz has started
  
    function startQuiz() {
      // Initialize quiz settings
      currentQuestion = 0;
      score = 0;
      showResult = false;
  
      // Shuffle the questions for variety
      shuffleArray(questions);
  
      // Start the timer (adjust time limit as needed)
      const timeLimitSeconds = 300; // 5 minutes
      timer = setTimeout(() => {
        endQuiz();
      }, timeLimitSeconds * 1000);
  
      // Set the quiz as started
      quizStarted = true;
    }
  
    function endQuiz() {
      clearTimeout(timer);
      showResult = true;
    }
  
    function checkAnswer(answer) {
      if (answer === questions[currentQuestion].answer) {
        score += 1;
      }
  
      // Move to the next question or end the quiz
      if (currentQuestion < selectedQuestionCount - 1) {
        currentQuestion += 1;
      } else {
        endQuiz();
      }
    }
  
    // Shuffle array function (for shuffling quiz questions)
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  </script>
  
  <main>
    <h1>Real or Fake News Quiz</h1>
  
    {#if !showResult}
      {#if !quizStarted}
        <label for="questionCount">Select the number of questions:</label>
        <select id="questionCount" bind:value={selectedQuestionCount}>
          <option value="5">5 Questions</option>
          <option value="10">10 Questions</option>
          <option value="15">15 Questions</option>
        </select>
        <button on:click={startQuiz}>Start Quiz</button>
      {:else}
        <p>{questions[currentQuestion].question}</p>
        <button on:click={() => checkAnswer("Real")}>Real</button>
        <button on:click={() => checkAnswer("Fake")}>Fake</button>
      {/if}
    {:else}
      <p>Quiz over!</p>
      <p>Your Score: {score}/{selectedQuestionCount}</p>
      <h2>Answers:</h2>
      {#each questions.slice(0, selectedQuestionCount) as question, i}
        <p>{question.question} {question.answer === 'Real' ? '✔️' : '❌'}</p>
      {/each}
    {/if}
  </main>
  
  <style>
    :root {
      --background-light: #f7f7f7;
      --background-dark: #333;
      --text-light: #333;
      --text-dark: #f7f7f7;
      --button-light: #0078d4;
      --button-dark: #005ea2;
    }
  
    @media (prefers-color-scheme: dark) {
      :root {
        --background: var(--background-dark);
        --text: var(--text-dark);
        --button: var(--button-dark);
      }
  
      button {
        background-color: var(--button);
        color: white;
        border: none;
        border-radius: 5px;
        padding: 8px 12px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
  
      button:hover {
        background-color: darken(var(--button), 10%);
      }
  
      button:focus {
        outline: none;
      }
  
      select {
        background-color: var(--button);
        color: white;
        border: none;
        border-radius: 5px;
        padding: 8px 12px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
  
      select:focus {
        outline: none;
      }
    }
  
    /* Other styles */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: var(--background);
      color: var(--text);
    }
  
    main {
      text-align: center;
      margin-top: 20px;
    }
  
    h1 {
      font-size: 28px;
      margin-bottom: 15px;
    }
  
    select {
      font-size: 16px;
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
    }
  
    p {
      font-size: 18px;
      margin-bottom: 15px;
    }
  
    button {
      font-size: 16px;
      padding: 8px 12px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      margin-right: 10px;
    }
  </style>
  
  