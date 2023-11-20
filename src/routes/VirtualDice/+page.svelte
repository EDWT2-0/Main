<script>
    let diceResult = 1;
  
    const rollDice = () => {
      // You can add your virtual dice rolling logic here
      diceResult = Math.floor(Math.random() * 6) + 1; // Simulating a 6-sided dice
    }
  
    let metaTitle = "Virtual Dice";
    let metaDescription = "Roll a virtual dice to get a random number between 1 and 6.";
    let metaKeywords = "virtual dice, random number, dice roll, game, chance";
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
  
    <button on:click={rollDice}>Roll Dice</button>
  
    {#if diceResult > 0}
      <p>Dice Result:</p>
      <p>{diceResult}</p>
    {/if}
  </div>
  