<script>
    let randomRecipe = '';
  
    const generateRandomRecipe = () => {
      // You can add your random recipe generation logic here
      // For demonstration purposes, I'll provide a simple example
      const recipes = [
        'Spaghetti Carbonara',
        'Chicken Tikka Masala',
        'Vegetable Stir-Fry',
        'Margherita Pizza',
        'Chocolate Cake',
      ];
      randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    }
  
    let metaTitle = "Random Recipe Generator";
    let metaDescription = "Get a random recipe to try for your next meal.";
    let metaKeywords = "recipe, cooking, food, random recipe, meal ideas";
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
  
    <button on:click={generateRandomRecipe}>Generate Recipe</button>
  
    {#if randomRecipe}
      <p>Random Recipe:</p>
      <p>{randomRecipe}</p>
    {/if}
  </div>
  