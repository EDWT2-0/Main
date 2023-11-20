<script>
    let generatedName = '';
  
    const generateName = () => {
      // You can add your name generation logic here
      // For demonstration purposes, I'll provide a simple example
      const firstName = ["John", "Emily", "Michael", "Sophia", "Daniel"];
      const lastName = ["Smith", "Johnson", "Brown", "Lee", "Davis"];
      generatedName = `${firstName[Math.floor(Math.random() * firstName.length)]} ${lastName[Math.floor(Math.random() * lastName.length)]}`;
    }
  
    let metaTitle = "Name Generator";
    let metaDescription = "Generate random names for characters, projects, and more.";
    let metaKeywords = "name, generator, random names, character names, project names";
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
  
    <button on:click={generateName}>Generate Name</button>
  
    {#if generatedName}
      <p>Generated Name:</p>
      <p>{generatedName}</p>
    {/if}
  </div>
  