

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Story Plot Generator</title>
  <meta name="description" content="Generate random story plots for your writing or creative projects. Spark inspiration with diverse and unique plot ideas using our online story plot generator." />
  <meta name="keywords" content="story plot generator, creative writing, plot ideas, writing prompts, story inspiration" />
</head>


<script>
    let storyPlot = "";
    let storyGenerated = false;
  
    const generateStoryPlot = () => {
      // Replace this with your story generation logic
      storyPlot = "Once upon a time, in a land far, far away...";
      storyGenerated = true;
    };
  </script>
  
  <style>
    /* CSS styles provided */
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
  
  <div>
    <h1>Story Plot Generator</h1>
    <button on:click={generateStoryPlot}>Generate Story Plot</button>
    {#if storyGenerated}
      <p>{storyPlot}</p>
    {/if}
  </div>
  