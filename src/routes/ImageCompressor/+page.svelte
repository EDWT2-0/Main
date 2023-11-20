<!-- ImageCompressor.svelte -->

<script>
    import { onMount } from "svelte";
  
    let originalImage = null;
    let compressedImage = null;
    let compressionQuality = 0.7;
  
    async function compressImage() {
      if (originalImage) {
        const compressed = await ImageCompressor(originalImage, {
          quality: compressionQuality,
        });
        compressedImage = compressed;
      }
    }
  
    function handleFileInput(event) {
      const file = event.target.files[0];
      if (file) {
        originalImage = file;
        compressImage();
      }
    }
  
    onMount(() => {
      // Initialize the component.
    });
  </script>
  
  <style>
    /* Add your styles here */
  </style>
  
  <div>
    <input type="file" accept="image/*" on:change={handleFileInput} />
    <br />
    <label for="quality">Compression Quality:</label>
    <input
      type="range"
      id="quality"
      min="0.1"
      max="1"
      step="0.1"
      bind:value={compressionQuality}
    />
    <br />
    {#if originalImage}
      <h2>Original Image:</h2>
      <img src={URL.createObjectURL(originalImage)} alt="Original" />
    {/if}
    {#if compressedImage}
      <h2>Compressed Image:</h2>
      <img src={URL.createObjectURL(compressedImage)} alt="Compressed" />
    {/if}
  </div>
  