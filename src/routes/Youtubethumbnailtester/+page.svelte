<!-- ThumbnailTester.svelte -->

<script>
    let uploadedImage;
  
    function handleImageUpload(event) {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = () => {
          uploadedImage = reader.result;
        };
  
        reader.readAsDataURL(file);
      }
    }
  </script>
  
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
  
    .page-title {
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
  
    .thumbnail-container {
      width: 320px; /* Set the width to match YouTube thumbnail size for desktop */
      margin: 20px auto;
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
  
    .thumbnail-container-mobile {
      width: 100%; /* Full width for mobile */
      margin: 10px 0;
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
  
    img {
      max-width: 100%;
      height: auto;
    }
  
    @media screen and (max-width: 600px) {
      /* Adjust styles for mobile devices */
      .thumbnail-container {
        width: 100%; /* Set width to 100% for mobile */
      }
  
      .thumbnail-container-mobile {
        display: none; /* Hide mobile container on desktop */
      }
    }
  </style>
  
  <div class="container">
    <div class="page-title">
      We are using the most common Feed thumbnail sizes for desktop and mobile. The results may not be 100% accurate but close to it.
    </div>
  
    <div class="thumbnail-container">
      <input type="file" accept="image/*" on:change={handleImageUpload} />
      {#if uploadedImage}
        <img src={uploadedImage} alt="Uploaded Thumbnail" />
      {/if}
    </div>
  
    <div class="thumbnail-container-mobile">
      {#if uploadedImage}
        <img src={uploadedImage} alt="Uploaded Thumbnail (Mobile)" style="max-width: 280px; max-height: 180px;" />
      {/if}
    </div>
  </div>
  