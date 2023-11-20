<!-- src/routes/WordCounter.svelte -->


<head>
<title>Word Counter - Count Words Online</title>
<meta name="description" content="Use our online Word Counter tool to count the number of words in your text. Simple and easy to use for all your word counting needs." />
<meta name="keywords" content="word counter, count words, online word counter, word count tool, word counting" />
</head>




<script>
    let text = "";
    
    let wordCount = 0;
    
    function countWords() {
      const words = text.trim().split(/\s+/).filter(word => word.length > 0);
      wordCount = words.length;
    }
  </script>
  
  <main>
    <h1>Word Counter</h1>
    
    <textarea bind:value={text} placeholder="Type or paste your text here" on:input={countWords}></textarea>
    
    {#if text.trim() !== ""}
      <p>Word Count: {wordCount}</p>
    {/if}
  </main>
  
  <style>
    /* Add your CSS styles here */
    main {
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
  
    textarea {
      width: 100%;
      min-height: 200px;
      padding: 10px;
      font-size: 18px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    p {
      font-size: 20px;
      color: #555;
      margin-top: 20px;
    }
  </style>
  