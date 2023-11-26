<!-- ExtensionsPage.svelte -->
<script>
    let darkMode = false; // Toggle for dark mode
  
    // Sample extension data
    let extensions = [
      {
        name: 'Keepa - Amazon price tracker',
        image: 'https://lh3.googleusercontent.com/RKGxBnxDaoO1dUdDgyTpdJZ-aDleg_xw_GeiUMY_mp4WqxkhkFdn2QIG3Km1wuPLWA', 
        description: 'Detailed Price History charts for over 4 billion Amazon products. ',
        link: 'https://keepa.com/#!' 
      },


      {
        name: 'Todoist - Organization',
        image: 'data:image/png;base64,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', 
        description: 'task manager and to-do list app',
        link: 'https://todoist.com/home' 
      },
      // Add more extension objects as needed
    ];
  
    // Function to open the extension link in a new tab
    function openExtensionLink(link) {
      window.open(link, '_blank');
    }
  </script>



  
  <style>
    /* General styles */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5; /* Light mode background color */
      color: #333; /* Light mode text color */
    }
  
    body.dark-mode {
      background-color: #333; /* Dark mode background color */
      color: #f5f5f5; /* Dark mode text color */
    }
  
    main {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
  
    h1 {
      text-align: center;
      font-size: 32px;
      margin-bottom: 30px;
    }
  
    p {
      font-size: 18px;
      line-height: 1.6;
      color: inherit; /* Ensures text color adapts to the body's color */
    }
  
    /* Extension section */
    .extensions {
      display: grid;
      gap: 20px;
      /* On desktop, display 4 columns */
      grid-template-columns: repeat(4, 1fr);
    }
  
    .extension {
      padding: 20px;
      text-align: center;
      transition: transform 0.3s ease-in-out;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
    body.dark-mode .extension {
      background-color: #444; /* Dark mode extension background color */
    }
  
    .extension:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(255, 255, 255, 0.1);
    }
  
    .extension img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
      margin: 0 auto 15px;
      display: block;
      border: 3px solid #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    p.extension-description {
      font-size: 18px;
      color: #888;
      margin-bottom: 20px;
    }
  
    /* Media query for desktop screens */
    @media screen and (max-width: 1200px) {
      main {
        padding: 20px 40px; /* Adjust padding for smaller screens */
      }
  
      /* Change grid to 3 columns for smaller screens */
      .extensions {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  
    @media screen and (max-width: 900px) {
      /* Change grid to 2 columns for even smaller screens */
      .extensions {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  </style>
  
  <main>
    <h1>Useful Extensions</h1>
  
    
  
    <div class="extensions">
      {#each extensions as extension}
        <div class="extension {darkMode ? 'dark-mode' : ''}">
          <img class="profile-image" src={extension.image} alt={extension.name} />
          <h2>{extension.name}</h2>
          <p class="extension-description">{extension.description}</p>
          <a href={extension.link} target="_blank" rel="noopener noreferrer">
            <button>View Extension</button>
          </a>
        </div>
      {/each}
    </div>
  </main>
  