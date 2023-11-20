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
  
    <button on:click={generateRandomRecipe}>Generate Recipe</button>
  
    {#if randomRecipe}
      <p>Random Recipe:</p>
      <p>{randomRecipe}</p>
    {/if}
  </div>
  