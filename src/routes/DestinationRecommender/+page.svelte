<!-- DestinationRecommender.svelte -->

<script>
    let selectedCity = '';
    let destinations = [];
  
    const locationData = {
      'New York City': [
        { name: 'Statue of Liberty', description: 'Iconic landmark in New York City' },
        { name: 'Central Park', description: 'Famous park in Manhattan' },
      ],
      'Los Angeles': [
        { name: 'Hollywood Walk of Fame', description: 'Famous landmark in Los Angeles' },
        { name: 'Universal Studios Hollywood', description: 'Film studio and theme park' },
      ],
      'Chicago': [
        { name: 'Millennium Park', description: 'Prominent cultural center in Chicago' },
        { name: 'The Art Institute of Chicago', description: 'Art museum in Grant Park' },
      ],
      // Add more city data here
    };
  
    function recommendDestinations() {
      if (selectedCity) {
        destinations = locationData[selectedCity] || [];
      }
    }
  </script>
  
  <main>
    <h1>Destination Recommender</h1>
    <div class="location-selector">
      <label for="citySelector">Select City:</label>
      <select id="citySelector" bind:value={selectedCity}>
        <option value="">Select a city</option>
        {#each Object.keys(locationData) as city}
          <option value={city}>{city}</option>
        {/each}
      </select>
  
      <button on:click={recommendDestinations}>Recommend Destinations</button>
    </div>
  
    {#if destinations.length > 0}
      <h2>Recommended Destinations in {selectedCity}:</h2>
      <ul>
        {#each destinations as destination}
          <li>
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </li>
        {/each}
      </ul>
    {/if}
  </main>
  
  <style>
    /* Add your CSS styles here */
    .location-selector {
      margin-top: 20px;
    }
  
    select, button {
      margin-right: 10px;
    }
  </style>
  