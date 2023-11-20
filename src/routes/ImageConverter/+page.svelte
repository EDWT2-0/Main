<!-- src/routes/ImageConverter/+page.svelte -->

<script>
  let selectedFile = null;
  let conversionFormat = "jpg";
  let keepOriginalName = false;

  function handleFileInput(event) {
    selectedFile = event.target.files[0];
  }

  function convertImage() {
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;

      const anchor = document.createElement("a");
      anchor.href = dataUrl;
      anchor.download = keepOriginalName
        ? selectedFile.name
        : `converted_image.${conversionFormat}`;
      anchor.click();
    };

    reader.readAsDataURL(selectedFile);
  }
</script>

<main>
  <h1>Image Converter</h1>
  <input type="file" accept="image/*" on:change={handleFileInput} />

  <div>
    <label>
      Conversion Format:
      <select bind:value={conversionFormat}>
        <option value="jpg">JPG</option>
        <option value="png">PNG</option>
        <!-- Add more format options as needed -->
      </select>
    </label>
  </div>

  <div>
    <label>
      <input type="checkbox" bind:checked={keepOriginalName} />
      Keep Original Filename
    </label>
  </div>

  <button on:click={convertImage}>Convert Image</button>
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

  select {
    font-size: 16px;
    padding: 8px;
  }

  label {
    margin-right: 10px;
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
