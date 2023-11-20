<!-- Calculator.svelte -->

<head>
  <title>Basic Calculator - Everyday Web Things</title>
  <meta name="description" content="Perform simple arithmetic calculations with ease using our online basic calculator. Add, subtract, multiply, and divide numbers instantly." />
  <meta name="keywords" content="basic calculator, online calculator, arithmetic calculator, addition, subtraction, multiplication, division" />
</head>


<script>

import GoogleAds from '../../components/GoogleAds.svelte';

  let displayValue = "";

  function handleClick(event) {
    const buttonValue = event.target.textContent;

    if (buttonValue === "=") {
      try {
        displayValue = eval(displayValue);
      } catch (error) {
        displayValue = "Error";
      }
    } else if (buttonValue === "C") {
      displayValue = "";
    } else {
      displayValue += buttonValue;
    }
  }
</script>

<div class="calculator">
  <div class="display">{displayValue}</div>
  <div class="buttons">
    <button on:click={handleClick}>1</button>
    <button on:click={handleClick}>2</button>
    <button on:click={handleClick}>3</button>
    <button on:click={handleClick}>+</button>
    <button on:click={handleClick}>4</button>
    <button on:click={handleClick}>5</button>
    <button on:click={handleClick}>6</button>
    <button on:click={handleClick}>-</button>
    <button on:click={handleClick}>7</button>
    <button on:click={handleClick}>8</button>
    <button on:click={handleClick}>9</button>
    <button on:click={handleClick}>*</button> <!-- Use * for multiplication -->
    <button on:click={handleClick}>0</button>
    <button on:click={handleClick} class="equals">=</button>
    <button on:click={handleClick} class="clear">C</button>
    <button on:click={handleClick}>/</button> <!-- Use / for division -->
  </div>
</div>


<style>
  .calculator {
    width: 300px;
    margin: 0 auto;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 20px;
  }

  .display {
    font-size: 32px;
    text-align: right;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  button {
    font-size: 24px;
    padding: 15px 20px;
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

  /* Styling for the "=" and "C" buttons */
  .equals {
    grid-column: span 2;
    background-color: #28a745;
    border: 2px solid #28a745;
  }

  .clear {
    background-color: #dc3545;
    border: 2px solid #dc3545;
  }
</style>


