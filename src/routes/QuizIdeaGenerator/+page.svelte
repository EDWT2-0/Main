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
    /* Your provided CSS styles */
    div {
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
  
    label {
      font-size: 20px;
      color: #333;
      margin-right: 10px;
    }
  
    select, input {
      font-size: 18px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
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
  
    p {
      font-size: 20px;
      margin-top: 20px;
      color: #555;
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
  