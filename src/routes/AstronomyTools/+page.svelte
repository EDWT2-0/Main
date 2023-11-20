<!-- AstronomyTools.svelte -->

<script>
    let selectedDate = new Date();
    let moonPhase = '';
  
    function calculateMoonPhase() {
      // You can implement a moon phase calculation function here
      // There are various algorithms available online for this purpose.
      // For simplicity, let's just say it's New Moon for now.
      moonPhase = 'New Moon';
    }
  
    calculateMoonPhase();
  </script>
  
  <main>
    <h1>Astronomy Tools</h1>
    <section>
      <h2>Star Map</h2>
      <p>Your star map content goes here.</p>
    </section>
    <section>
      <h2>Date and Time</h2>
      <label for="datePicker">Select Date and Time:</label>
      <input type="datetime-local" id="datePicker" bind:value={selectedDate} />
  
      <p>Selected Date and Time: {selectedDate.toLocaleString()}</p>
    </section>
    <section>
      <h2>Moon Phase</h2>
      <p>Moon Phase: {moonPhase}</p>
    </section>
  </main>
  
  <style>
    /* Add your CSS styles here */
    main {
      padding: 20px;
    }
  </style>
  