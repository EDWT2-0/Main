<!-- src/routes/PlaceholderImage.svelte -->


<head>
  <title>Dummy Image Generator - Everyday Web Things</title>
  <meta name="description" content="Generate placeholder images for your web projects with our online dummy image generator. Create custom-sized images for design and development." />
  <meta name="keywords" content="dummy image generator, placeholder images, random images, image placeholders, web development" />
</head>



<script>



  let imageSrc = '';

  // Function to generate a placeholder image
  function generatePlaceholderImage(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ddd'; // Gray background color
    ctx.fillRect(0, 0, width, height);

    // Text settings
    ctx.fillStyle = '#555';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Text to display (e.g., image dimensions)
    const text = `${width} x ${height}`;
    ctx.fillText(text, width / 2, height / 2);

    // Convert the canvas to a data URL
    imageSrc = canvas.toDataURL();
  }
</script>

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
          margin: 5px;
      }

      button:hover {
          background-color: darken(var(--button), 10%);
      }

      img {
          border: 1px solid var(--text);
          max-width: 100%;
          height: auto;
          margin-top: 10px;
      }
  }

  /* Other styles for the component */
  h2 {
      font-size: 24px;
      margin-bottom: 10px;
      color: var(--text);
  }

  div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
  }
</style>

<div>
  <h2>Placeholder Dummy Image</h2>
  <div>
    <button on:click={() => generatePlaceholderImage(400, 200)}>Generate 400x200</button>
    <button on:click={() => generatePlaceholderImage(800, 400)}>Generate 800x400</button>
  </div>
  {#if imageSrc}
    <img src={imageSrc} alt="Placeholder" />
  {/if}
</div>
