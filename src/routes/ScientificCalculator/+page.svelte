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
  <h2>Scientific Calculator</h2>
  <input type="text" bind:value={expression} placeholder="Enter expression" />
  <button on:click={calculate}>Calculate</button>
  <button on:click={clear}>Clear</button>
  <p>Result: {result}</p>
</div>








