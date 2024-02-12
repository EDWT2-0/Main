<script>
    let gifUrl = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWNqdGU5ZjJiemNxdmo0bmRhMGd6M3Vkb2x6aWdmdjMxamZkaWdwdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y6Sl42U3xEFkk/giphy.gif"; // Replace with your desired GIF
  </script>
  
  <div class="container">
    <img src={gifUrl} alt="Work in progress GIF" />
  
    <div class="content">
      <p>This page is under construction - Check back later!</p>
      <a href="/">Back to Home</a>
    </div>
  </div>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 50vh;
      font-family: sans-serif;
    }
  
    img {
      width: 50%;
      max-width: 300px;
    }
  
    /* Position content below the GIF with fixed spacing */
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2rem; /* Adjust spacing as needed */
    }
  
    /* Add space between text and button */
    p {
      font-size: 2rem;
      margin-bottom: 1rem; /* Add margin below text */
    }
  
    /* Button with rounded corners */
    a {
      background-color: #007bff;
      color: #fff;
      padding: 1rem 2rem;
      border: none;
      cursor: pointer;
      border-radius: 5px; /* Set desired corner radius */
    }
  </style>
  