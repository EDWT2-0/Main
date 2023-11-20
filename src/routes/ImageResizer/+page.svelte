<!-- src/routes/ImageResizer/+page.svelte -->

<script>
  let selectedFile = null;
  let resizedImage = null;
  let maxWidth = 300; // Adjust the maximum width for resizing

  function handleFileInput(event) {
    selectedFile = event.target.files[0];
  }

  async function resizeImage() {
    if (!selectedFile) return;

    const img = new Image();
    img.src = URL.createObjectURL(selectedFile);

    img.onload = () => {
      const aspectRatio = img.width / img.height;
      const newWidth = maxWidth;
      const newHeight = maxWidth / aspectRatio;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = newWidth;
      canvas.height = newHeight;
      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      const resizedDataUrl = canvas.toDataURL('image/jpeg');

      resizedImage = resizedDataUrl;
    };
  }
</script>

<main>
  <h1>Image Resizer</h1>
  <input type="file" accept="image/*" on:change={handleFileInput} />
  <button on:click={resizeImage}>Resize Image</button>

  {#if resizedImage}
    <h2>Resized Image</h2>
    <img src={resizedImage} alt="Resized Image" />
  {/if}
</main>

<style>
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

    input[type="file"],
    button {
      background-color: var(--button);
      color: white;
      border: none;
      border-radius: 5px;
      padding: 8px 12px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    input[type="file"]:hover,
    button:hover {
      background-color: darken(var(--button), 10%);
    }

    input[type="file"]:focus,
    button:focus {
      outline: none;
    }

    img {
      border: 1px solid var(--button);
      border-radius: 5px;
      margin-top: 15px;
    }
  }

  /* Other styles */
  main {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 20px;
  }

  h1 {
    font-size: 28px;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 24px;
    margin-top: 20px;
  }

  input[type="file"],
  button {
    font-size: 16px;
    margin: 10px;
  }
</style>