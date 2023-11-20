<!-- Page.svelte -->

<script>
    let title = "Quiz Shield Extention";
    let description = "QuizShield comming soon to Firefox, Edge, Chrome.";
    let imageUrl1 = "Quiz1.png"; // Replace with the actual image file path
    let imageUrl2 = "quiz2.png"; // Replace with the actual image file path
    let link = "https://example.com"; // Replace with the actual URL
  </script>
  
  <main>
    <h1>{title}</h1>
    <p>{description}</p>
  
    <div class="content">
      <div class="image-container">
        <img src={imageUrl1} alt="Image 1" class="image" />
        <img src={imageUrl2} alt="Image 2" class="image" />
      </div>
      <div class="button-container">
        <a href={link} class="button-link">Comming Soon</a>
      </div>
    </div>
  </main>
  
  <style>
    /* Add your CSS styles here */
    main {
      text-align: center;
      padding: 20px;
    }
  
    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    p {
      font-size: 16px;
      color: #666;
      margin-bottom: 20px;
    }
  
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .image-container {
      display: flex;
      justify-content: center;
    }
  
    .image {
      max-width: 250px; /* Adjust the image size as needed */
      height: auto;
      margin: 0;
      padding: 0;
    }
  
    .button-container {
      margin-top: 30px; /* Increase the space between images and button */
    }
  
    .button-link {
      display: inline-block;
      padding: 10px 20px;
      background-color: #0077b6; /* Change to your desired color */
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      transition: background-color 0.3s;
    }
  
    .button-link:hover {
      background-color: #005b8f; /* Change to a different color on hover */
    }
  </style>
  