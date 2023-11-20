
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Space and Astronomy Facts</title>
  <meta name="description" content="Explore interesting facts about space and astronomy with our online collection of space facts. Expand your knowledge about the wonders of the universe." />
  <meta name="keywords" content="space facts, astronomy information, cosmic knowledge, universe facts" />
</head>


<script>
    const spaceFacts = [
      "The Sun is so massive that it contains 99.86% of the total mass of our solar system.",
      "The Milky Way galaxy is estimated to contain at least 100 billion stars.",
      "A day on Venus is longer than its year. Venus rotates very slowly on its axis.",
      "Jupiter's Great Red Spot is a giant storm that has been raging for at least 350 years.",
      "The Moon is gradually moving away from Earth at a rate of about 1.5 inches per year.",
      "Astronomers estimate that there are more stars in the universe than there are grains of sand on Earth.",
      "Neutron stars are incredibly dense. A teaspoon of neutron star material would weigh about 6 billion tons.",
      "The Hubble Space Telescope has captured images of galaxies that are billions of light-years away.",
      "Mars has the largest volcano in the solar system, Olympus Mons, which is about 13.6 miles high.",
      "Black holes are regions of space where gravity is so strong that nothing, not even light, can escape.",
    ];
  
    let randomFact = "";
  
    const generateRandomFact = () => {
      const randomIndex = Math.floor(Math.random() * spaceFacts.length);
      randomFact = spaceFacts[randomIndex];
    }
  
    // Initially, generate a random fact on component load
    generateRandomFact();
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
      margin-top: 20px;
    }
  
    h1 {
      font-size: 28px;
      margin-bottom: 15px;
    }
  
    p {
      font-size: 18px;
      margin-bottom: 15px;
    }
  
    button {
      font-size: 16px;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    button:focus {
      outline: none;
    }
  </style>
  
  <div>
    <h1>Space and Astronomy Facts</h1>
    <p>{randomFact}</p>
    <button on:click={generateRandomFact}>Generate Random Fact</button>
  </div>
  