<script>
    let accommodation = 0;
    let transportation = 0;
    let food = 0;
    let activities = 0;
    let totalBudget = 0;
  
    const calculateTotalBudget = () => {
      // Calculate the total budget by summing up all expenses
      totalBudget = accommodation + transportation + food + activities;
    }
  </script>
  
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
  
      input[type="number"],
      button {
        background-color: var(--button);
        color: white;
        border: none;
        border-radius: 5px;
        padding: 8px 12px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
  
      input[type="number"]:focus,
      button:focus {
        outline: none;
      }
  
      button:hover {
        background-color: darken(var(--button), 10%);
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
  
    div {
      text-align: center;
      margin-top: 20px;
    }
  
    h1 {
      font-size: 28px;
      margin-bottom: 15px;
    }
  
    label {
      display: block;
      margin-bottom: 5px;
    }
  
    input[type="number"] {
      font-size: 16px;
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
    }
  
    button {
      font-size: 16px;
      padding: 8px 20px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    p {
      font-size: 18px;
      margin-bottom: 15px;
    }
  </style>
  
  <div>
    <h1>Travel Budget Planner</h1>
  
    <label for="accommodation">Accommodation Expenses ($)</label>
    <input type="number" id="accommodation" bind:value={accommodation}>
  
    <label for="transportation">Transportation Expenses ($)</label>
    <input type="number" id="transportation" bind:value={transportation}>
  
    <label for="food">Food Expenses ($)</label>
    <input type="number" id="food" bind:value={food}>
  
    <label for="activities">Activities Expenses ($)</label>
    <input type="number" id="activities" bind:value={activities}>
  
    <button on:click={calculateTotalBudget}>Calculate Total Budget</button>
  
    {#if totalBudget > 0}
      <p>Total Budget: ${totalBudget}</p>
    {/if}
  </div>
  