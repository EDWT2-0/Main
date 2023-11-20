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
  