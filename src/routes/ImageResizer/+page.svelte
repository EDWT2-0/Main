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

  input[type="file"] {
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

  img {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
  }
</style>
