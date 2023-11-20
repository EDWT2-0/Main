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
    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    input[type="text"] {
      padding: 10px;
      font-size: 16px;
      width: 100%;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      background-color: #3498db;
      color: #fff;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: #2980b9;
    }
  
    p {
      margin-top: 10px;
      font-size: 18px;
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
  