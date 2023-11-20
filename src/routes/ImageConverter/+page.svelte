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
    select,
    input[type="checkbox"],
    button {
      background-color: var(--button);
      color: white;
      border: none;
      border-radius: 5px;
      padding: 8px 12px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    input[type="file"]:focus,
    select:focus,
    input[type="checkbox"]:focus,
    button:focus {
      outline: none;
    }

    button:hover {
      background-color: darken(var(--button), 10%);
    }
  }

  /* Other styles */
  main {
    text-align: center;
    margin-top: 20px;
  }

  h1 {
    font-size: 28px;
    margin-bottom: 15px;
  }

  input[type="file"],
  select {
    font-size: 16px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  input[type="checkbox"] {
    margin-right: 5px;
    vertical-align: middle;
  }

  button {
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
