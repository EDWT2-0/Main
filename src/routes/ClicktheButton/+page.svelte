<script>
    let score = 0;
    let timeRemaining = 30; // Change this to set the game duration in seconds
    let isGameStarted = false;
  
    function startGame() {
      isGameStarted = true;
      score = 0;
      timeRemaining = 30; // Reset the game timer
      const timerInterval = setInterval(() => {
        timeRemaining--;
        if (timeRemaining === 0) {
          clearInterval(timerInterval);
          isGameStarted = false;
        }
      }, 1000);
    }
  
    function increaseScore() {
      if (isGameStarted) {
        score++;
      }
    }
  </script>
  
  <style>
    /* Add your CSS styles here */
  </style>
  
  <div class="game-container">
    <h1>Click the Button Game</h1>
    <p>Score: {score}</p>
    {#if !isGameStarted}
      <button on:click={startGame}>Start Game</button>
    {:else}
      <button on:click={increaseScore}>Click Me!</button>
      <p>Time Remaining: {timeRemaining} seconds</p>
    {/if}
  </div>
  