<!-- TipCalculator.svelte -->

<script>
    let billAmount = 0;
    let tipPercentage = 15; // Default tip percentage
    let totalTip = 0;
  
    function calculateTip() {
      totalTip = (billAmount * tipPercentage) / 100;
    }
  </script>
  
  <div class="tip-calculator">
    <h1>Tip Calculator</h1>
    <label for="billAmount">Bill Amount:</label>
    <input type="number" id="billAmount" bind:value={billAmount} on:input={calculateTip} />
    
    <label for="tipPercentage">Tip Percentage:</label>
    <input type="number" id="tipPercentage" bind:value={tipPercentage} on:input={calculateTip} />
    
    <p>Total Tip: ${totalTip.toFixed(2)}</p>
    <button>Calculate Tip</button>
  </div>
  
  <style>
    .tip-calculator {
      font-family: Arial, sans-serif;
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 5px;
      width: 300px;
      margin: auto;
      text-align: center;
    }
  
    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    label {
      display: block;
      margin-bottom: 5px;
    }
  
    input[type="number"],
    button {
      margin-bottom: 10px;
      padding: 8px;
      font-size: 16px;
      border-radius: 5px;
      border: 1px solid #ccc;
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
      font-size: 18px;
      font-weight: bold;
    }
  </style>
  