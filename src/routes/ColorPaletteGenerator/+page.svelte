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
  /* Your CSS styles here */
  .palette {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .color-box {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #333;
  }
</style>
