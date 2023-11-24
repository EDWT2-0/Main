<!-- QuickMeditationSession.svelte -->
<script>
    let meditationTime = 0;
    let isMeditating = false;
    let interval;
  
    function startMeditation() {
      isMeditating = true;
      interval = setInterval(() => {
        meditationTime++;
      }, 1000);
    }
  
    function stopMeditation() {
      isMeditating = false;
      clearInterval(interval);
    }
  
    function resetMeditation() {
      isMeditating = false;
      clearInterval(interval);
      meditationTime = 0;
    }
  </script>
  
  <style>
    /* Your provided CSS styles here */
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
  
    /* Other styles for the component */
    main {
        text-align: center;
        padding: 20px;
    }
  
    h1 {
        font-size: 28px;
        margin-bottom: 20px;
        color: var(--text);
    }
  
    button {
        font-size: 16px;
        padding: 8px 12px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
  
    p {
        font-size: 18px;
        margin-bottom: 10px;
        color: var(--text);
    }
  </style>
  
  <main>
    <h1>Quick Meditation Session</h1>
    <p>Time: {meditationTime} seconds</p>
    
    {#if !isMeditating}
      <button on:click={startMeditation}>Start Meditation</button>
    {:else}
      <button on:click={stopMeditation}>Stop Meditation</button>
      <button on:click={resetMeditation}>Reset</button>
    {/if}
  </main>
  