<script>
    let amount = 1;
    let fromCurrency = 'USD';
    let toCurrency = 'EUR';
    let convertedAmount = 0;
  
    const convertCurrency = () => {
      // You can add your currency conversion logic here
      // For demonstration purposes, I'll provide a simple example
      const exchangeRates = {
        USD: 1.0,
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110.0,
      };
      convertedAmount = (amount * exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(2);
    }
  
    let metaTitle = "Currency Converter";
    let metaDescription = "Convert currency from one currency to another with ease.";
    let metaKeywords = "currency converter, exchange rates, currency exchange, currency conversion";
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
    select,
    button {
      background-color: var(--button);
      color: white;
      border: none;
      border-radius: 5px;
      padding: 8px 12px;
      cursor: pointer;
      transition: background-color 0.3s ease;
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
    margin-top: 40px;
  }

  h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  label {
    margin-right: 10px;
  }

  input[type="number"],
  select {
    font-size: 16px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  button {
    font-size: 16px;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  p {
    font-size: 18px;
    margin-bottom: 15px;
  }
</style>


  <head>
    <title>{metaTitle}</title>
    <meta name="description" content="{metaDescription}" />
    <meta name="keywords" content="{metaKeywords}" />
  </head>
  
  <div>
    <h1>{metaTitle}</h1>
  
    <label for="amount">Amount:</label>
    <input type="number" id="amount" bind:value={amount} placeholder="Enter amount">
  
    <label for="fromCurrency">From Currency:</label>
    <select id="fromCurrency" bind:value={fromCurrency}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="JPY">JPY</option>
    </select>
  
    <label for="toCurrency">To Currency:</label>
    <select id="toCurrency" bind:value={toCurrency}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="JPY">JPY</option>
    </select>
  
    <button on:click={convertCurrency}>Convert</button>
  
    {#if convertedAmount > 0}
      <p>Converted Amount:</p>
      <p>{convertedAmount} {toCurrency}</p>
    {/if}
  </div>
  