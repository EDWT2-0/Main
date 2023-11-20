

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Typing Speed Test</title>
  <meta name="description" content="Improve your typing skills and measure your typing speed with our online typing speed test. Enhance your productivity and accuracy with regular practice." />
  <meta name="keywords" content="typing speed test, typing skills, keyboard accuracy, productivity" />
</head>



<!-- TypingSpeedTest.svelte -->

<script>
    let textToType = "This is the text you need to type.";
    let userInput = "";
    let startTime;
    let endTime;
    let isTyping = false;
    let wpm = 0;
    let seconds = 0;
  
    function startTest() {
      if (!isTyping) {
        userInput = "";
        startTime = new Date().getTime();
        isTyping = true;
      }
    }
  
    function endTest() {
      if (isTyping) {
        endTime = new Date().getTime();
        isTyping = false;
  
        const elapsedTimeInSeconds = (endTime - startTime) / 1000;
        const wordCount = userInput.split(' ').filter(word => word.trim() !== '').length;
        wpm = Math.round((wordCount / elapsedTimeInSeconds) * 60);
        seconds = elapsedTimeInSeconds;
      }
    }
  </script>
  
  <div class="typing-test-container">
    <h1>Typing Speed Test</h1>
    <p>{textToType}</p>
    <textarea class="typing-input" bind:value={userInput} on:input={startTest} on:blur={endTest}></textarea>
    {#if isTyping}
      <p class="typing-status">Words per minute: ...</p>
      <p class="typing-status">Seconds: ...</p>
    {:else}
      <p class="typing-status">Words per minute: {wpm}</p>
      <p class="typing-status">Seconds: {seconds.toFixed(2)}</p>
    {/if}
  </div>
  
  <style>
    /* CSS styles */
    .typing-test-container {
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
      margin-top: 20px;
      color: #555;
    }
  
    .typing-input {
      font-size: 18px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    .typing-status {
      font-size: 20px;
      margin-top: 10px;
      color: #555;
    }
  </style>
  