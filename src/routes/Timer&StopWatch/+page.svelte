<!-- TimerStopwatch.svelte -->
<script>
    import { onDestroy, onMount } from 'svelte';
  
    let isTimer = true;
    let time = 0;
    let interval;
  
    function start() {
      interval = setInterval(() => {
        if (isTimer) {
          time++;
        } else {
          time += 10; // For stopwatch, increase time by 10 milliseconds
        }
      }, isTimer ? 1000 : 10);
    }
  
    function stop() {
      clearInterval(interval);
      interval = null;
    }
  
    function reset() {
      clearInterval(interval);
      time = 0;
      interval = null;
    }
  
    function switchMode() {
      clearInterval(interval);
      isTimer = !isTimer;
      reset();
      start();
    }
  
    onMount(() => {
      start();
    });
  
    onDestroy(() => {
      clearInterval(interval);
    });
  </script>
  
  <style>
    /* Your CSS styles here */
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
      margin: 5px;
      background-color: var(--button-light);
      color: white;
    }
  
    button:hover {
      background-color: var(--button-dark);
    }
  
    p {
      font-size: 18px;
      margin-bottom: 10px;
      color: var(--text);
    }
  </style>
  
  <main>
    <h1>{isTimer ? 'Timer' : 'Stopwatch'}</h1>
    {#if isTimer}
      <p>Seconds: {time}</p>
    {:else}
      <p>Milliseconds: {time}</p>
    {/if}
    <button on:click={stop}>Stop</button>
    <button on:click={start} disabled={interval !== null}>Start</button>
    <button on:click={reset}>Reset</button>
    <button on:click={switchMode}>Switch to {isTimer ? 'Stopwatch' : 'Timer'}</button>
  </main>
  