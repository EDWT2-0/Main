<!-- src/Countdown.svelte -->


<head>
  <title>Countdown Timer - Everyday Web Things</title>
  <meta name="description" content="Count down to important events with our online countdown timer. Set custom timers, track milestones, and anticipate special moments." />
  <meta name="keywords" content="countdown timer, event countdown, timer application, special occasions, time tracking" />
</head>



<script>

import GoogleAds from '../../components/GoogleAds.svelte';

    let seconds = 60; // Initial countdown time in seconds
    let isRunning = false;
    let interval;
  
    function startCountdown() {
      if (!isRunning && seconds > 0) {
        isRunning = true;
        interval = setInterval(() => {
          seconds--;
          if (seconds === 0) {
            stopCountdown();
          }
        }, 1000);
      }
    }
  
    function stopCountdown() {
      isRunning = false;
      clearInterval(interval);
    }
  
    function resetCountdown() {
      seconds = 60; // Reset to initial countdown time
      isRunning = false;
      clearInterval(interval);
    }
  </script>
  
  <style>
    /* Your CSS styles here */
    div {
      text-align: center;
      margin-top: 20px;
      font-family: Arial, sans-serif;
    }
  
    h2 {
      font-size: 24px;
      margin-bottom: 15px;
    }
  
    p {
      font-size: 18px;
      margin-top: 5px;
    }
  
    button {
      padding: 8px 16px;
      margin: 5px;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background-color: #3498db;
      color: white;
    }
  
    button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  </style>
  
  
  <div>
    <h2>Countdown Timer</h2>
    <p>Time Remaining: {seconds} seconds</p>
    <button on:click={startCountdown} disabled={isRunning}>Start</button>
    <button on:click={stopCountdown} disabled={!isRunning}>Stop</button>
    <button on:click={resetCountdown}>Reset</button>
  </div>
  