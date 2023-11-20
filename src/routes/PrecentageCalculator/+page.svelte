<!-- src/PercentageCalculator.svelte -->


<head>
  <title>Percentage Calculator - Everyday Web Things</title>
  <meta name="description" content="Calculate percentages effortlessly with our online percentage calculator. Solve percentage problems, find discounts, and perform various percentage-related calculations." />
  <meta name="keywords" content="percentage calculator, online calculator, percentage problems, discount calculator, percentage calculations" />
</head>



<script>

import GoogleAds from '../../components/GoogleAds.svelte';


    let baseValue = '';
    let percentage = '';
    let result = '';
  
    function calculatePercentage() {
      const base = parseFloat(baseValue);
      const percent = parseFloat(percentage);
  
      if (!isNaN(base) && !isNaN(percent)) {
        result = ((base * percent) / 100).toFixed(2) + '%';
      } else {
        result = 'Invalid input';
      }
    }
  </script>
  


  <style>
    /* Body styles */
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  
    /* Calculator container styles */
    div {
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      padding: 20px;
      text-align: center;
    }
  
    /* Header styles */
    h2 {
      font-size: 24px;
      color: #333;
      margin-bottom: 20px;
    }
  
    /* Input styles */
    input {
      font-size: 18px;
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    /* Button styles */
    button {
      font-size: 20px;
      padding: 12px 24px;
      background-color: #007bff;
      color: #fff;
      border: 2px solid #007bff;
      border-radius: 10px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s;
    }
  
    button:hover {
      background-color: #0056b3;
      transform: scale(1.05);
    }
  
    /* Result styles */
    p {
      font-size: 20px;
      color: #555;
      margin-top: 20px;
    }
  </style>
  


  
  <div>
    <h2>Percentage Calculator</h2>
    <input type="text" bind:value={baseValue} placeholder="Enter base value" />
    <input type="text" bind:value={percentage} placeholder="Enter percentage" />
    <button on:click={calculatePercentage}>Calculate</button>
    <p>
      {#if result !== 'Invalid input'}
        {baseValue} is {percentage}% of {result}
      {:else}
        {result}
      {/if}
    </p>
  </div>
  