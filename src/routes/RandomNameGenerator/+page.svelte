<!-- src/RandomNameGenerator.svelte -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Name Generator - Everyday Web Things</title>
    <meta name="description" content="Generate random names for various applications with our online name generator. Customize the options and generate random names quickly." />
    <meta name="keywords" content="random name generator, generate names, random data, name generation, random values" />
  </head>
  
  <script>
    import { onMount } from 'svelte';
  
    let randomName = '';
  
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
  
    function generateRandomName() {
      const randomIndex = Math.floor(Math.random() * names.length);
      randomName = names[randomIndex];
    }
  
    onMount(() => {
      generateRandomName();
    });
  </script>
  
  <main>
    <div>
      <h1>Random Name Generator</h1>
  
      <button on:click="{generateRandomName}">Generate Random Name</button>
  
      {#if randomName !== ''}
        <p>Random Name:</p>
        <p>{randomName}</p>
      {:else}
        <p>No name generated yet.</p>
      {/if}
    </div>
  </main>
  
  <style>
    /* Your CSS styles here */
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
      padding: 90px 20px; /* Added more vertical padding */
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
  