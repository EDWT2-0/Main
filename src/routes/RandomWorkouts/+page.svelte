
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Random Workouts Generator</title>
  <meta name="description" content="Stay active and fit with our online random workouts generator. Discover new and exciting workout routines to keep your fitness routine fresh and engaging." />
  <meta name="keywords" content="workouts generator, fitness, exercise, workout routines" />
</head>


<script>
    const workouts = [
      {
        name: "Push-Ups",
        description: "Push-ups are a great upper body exercise. Start in a plank position with your hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push yourself back up.",
        recommendedSets: 3,
        recommendedReps: "10-15",
      },
      {
        name: "Squats",
        description: "Squats work your legs and lower body. Stand with your feet shoulder-width apart. Lower your body by bending your knees and pushing your hips back, then return to a standing position.",
        recommendedSets: 3,
        recommendedReps: "15-20",
      },
      {
        name: "Plank",
        description: "The plank is a core-strengthening exercise. Hold a push-up position with your body in a straight line from head to heels. Engage your core muscles and hold the position.",
        recommendedSets: 3,
        recommendedTime: "30 seconds",
      },
    ];
  
    let randomWorkout = null;
  
    const generateRandomWorkout = () => {
      const randomIndex = Math.floor(Math.random() * workouts.length);
      randomWorkout = workouts[randomIndex];
    }
  </script>
  
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
  
    div {
      text-align: center;
      margin-top: 20px;
    }
  
    h1 {
      font-size: 28px;
      margin-bottom: 15px;
    }
  
    p {
      font-size: 18px;
      margin-bottom: 10px;
    }
  
    strong {
      font-weight: bold;
    }
  </style>
  
  
  <div>
    <h1>Random Workouts Generator</h1>
    <button on:click={generateRandomWorkout}>Generate Random Workout</button>
  
    {#if randomWorkout}
      <p><strong>Workout: {randomWorkout.name}</strong></p>
      <p>{randomWorkout.description}</p>
      <p><strong>Recommended Sets:</strong> {randomWorkout.recommendedSets}</p>
      <p><strong>Recommended Reps or Time:</strong> {randomWorkout.recommendedReps || randomWorkout.recommendedTime}</p>
    {/if}
  </div>
  