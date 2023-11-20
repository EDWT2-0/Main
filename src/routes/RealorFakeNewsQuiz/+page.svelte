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
    /* Add your CSS styles here (you can reuse the container style) */
    .container {
      text-align: center;
      margin: 20px;
      background-color: #f7f7f7;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    h1 {
      font-size: 28px;
      color: #333;
      margin-bottom: 10px;
    }
  
    h2 {
      font-size: 24px;
      color: #333;
      margin-top: 20px;
    }
  
    p {
      font-size: 20px;
      color: #555;
      margin-top: 20px;
    }
  
    label {
      font-size: 20px;
      color: #333;
      margin-right: 10px;
    }
  
    select, button {
      font-size: 18px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    select {
      margin-right: 10px;
    }
  
    button {
      background-color: #3498db;
      color: #fff;
      border: none;
      padding: 12px 24px;
      font-size: 20px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
      margin-top: 10px;
    }
  
    button:hover {
      background-color: #2980b9;
    }
  </style>
  