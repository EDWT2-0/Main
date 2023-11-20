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
  
      button {
        background-color: var(--button);
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
  
      button:hover {
        background-color: darken(var(--button), 10%);
      }
  
      p {
        font-size: 18px;
        color: var(--text);
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
      margin-top: 20px;
    }
  
    h1 {
      font-size: 28px;
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
  
    <button on:click={rollDice}>Roll Dice</button>
  
    {#if diceResult > 0}
      <p>Dice Result:</p>
      <p>{diceResult}</p>
    {/if}
  </div>
  