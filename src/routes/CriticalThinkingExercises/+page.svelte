<!-- CriticalThinkingExercises.svelte -->
<script>
    let exercises = [
      {
        question: "What is the capital of France?",
        answer: "Paris"
      },
      {
        question: "How many continents are there?",
        answer: "7"
      },
      // Add more exercises as needed
    ];
  
    let currentExercise = 0;
    let userAnswer = '';
    let showAnswer = false;
  
    function checkAnswer() {
      showAnswer = true;
    }
  
    function nextExercise() {
      currentExercise = (currentExercise + 1) % exercises.length;
      userAnswer = '';
      showAnswer = false;
    }
  </script>
  
  <main>
    <h1>Critical Thinking Exercises</h1>
    {#if exercises.length > 0}
      <div>
        <p>{exercises[currentExercise].question}</p>
        <input bind:value={userAnswer} type="text" placeholder="Your Answer" />
        <br />
        <button on:click={checkAnswer}>Check Answer</button>
        {#if showAnswer}
          <p>Answer: {exercises[currentExercise].answer}</p>
          <button on:click={nextExercise}>Next Exercise</button>
        {/if}
      </div>
    {:else}
      <p>No exercises available.</p>
    {/if}
  </main>
  
  <style>
    /* Your CSS styles here */
    :root {
        --background-light: #f7f7f7;
        --background-dark: #333;
        --text-light: #333;
        --text-dark: #f7f7f7;
        --button-light: #0078d4;
        --button-dark: #005ea2;
    }
  
    /* Media query for dark mode */
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
    }
  
    /* Other styles for the component */
    main {
        text-align: center;
        padding: 20px;
        color: var(--text);
    }
  
    h1 {
        font-size: 28px;
        margin-bottom: 20px;
    }
  
    button {
        font-size: 16px;
        padding: 8px 12px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        background-color: var(--button-light);
        color: var(--text-light);
    }
  
    input {
        font-size: 16px;
        padding: 8px;
        margin-bottom: 10px;
    }
  
    p {
        font-size: 18px;
        margin-bottom: 10px;
    }
  </style>
  