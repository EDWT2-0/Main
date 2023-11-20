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
    /* CSS styles for the Mortgage Calculator */
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
  