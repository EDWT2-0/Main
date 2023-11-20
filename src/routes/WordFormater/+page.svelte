<!-- WordFormatter.svelte -->

<script>
  let inputText = '';
  let formattedText = '';

  function formatWords() {
    // Split the input text into words
    const words = inputText.split(' ');

    // Format each word (e.g., capitalize them)
    const formattedWords = words.map(word => word.toUpperCase());

    // Join the formatted words back into a string
    formattedText = formattedWords.join(' ');
  }
</script>

<main>
  <input type="text" bind:value={inputText} placeholder="Enter words" />
  <button on:click={formatWords}>Format</button>
  <p>Formatted Text: {formattedText}</p>
</main>

<style>
  /* Add your CSS styles here */
</style>
