<script>
    let numerator1 = 1;
    let denominator1 = 2;
    let numerator2 = 1;
    let denominator2 = 3;
    let resultNumerator = 0;
    let resultDenominator = 0;
    let operation = 'add';
  
    const calculateFraction = () => {
      const num1 = parseInt(numerator1);
      const den1 = parseInt(denominator1);
      const num2 = parseInt(numerator2);
      const den2 = parseInt(denominator2);
  
      if (operation === 'add') {
        resultNumerator = num1 * den2 + num2 * den1;
        resultDenominator = den1 * den2;
      } else if (operation === 'subtract') {
        resultNumerator = num1 * den2 - num2 * den1;
        resultDenominator = den1 * den2;
      } else if (operation === 'multiply') {
        resultNumerator = num1 * num2;
        resultDenominator = den1 * den2;
      } else if (operation === 'divide') {
        resultNumerator = num1 * den2;
        resultDenominator = den1 * num2;
      }
  
      const gcd = greatestCommonDivisor(resultNumerator, resultDenominator);
      resultNumerator /= gcd;
      resultDenominator /= gcd;
    }
  
    // Function to find the greatest common divisor (GCD)
    function greatestCommonDivisor(a, b) {
      if (b === 0) return a;
      return greatestCommonDivisor(b, a % b);
    }
  </script>
  
  <style>
    /* CSS styles for the Fraction Calculator */
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
  
    input {
      font-size: 18px;
      padding: 8px;
      width: 100%;
      margin-top: 10px;
    }
  
    select {
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
    <h1>Fraction Calculator</h1>
  
    <input type="number" id="numerator1" bind:value={numerator1}> /
    <input type="number" id="denominator1" bind:value={denominator1}>
  
    <select bind:value={operation}>
      <option value="add">+</option>
      <option value="subtract">-</option>
      <option value="multiply">*</option>
      <option value="divide">/</option>
    </select>
  
    <input type="number" id="numerator2" bind:value={numerator2}> /
    <input type="number" id="denominator2" bind:value={denominator2}>
  
    <button on:click={calculateFraction}>Calculate</button>
  
    {#if resultDenominator !== 0}
      <p>Result: {resultNumerator} / {resultDenominator}</p>
    {/if}
  </div>
  