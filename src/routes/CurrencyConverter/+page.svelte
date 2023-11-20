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
    /* Your provided CSS styles */
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
      color: #333;
      margin-right: 10px;
    }
  
    input {
      font-size: 18px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    select {
      font-size: 18px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
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
  