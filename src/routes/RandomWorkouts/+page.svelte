
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
    /* CSS styles for the Random Workouts Generator page */
    div {
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
      margin: 10px 0;
    }
  
    button {
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
  
    button:hover {
      background-color: #2980b9;
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
  