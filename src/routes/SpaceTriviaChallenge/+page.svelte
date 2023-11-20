
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Space Trivia Challenges</title>
  <meta name="description" content="Test your knowledge with our online space trivia challenges. Engage in fun and educational quizzes covering various aspects of space and astronomy." />
  <meta name="keywords" content="space trivia, astronomy quizzes, educational challenges, space knowledge" />
</head>


<!-- SpaceTriviaChallenges.svelte -->

<script>
    let currentQuestion = 0;
    let score = 0;
  
    const triviaQuestions = [
      {
        question: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Mars', 'Saturn', 'Jupiter'],
        correctAnswer: 'Jupiter',
      },
      {
        question: 'Which spacecraft was the first to reach the moon?',
        options: ['Apollo 11', 'Sputnik 1', 'Voyager 1', 'Hubble Space Telescope'],
        correctAnswer: 'Sputnik 1',
      },
      {
        question: 'What is the closest galaxy to the Milky Way?',
        options: ['Andromeda', 'Triangulum', 'Orion', 'Sombrero'],
        correctAnswer: 'Andromeda',
      },
    ];
  
    function checkAnswer(selectedOption) {
      if (selectedOption === triviaQuestions[currentQuestion].correctAnswer) {
        score++;
      }
      nextQuestion();
    }
  
    function nextQuestion() {
      if (currentQuestion < triviaQuestions.length - 1) {
        currentQuestion++;
      } else {
        alert(`Quiz complete! Your score: ${score}/${triviaQuestions.length}`);
        // Optionally, you can reset the quiz here.
        // currentQuestion = 0;
        // score = 0;
      }
    }
  </script>
  
  <main>
    <h1>Space Trivia Challenges</h1>
    {#if currentQuestion < triviaQuestions.length}
      <div class="question">
        <h2>Question {currentQuestion + 1}</h2>
        <p>{triviaQuestions[currentQuestion].question}</p>
        <div class="options">
          {#each triviaQuestions[currentQuestion].options as option}
            <button on:click={() => checkAnswer(option)}>{option}</button>
          {/each}
        </div>
      </div>
    {:else}
      <p class="quiz-complete">Quiz Complete! Your Score: {score}/{triviaQuestions.length}</p>
    {/if}
  </main>
  
  <style>
    /* Add your CSS styles here */
    .question {
      margin-bottom: 20px;
    }
  
    .options {
      display: flex;
      flex-direction: column;
    }
  
    button {
      margin: 5px 0;
      padding: 10px;
      background-color: #007BFF;
      color: white;
      border: none;
      cursor: pointer;
    }
  
    .quiz-complete {
      font-size: 1.5rem;
      text-align: center;
    }
  </style>
  