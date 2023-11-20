
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calorie Counter</title>
  <meta name="description" content="Track your daily caloric intake with our online calorie counter. Stay mindful of your nutrition and achieve your health and fitness goals." />
  <meta name="keywords" content="calorie counter, nutrition tracking, health and fitness, diet" />
</head>


<script>
    let breakfastCalories = 0;
    let lunchCalories = 0;
    let dinnerCalories = 0;
    let snacksCalories = 0;
    let totalCalories = 0;
  
    const calculateTotalCalories = () => {
      totalCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
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
      margin-right: 10px;
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
      padding: 8px 12px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    p {
      font-size: 18px;
      margin-bottom: 15px;
    }
  </style>
  
  <div>
    <h1>Calorie Counter</h1>
  
    <label for="breakfastCalories">Breakfast Calories</label>
    <input type="number" id="breakfastCalories" bind:value={breakfastCalories}>
  
    <label for="lunchCalories">Lunch Calories</label>
    <input type="number" id="lunchCalories" bind:value={lunchCalories}>
  
    <label for="dinnerCalories">Dinner Calories</label>
    <input type="number" id="dinnerCalories" bind:value={dinnerCalories}>
  
    <label for="snacksCalories">Snacks Calories</label>
    <input type="number" id="snacksCalories" bind:value={snacksCalories}>
  
    <button on:click={calculateTotalCalories}>Calculate Total Calories</button>
  
    {#if totalCalories > 0}
      <p>Total Calories: {totalCalories}</p>
    {/if}
  </div>
  