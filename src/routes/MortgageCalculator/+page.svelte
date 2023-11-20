<script>
    let loanAmount = 100000; // Default loan amount
    let interestRate = 5.0; // Default interest rate (in percentage)
    let loanTerm = 30; // Default loan term (in years)
    let monthlyPayment = 0;
  
    const calculateMonthlyPayment = () => {
      // Convert annual interest rate to monthly rate
      const monthlyInterestRate = (interestRate / 100) / 12;
      // Convert loan term to months
      const totalPayments = loanTerm * 12;
      // Calculate monthly payment using the formula
      monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    }
  </script>
  
  <style>
    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    label {
      display: block;
      margin-bottom: 5px;
      font-size: 16px;
    }
  
    input[type="number"] {
      padding: 8px;
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
    <h1>Mortgage Calculator</h1>
    <label for="loanAmount">Loan Amount ($)</label>
    <input type="number" id="loanAmount" bind:value={loanAmount}>
    
    <label for="interestRate">Annual Interest Rate (%)</label>
    <input type="number" id="interestRate" bind:value={interestRate}>
    
    <label for="loanTerm">Loan Term (years)</label>
    <input type="number" id="loanTerm" bind:value={loanTerm}>
    
    <button on:click={calculateMonthlyPayment}>Calculate</button>
  
    {#if monthlyPayment > 0}
      <p>Monthly Payment: ${monthlyPayment.toFixed(2)}</p>
    {/if}
  </div>
  