

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flash Card Maker</title>
  <meta name="description" content="Create and study with customized flashcards using our online flash card maker. Enhance your learning experience with interactive study materials." />
  <meta name="keywords" content="flash card maker, study tools, flashcards, learning, study materials" />
</head>



<!-- routes/flashcards/+page.svelte -->

<script>
  let cards = [];
  let currentCard = 0;

  function addTextCard() {
    cards.push({ type: 'text', content: '' });
    currentCard = cards.length - 1;
  }

  function addImageCard() {
    cards.push({ type: 'image', content: '' });
    currentCard = cards.length - 1;
  }

  function removeCard(index) {
    cards.splice(index, 1);
    if (cards.length === 0) {
      currentCard = -1;
    } else if (currentCard >= cards.length) {
      currentCard = cards.length - 1;
    }
  }
</script>

<main>
  <h1>Flash Card Maker</h1>
  <div class="flashcards">
    {#each cards as card, index (card)}
    {#if card.type === 'text'}
      <div class="text-card">
        <textarea bind:value={card.content} placeholder="Enter text"></textarea>
      </div>
    {:else if card.type === 'image'}
      <div class="image-card">
        <input type="file" accept="image/*" />
        <img src={card.content} alt="Image Card" />
      </div>
    {/if}
    <button on:click={() => removeCard(index)}>Remove</button>
  {/each}
  </div>
  <div class="card-actions">
    <button on:click={addTextCard}>Add Text Card</button>
    <button on:click={addImageCard}>Add Image Card</button>
  </div>
</main>

<style>
  main {
    text-align: center;
    font-family: Arial, sans-serif;
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

  .flashcards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .text-card {
    margin: 10px;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 5px;
    min-width: 200px;
  }

  .text-card textarea {
    width: 100%;
  }

  .image-card {
    margin: 10px;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 5px;
    min-width: 200px;
  }

  .image-card input[type="file"] {
    width: 100%;
  }

  .image-card img {
    max-width: 100%;
    height: auto;
  }

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #2980b9;
  }

  .card-actions {
    margin-top: 10px;
  }
</style>
