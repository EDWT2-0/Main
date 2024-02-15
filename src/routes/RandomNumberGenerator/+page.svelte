<!-- src/RandomNumberGenerator.svelte -->

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Random Number Generator - Everyday Web Things</title>
  <meta name="description" content="Generate random numbers for various applications with our online number generator. Customize the range and generate random data quickly." />
  <meta name="keywords" content="random number generator, generate numbers, random data, number generation, random values" />
</head>



<script>


  import { onMount } from 'svelte';

  let randomNumber = '';

  function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
  }

  onMount(() => {
    generateRandomNumber();
  });
</script>

<main>
  <div>
    <h1>Random Number Generator</h1>

    <button on:click="{generateRandomNumber}">Generate Random Number</button>

    {#if randomNumber !== ''}
      <p>Random Number:</p>
      <p>{randomNumber}</p>
    {:else}
      <p>No number generated yet.</p>
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
