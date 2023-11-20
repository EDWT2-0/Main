<!-- src/ScientificCalculator.svelte -->

<head>
  <title>Scientific Calculator - Everyday Web Things</title>
  <meta name="description" content="Perform advanced mathematical calculations with our online scientific calculator. Solve complex equations, trigonometry, and more." />
  <meta name="keywords" content="scientific calculator, online calculator, advanced math, complex equations, trigonometry" />
</head>



<script>

import GoogleAds from '../../components/GoogleAds.svelte';

  let expression = '';
  let result = '';

  function calculate() {
    try {
      result = eval(expression);
    } catch (error) {
      result = 'Error';
    }
  }

  function clear() {
    expression = '';
    result = '';
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
    margin-right: 10px;
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
  <h2>Scientific Calculator</h2>
  <input type="text" bind:value={expression} placeholder="Enter expression" />
  <button on:click={calculate}>Calculate</button>
  <button on:click={clear}>Clear</button>
  <p>Result: {result}</p>
</div>








