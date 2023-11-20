
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
  
    /* Main container styles */
    main {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    /* Header styles */
    h1 {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
    }
  
    /* Countdown and holiday container styles */
    div {
      margin-top: 20px;
    }
  
    /* Days remaining styles */
    p {
      font-size: 20px;
      color: #555;
    }
  
    /* Major holidays styles */
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      border-top: 1px solid #ddd;
      padding-top: 10px;
    }
  
    /* Holiday name styles */
    p:nth-child(1) {
      font-weight: bold;
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
  