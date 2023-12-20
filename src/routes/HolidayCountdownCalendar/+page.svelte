<!-- src/HolidayCountdownCalendar.svelte -->

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Holiday Countdown Calendar - Everyday Web Things</title>
  <meta name="description" content="Countdown to major holidays with our online holiday countdown calendar. See the days remaining for each holiday." />
  <meta name="keywords" content="holiday countdown, countdown calendar, major holidays, festive countdown" />
</head>

<script>
  import { onMount } from 'svelte';

  let holidays = [
    { name: 'New Year\'s Day', date: new Date('January 1, 2024') },
    { name: 'Valentine\'s Day', date: new Date('February 14, 2024') },
    { name: 'Easter', date: new Date('April 1, 2024') },
    { name: 'Independence Day', date: new Date('July 4, 2024') },
    { name: 'Halloween', date: new Date('October 31, 2024') },
    { name: 'Thanksgiving', date: new Date('November 28, 2024') },
    { name: 'Christmas', date: new Date('December 25, 2024') },
    { name: 'New Year\'s Eve', date: new Date('December 31, 2024') },
    { name: 'Labor Day', date: new Date('September 2, 2024') },
    { name: 'Memorial Day', date: new Date('May 27, 2024') },
    { name: 'Hanukkah', date: new Date('December 22, 2024') },
    { name: 'Diwali', date: new Date('October 24, 2024') },
    // Add more holidays as needed
  ];

  holidays = holidays.map(holiday => {
    const today = new Date();
    const daysRemaining = Math.ceil((holiday.date - today) / (1000 * 60 * 60 * 24));
    return { ...holiday, daysRemaining };
  });

  onMount(() => {
    // You can perform additional setup here if needed
  });
</script>



<style>
  /* Your CSS styles here */
  :root {
    --background-light: #f7f7f7;
    --background-dark: #333;
    --text-light: #333;
    --text-dark: #f7f7f7;
  }

  body {
    background-color: var(--background-light);
    color: var(--text-light);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--background-dark);
      color: var(--text-dark);
    }
  }

  main {
    text-align: center;
    padding: 20px;
  }

  h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 20px;
  }

  .holiday {
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>



<main>
  <div>
    <h1>Holiday Countdown Calendar</h1>

    <div class="grid">
      {#each holidays as { name, daysRemaining }}
        <div class="holiday">
          <p>{name}</p>
          <p>{daysRemaining} days</p>
        </div>
      {/each}
    </div>
  </div>
</main>


