<!-- HealthySnackIdeas.svelte -->
<script>
    // Sample data of healthy snack ideas
    const snackIdeas = [
      "Fresh fruits (e.g., apple slices, berries)",
      "Greek yogurt with honey and nuts",
      "Vegetable sticks with hummus",
      "Homemade trail mix",
      "Whole grain crackers with cheese",
      "Popcorn (air-popped)",
      "Rice cakes with almond butter",
      "Smoothies with spinach and fruit",
      "Boiled eggs",
      "Cottage cheese with pineapple"
    ];
  </script>
  
  <style>
    /* Your provided CSS styles here */
    :root {
        --background-light: #f7f7f7;
        --background-dark: #333;
        --text-light: #333;
        --text-dark: #f7f7f7;
        --button-light: #0078d4;
        --button-dark: #005ea2;
    }
  
    @media (prefers-color-scheme: dark) {
        :root {
            --background: var(--background-dark);
            --text: var(--text-dark);
            --button: var(--button-dark);
        }
  
        button {
            background-color: var(--button);
            color: white;
            border: none;
            border-radius: 5px;
            padding: 8px 12px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
  
        button:hover {
            background-color: darken(var(--button), 10%);
        }
    }
  
    /* Other styles for the component */
    main {
        text-align: center;
        padding: 20px;
    }
  
    h1 {
        font-size: 28px;
        margin-bottom: 20px;
        color: var(--text);
    }
  
    button {
        font-size: 16px;
        padding: 8px 12px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
  
    p {
        font-size: 18px;
        margin-bottom: 10px;
        color: var(--text);
    }
  </style>
  
  <main>
    <h1>Healthy Snack Ideas</h1>
    <div>
      {#each snackIdeas as idea}
        <p>{idea}</p>
      {/each}
    </div>
  </main>
  