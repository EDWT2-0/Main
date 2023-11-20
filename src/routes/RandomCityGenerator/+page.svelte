

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Random City Generator</title>
  <meta name="description" content="Generate random cities for your world-building or creative projects. Customize the cities and explore diverse urban landscapes with our online city generator." />
  <meta name="keywords" content="random city generator, city names, city building, urban landscapes, world-building, creative projects" />
</head>



<script>
    let cityName = "";
    let randomCity = "";
  
    function generateRandomCity() {
      const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami", "San Francisco"];
      const randomIndex = Math.floor(Math.random() * cities.length);
      randomCity = cities[randomIndex];
    }
  </script>
  
  <style>
    /* Your CSS styles here */
    div {
      text-align: center;
      margin-top: 20px;
    }
  
    button {
      padding: 10px 20px;
      font-size: 16px;
      margin-bottom: 20px;
      cursor: pointer;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  
    p {
      font-size: 18px;
      margin-top: 10px;
    }
  </style>
  
  <main>
    <h1>Random City Generator</h1>
    <div class="input-group">
      <button on:click={generateRandomCity}>Generate Random City</button>
    </div>
    <div class="result">
      {#if randomCity}
        <p>Random City: {randomCity}</p>
      {/if}
    </div>
  </main>
  