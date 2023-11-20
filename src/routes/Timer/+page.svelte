
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Timer</title>
  <meta name="description" content="Set and countdown timers for various activities with our online timer. Stay organized and manage your time effectively." />
  <meta name="keywords" content="timer, countdown timer, time management, online timer" />
</head>

<script>
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let isRunning = false;
  let interval;

  function startTimer() {
    if ((hours > 0 || minutes > 0 || seconds > 0) && !isRunning) {
      isRunning = true;
      interval = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          stopTimer();
        } else {
          if (seconds === 0) {
            if (minutes === 0) {
              hours--;
              minutes = 59;
            } else {
              minutes--;
            }
            seconds = 59;
          } else {
            seconds--;
          }
        }
      }, 1000);
    }
  }

  function stopTimer() {
    clearInterval(interval);
    isRunning = false;
  }

  function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  function setPresetTime(presetMinutes) {
    resetTimer();
    minutes = presetMinutes;
  }
</script>


<style>
   .timer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .timer h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
  }

  .timer button {
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

  .timer button:hover {
    background-color: #2980b9;
  }

  .timer p {
    font-size: 20px;
    margin-top: 20px;
    color: #555;
  }

  .timer .controls button {
    margin-right: 10px;
  }

  .timer .manual-input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .timer .manual-input label {
    font-size: 18px;
    margin-right: 5px;
  }

  .timer .manual-input input {
    width: 40px;
    padding: 5px;
    font-size: 16px;
  }

  .timer .display {
    font-size: 24px;
    margin-top: 10px;
  }
</style>




<div class="timer">
  <div class="controls">
    <button on:click={() => setPresetTime(5)}>5 min</button>
    <button on:click={() => setPresetTime(10)}>10 min</button>
    <button on:click={() => setPresetTime(20)}>20 min</button>
    <button on:click={() => setPresetTime(30)}>30 min</button>
  </div>
  <div class="manual-input">
    <label for="hours">Hours:</label>
    <input type="number" id="hours" bind:value={hours} min="0" />
    <label for="minutes">Minutes:</label>
    <input type="number" id="minutes" bind:value={minutes} min="0" max="59" />
    <label for="seconds">Seconds:</label>
    <input type="number" id="seconds" bind:value={seconds} min="0" max="59" />
  </div>
  <div class="display">
    <span>{hours < 10 ? '0' + hours : hours}:</span>
    <span>{minutes < 10 ? '0' + minutes : minutes}:</span>
    <span>{seconds < 10 ? '0' + seconds : seconds}</span>
  </div>
  <div class="buttons">
    <button on:click={startTimer} disabled={isRunning}>Start</button>
    <button on:click={stopTimer} disabled={!isRunning}>Stop</button>
    <button on:click={resetTimer}>Reset</button>
  </div>
</div>







