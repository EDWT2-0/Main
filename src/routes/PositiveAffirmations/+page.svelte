
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
    /* CSS styles for the Positive Affirmations Generator page */
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
  
    p {
      font-size: 20px;
      margin: 10px 0;
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
  </style>
  
  <div>
    <h1>Positive Affirmations Generator</h1>
    <button on:click={generateRandomAffirmation}>Generate Positive Affirmation</button>
  
    {#if randomAffirmation}
      <p><strong>Affirmation:</strong></p>
      <p>{randomAffirmation}</p>
    {/if}
  </div>
  