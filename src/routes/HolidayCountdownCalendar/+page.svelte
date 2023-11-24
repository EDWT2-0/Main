
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Digital Countdown Calendar</title>
  <meta name="description" content="Countdown to important events and dates with our digital countdown calendar. Stay excited and organized as you anticipate upcoming milestones." />
  <meta name="keywords" content="countdown calendar, digital calendar, event countdown, milestone tracker" />
</head>

<script>
    // Define the target date for the end of the year
    const yearEnd = new Date(new Date().getFullYear() + 1, 0, 1);
    
    // Define an array of major holidays and their labels
    const holidays = [
      { name: 'New Year\'s Day', date: new Date(new Date().getFullYear(), 0, 1) },
      // Add more holidays here...
    ];
  
    // Calculate the time remaining in milliseconds
    let timeRemaining = yearEnd - new Date();
  
    // Function to calculate the time remaining for a specific holiday
    function calculateTimeRemainingForHoliday(holiday) {
      return holiday.date - new Date();
    }
  </script>
  
  <style>
    /* Your CSS styles here */
    main {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
      font-family: Arial, sans-serif;
    }
  
    div {
      text-align: center;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      margin: 10px;
      width: 40%;
    }
  
    h1 {
      font-size: 24px;
      margin-bottom: 15px;
    }
  
    p {
      font-size: 18px;
      margin-top: 5px;
    }
  </style>
  
  
  <main>
    <div>
      <h1>Time Remaining in the Year</h1>
      <p>{Math.floor(timeRemaining / (1000 * 60 * 60 * 24))} days</p>
    </div>
  
    <div>
      <h1>Countdown to Major Holidays</h1>
      {#each holidays as holiday}
        <div>
          <p>{holiday.name}</p>
          <p>{Math.floor(calculateTimeRemainingForHoliday(holiday) / (1000 * 60 * 60 * 24))} days</p>
        </div>
      {/each}
    </div>
  </main>
  