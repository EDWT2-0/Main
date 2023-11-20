

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
    /* Your CSS styles here */
    div {
      text-align: center;
      margin-top: 20px;
    }
  
    button {
      padding: 10px 20px;
      font-size: 16px;
      margin-bottom: 20px;
      cursor: pointer;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  
    p {
      font-size: 18px;
      margin-top: 10px;
    }
  </style>
  
  <div>
    <h1>Story Plot Generator</h1>
    <button on:click={generateStoryPlot}>Generate Story Plot</button>
    {#if storyGenerated}
      <p>{storyPlot}</p>
    {/if}
  </div>
  