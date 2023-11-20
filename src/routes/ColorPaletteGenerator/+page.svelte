<!-- routes/colorpalette/+page.svelte -->

<script>
  let colors = generateColorPalette(5); // Generates a palette of 5 random colors

  // Function to generate a palette of random colors
  function generateColorPalette(numColors) {
    const letters = "0123456789ABCDEF";
    const palette = [];

    for (let i = 0; i < numColors; i++) {
      let color = "#";
      for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      palette.push(color);
    }

    return palette;
  }
</script>

<main>
  <h1>Color Palette Generator</h1>
  <div class="palette">
    {#each colors as color (color)}
      <div class="color-box" style="background-color: {color}"></div>
      <p>Hex: {color}</p>
    {/each}
  </div>
  <button on:click={() => colors = generateColorPalette(5)}>Generate New Palette</button>
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

  .palette {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .color-box {
    width: 100px;
    height: 100px;
    border: 2px solid #000;
    border-radius: 5px;
    margin: 10px;
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
  }

  button:hover {
    background-color: #2980b9;
  }
</style>
