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
    /* Your provided CSS styles */
    .tip-calculator {
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
  
    label {
      font-size: 18px;
      margin: 10px;
    }
  
    input {
      font-size: 18px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin: 10px;
    }
  
    p {
      font-size: 20px;
      margin-top: 20px;
      color: #555;
    }
  </style>
  