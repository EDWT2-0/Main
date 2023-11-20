
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stopwatch</title>
  <meta name="description" content="Measure time accurately with our online stopwatch. Perfect for tracking durations and managing your time efficiently." />
  <meta name="keywords" content="stopwatch, online stopwatch, time measurement, time tracking" />
</head>


<script>
  let isRunning = false;
  let elapsedTime = 0;
  let interval;
  let milliseconds = 0;

  function startStopwatch() {
    if (!isRunning) {
      isRunning = true;
      interval = setInterval(() => {
        milliseconds += 100;
        if (milliseconds >= 1000) {
          milliseconds = 0;
          elapsedTime += 1;
        }
      }, 100);
    } else {
      clearInterval(interval);
      isRunning = false;
    }
  }

  function resetStopwatch() {
    clearInterval(interval);
    isRunning = false;
    elapsedTime = 0;
    milliseconds = 0;
  }
</script>

<style>
  /* Style for the stopwatch container */
  .stopwatch {
    text-align: center;
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    margin: 0 auto;
  }

  /* Style for the stopwatch display */
  .display {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  
  .buttons button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
    font-size: 16px;
  }

  .buttons button:hover {
    background-color: #0056b3;
  }
</style>


<div class="stopwatch">
  <div class="display">
    <span>{String(Math.floor(elapsedTime / 3600)).padStart(2, '0')}:</span>
    <span>{String(Math.floor((elapsedTime % 3600) / 60)).padStart(2, '0')}:</span>
    <span>{String(elapsedTime % 60).padStart(2, '0')}:</span>
    <span>{String(Math.floor(milliseconds / 100)).padStart(2, '0')}</span>
  </div>
  <div class="buttons">
    <button on:click={startStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
    <button on:click={resetStopwatch}>Reset</button>
  </div>
</div>



