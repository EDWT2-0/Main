<!-- Projects.svelte -->

<script>
    // You can populate this with project data if needed
    const projects = [
      { name: "No Data", description: "Server connection error" },
      
    ];
  </script>
  
  <style>
    /* General styles */
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
      color: inherit;
    }
  
    /* Project cards */
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
  
    .project-card {
      padding: 20px;
      text-align: center;
      transition: transform 0.3s ease-in-out;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: #ffffff; /* Light mode profile background color */
      color: #333; /* Light mode text color */
    }
  
    body.dark-mode .project-card {
      background-color: #444; /* Dark mode profile background color */
      color: #f5f5f5; /* Dark mode text color */
    }
  
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
  
    .project-name {
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    .project-description {
      font-size: 18px;
      color: #888;
    }
  </style>
  
  <main>
    <h1>Our Projects</h1>
  
    <div class="projects">
      {#each projects as project}
        <div class="project-card">
          <h2 class="project-name">{project.name}</h2>
          <p class="project-description">{project.description}</p>
        </div>
      {/each}
    </div>
  </main>
  