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
    /* Body styles */
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  
    /* Countdown container styles */
    div {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    /* Header styles */
    h2 {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
    }
  
    /* Countdown timer styles */
    p {
      font-size: 20px;
      color: #555;
    }
  
    /* Button styles */
    button {
      background-color: #3498db;
      color: #fff;
      border: none;
      padding: 12px 24px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
      margin: 10px;
    }
  
    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  
    button:hover {
      background-color: #2980b9;
    }
  </style>
  
  
  <div>
    <h2>Countdown Timer</h2>
    <p>Time Remaining: {seconds} seconds</p>
    <button on:click={startCountdown} disabled={isRunning}>Start</button>
    <button on:click={stopCountdown} disabled={!isRunning}>Stop</button>
    <button on:click={resetCountdown}>Reset</button>
  </div>
  