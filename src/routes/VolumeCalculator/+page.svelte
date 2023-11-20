<script>
    let length = 0;
    let width = 0;
    let height = 0;
    let volume = 0;
  
    const calculateVolume = () => {
      // You can add your volume calculation logic here
      volume = length * width * height;
    }
  
    let metaTitle = "Volume Calculator";
    let metaDescription = "Calculate the volume of a rectangular object with this simple volume calculator.";
    let metaKeywords = "volume calculator, rectangular volume, measurement, geometry";
  </script>
  
  <style>
    /* Your provided CSS styles */
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
  
    label {
      font-size: 20px;
      color: #333;
      margin-right: 10px;
    }
  
    input {
      font-size: 18px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
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
  
    p {
      font-size: 20px;
      margin-top: 20px;
      color: #555;
    }
  </style>
  
  <head>
    <title>{metaTitle}</title>
    <meta name="description" content="{metaDescription}" />
    <meta name="keywords" content="{metaKeywords}" />
  </head>
  
  <div>
    <h1>{metaTitle}</h1>
  
    <label for="length">Length:</label>
    <input type="number" id="length" bind:value={length} placeholder="Enter length">
  
    <label for="width">Width:</label>
    <input type="number" id="width" bind:value={width} placeholder="Enter width">
  
    <label for="height">Height:</label>
    <input type="number" id="height" bind:value={height} placeholder="Enter height">
  
    <button on:click={calculateVolume}>Calculate Volume</button>
  
    {#if volume > 0}
      <p>Volume:</p>
      <p>{volume} cubic units</p>
    {/if}
  </div>
  