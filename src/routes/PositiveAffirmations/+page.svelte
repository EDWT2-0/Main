
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Positive Affirmations Generator</title>
  <meta name="description" content="Boost your positivity with our online positive affirmations generator. Receive daily affirmations to inspire and uplift your mindset." />
  <meta name="keywords" content="positive affirmations generator, daily affirmations, positivity, self-improvement" />
</head>


<script>
    const affirmations = [
      "I am confident and capable of achieving my goals.",
      "I radiate positivity and attract it into my life.",
      "I am deserving of love, happiness, and success.",
      "I am strong, and I can overcome any challenge that comes my way.",
      "I am at peace with my past and excited for my future.",
      "I am grateful for the abundance in my life.",
      "I am in control of my thoughts, and I choose to focus on the positive.",
      "I am surrounded by love and support from others.",
      "I am worthy of all the good things that come my way.",
      "I believe in myself and my abilities.",
    ];
  
    let randomAffirmation = null;
  
    const generateRandomAffirmation = () => {
      const randomIndex = Math.floor(Math.random() * affirmations.length);
      randomAffirmation = affirmations[randomIndex];
    }
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
      margin-bottom: 10px;
    }
  
    strong {
      font-weight: bold;
    }
  </style>
  
  
  <div>
    <h1>Positive Affirmations Generator</h1>
    <button on:click={generateRandomAffirmation}>Generate Positive Affirmation</button>
  
    {#if randomAffirmation}
      <p><strong>Affirmation:</strong></p>
      <p>{randomAffirmation}</p>
    {/if}
  </div>
  