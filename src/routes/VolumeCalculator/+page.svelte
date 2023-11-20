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
    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    label {
      display: block;
      margin-bottom: 5px;
      font-size: 16px;
    }
  
    input[type="number"] {
      padding: 8px;
      font-size: 16px;
      width: 100%;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      background-color: #3498db;
      color: #fff;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: #2980b9;
    }
  
    p {
      margin-top: 10px;
      font-size: 18px;
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
  