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
      }
  
      textarea,
      p {
        background-color: var(--button);
        color: white;
        border: none;
        border-radius: 5px;
        padding: 8px 12px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
  
      textarea {
        min-height: 150px;
        resize: vertical;
      }
  
      textarea:focus {
        outline: none;
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
  
    main {
      text-align: center;
      margin-top: 20px;
    }
  
    h1 {
      font-size: 28px;
      margin-bottom: 15px;
    }
  
    textarea {
      width: 100%;
      font-size: 16px;
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
      box-sizing: border-box;
    }
  
    p {
      font-size: 18px;
      margin-bottom: 15px;
    }
  </style>