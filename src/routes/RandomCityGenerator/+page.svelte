

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
    main {
      text-align: center;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      max-width: 400px;
      margin: 0 auto;
    }
  
    .input-group {
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center;
  margin: 10px;
}


    label {
      flex: 1;
      text-align: left;
      margin-right: 10px;
    }
  
    .result {
      margin-top: 20px;
    }
  
    h1 {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
    }
  
    button {
      background-color: #3498db;
      color: #fff;
      border: none;
      padding: 12px 24px;
      font-size: 18px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
    }
  
    button:hover {
      background-color: #2980b9;
    }
  
    input[type="text"] {
      font-size: 18px;
      margin-top: 10px;
      color: #333;
      padding: 8px;
      width: 100%;
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
  