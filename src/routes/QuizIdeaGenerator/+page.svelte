<script>
    let quizCategory = '';
    let quizDifficulty = '';
  
    let quizIdeas = [];
  
    const generateQuizIdeas = () => {
      // You can add your quiz idea generation logic here
      // For demonstration purposes, I'll provide a simple example
      quizIdeas = [
        'General Knowledge Quiz',
        'Science Trivia',
        'Movie Quiz',
        'Geography Questions',
        'History Quiz',
      ];
    }
  
    let metaTitle = "Quiz Idea Generator";
    let metaDescription = "Generate quiz ideas based on category and difficulty.";
    let metaKeywords = "quiz, ideas, generator, category, difficulty";
  </script>
  
  


  

  <style>
   
/* Your existing CSS */
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

  /* Added style for dark mode dropdown options */
  select {
    color: var(--text-dark);
    background-color: var(--background);
  }
}

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
  padding: 40px;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 15px;
}

button {
  font-size: 16px;
  padding: 10px 20px;
  background-color: var(--button);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: darken(var(--button), 10%);
}

.insult {
  font-size: 24px;
  font-style: italic;
  margin-top: 20px;
}

/* Additional styling for the quiz elements */
div {
  text-align: center;
  margin-top: 40px;
}

label {
  margin-right: 10px;
}

select {
  font-size: 16px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}


  </style>
  
  
  
  
  


  
  <head>
    <title>{metaTitle}</title>
    <meta name="description" content="{metaDescription}" />
    <meta name="keywords" content="{metaKeywords}" />
  </head>
  
  <div>
    <h1>{metaTitle}</h1>
  
    <label for="category">Category:</label>
    <select id="category" bind:value={quizCategory}>
      <option value="">Select Category</option>
      <option value="General Knowledge">General Knowledge</option>
      <option value="Science">Science</option>
      <option value="Movies">Movies</option>
      <option value="Geography">Geography</option>
      <option value="History">History</option>
    </select>
  
    <label for="difficulty">Difficulty:</label>
    <select id="difficulty" bind:value={quizDifficulty}>
      <option value="">Select Difficulty</option>
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="Hard">Hard</option>
    </select>
  
    <button on:click={generateQuizIdeas}>Generate Ideas</button>
  
    {#if quizIdeas.length > 0}
      <p>Quiz Ideas:</p>
      <ul>
        {#each quizIdeas as idea (idea)}
          <li>{idea}</li>
        {/each}
      </ul>
    {/if}
  </div>
  