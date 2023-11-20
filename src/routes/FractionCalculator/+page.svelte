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
    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    input[type="number"],
    select,
    button {
      margin: 5px;
      padding: 8px;
      font-size: 16px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  
    select {
      width: 50px;
    }
  
    button {
      background-color: #3498db;
      color: #fff;
      cursor: pointer;
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
  