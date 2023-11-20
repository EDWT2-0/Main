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
    /* CSS styles for the Travel Budget Planner */
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
  