<head>
	<title>Random</title>
	<meta name="description" content="Explore a variety of useful web tools at Everyday Web Things. From generators, calculators, games and more, discover a world of online utilities." />
	<meta name="keywords" content="web tools, online utilities, calculators, generators, games, Everyday Web Things" />
  
  

  <meta name="google-adsense-account" content="ca-pub-4751283696014624">

 


<script type="text/javascript">
    var infolinks_pid = 3411961;
    var infolinks_wsid = 0;
  </script>
  <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
</head>

<script>

import { onMount } from 'svelte';

let page = '/'; // Set the page path to '/' for the home page

// Function to track page view
function trackPageView() {
  window.gtag('config', 'G-H2EFXSCDHN', { 'page_path': page });
}

onMount(() => {
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-H2EFXSCDHN";
  
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-H2EFXSCDHN', { 'send_page_view': false });
    trackPageView(); // Track initial page view
  };

  document.head.appendChild(script);
});








  
    let categories = [
      {
        name: 'Random other things',
        tools: [
        { name: 'Button of Mystery - Coming soon ', link: '/ButtonofMystery', icon: '🔤' },
        { name: 'Upside-Down - Coming soon', link: '/UpsideDown', icon: '💬' },
        { name: 'Click the Chicken to Make It Cluck - Coming soon ', link: '/ClicktheChickentoMakeItCluck', icon: '📝' },
        { name: 'Fortune Cookie with Bad Advice - Coming soon ', link: '/FortuneCookiewithBadAdvice', icon: '🔢' },
      
      
          // Add more tools for productivity
        ],
      },
     
        
  

    ];
  
    let allCategories = [...categories]; // Save all categories initially
  
    let searchText = '';
  
    function filterCategories() {
      if (!searchText.trim()) {
        categories = [...allCategories]; // Show all categories when search is empty
      } else {
        categories = allCategories.map(category => ({
          ...category,
          tools: category.tools.filter(tool =>
            tool.name.toLowerCase().includes(searchText.toLowerCase())
          ),
        })).filter(category => category.tools.length > 0);
      }
    }
  
    onMount(() => {
      filterCategories(); // Initially show all categories
    });


  </script>
  
  
  
  <input type="text" placeholder="Search tools..." bind:value={searchText} on:input={filterCategories}>
  
  <div class="categories">
    {#each categories as category}
      <div class="category">
        <h2>{category.name}</h2>
        <ul>
          {#each category.tools as tool}
            <li>
              <a href={tool.link}>
                <span class="tool-icon">{tool.icon}</span>
                <span class="tool-name">{tool.name}</span>
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
  


  <style>
    /* Improved and polished CSS */
  
    /* Dark Mode Compatibility */
    @media (prefers-color-scheme: dark) {
      body {
        background-color: #222;
        color: #fff;
      }
  
      input[type="text"],
      a {
        color: #000000;
      }
  
      .categories {
        border-color: #444;
      }
  
      .category {
        background-color: #333;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
        color: #fff;
      }
    }
  
    /* Light Mode Styles */
    h1 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 30px;
    }
  
    input[type="text"] {
      width: 100%;
      padding: 8px;
      margin-bottom: 20px;
      border-radius: 4px;
      border: 1px solid #ccc;
      background-color: #f9f9f9;
      color: #333;
    }
  
    .categories {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 0px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 1px;
    }
  
    /* Updated style for each category container */
    .category {
      
      margin: 10px;
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: #f9f9f9;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
      color: #333;
    }
  
    @media (max-width: 767px) {
      /* Changes for mobile screens */
      .categories {
        flex-direction: column;
        align-items: center;
      }
  
      .category {
        width: calc(100% - 20px);
        flex: 0 0 calc(100% - 20px);
      }
    }
  
    .tool-name {
      background-color: transparent !important; /* Remove background color */
    }
  
    .tool-icon {
      font-size: 1.5rem;
      margin-right: 5px;
      vertical-align: middle;
    }
  </style>
  
  
  
  