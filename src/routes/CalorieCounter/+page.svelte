
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
    /* CSS styles for the Calorie Counter page */
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
      margin: 10px 0;
    }
  
    input {
      font-size: 18px;
      padding: 8px;
      width: 100%;
      margin-top: 10px;
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
  