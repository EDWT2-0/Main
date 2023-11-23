<script>
    import { onMount } from 'svelte';
  
    let categories = [
      {
        name: 'Generators',
        tools: [
          { name: 'Random Word Generator', link: '/RandomWordGenerator', icon: '' },
          { name: 'Random Quote Generator', link: '/tools/notes', icon: '' },
          { name: 'Random Paragraph Generator', link: '/RandomParagraphGenerator', icon: '' },
          { name: 'Random Number Generator', link: '/RandomNumberGenerator', icon: '' },
          { name: 'Random Color Generator', link: '/RandomColorGenerator', icon: '' },
          { name: 'Random Name Generator', link: '/RandomNameGenerator', icon: '' },
          { name: 'Dummy Image Generator', link: '/DummyImageGenerator', icon: '' },
          { name: 'Qr Generator', link: '/QrCodeGenerator', icon: '' },
      
          // Add more tools for productivity
        ],
      },
      {
        name: 'Productivity',
        tools: [
          { name: 'Timer & Stop Watch', link: '/Timer&StopWatch', icon: '⏰' },
          { name: 'Currency Converter', link: '/CurrencyConverter', icon: '🤑' },
          { name: 'Time Zone Converter', link: '/TimeZoneConverter', icon: '' },
          { name: 'Screen Ruler', link: '/ScreenRuler', icon: '' },
          
          // Add more utility tools
        ],
      },
      {
        name: 'Calculators',
        tools: [
          { name: 'Standard Calculator', link: '/tools/bmi-calculator', icon: '' },
          { name: 'Scientific Calculator', link: '/ScientificCalculator', icon: '' },
          { name: 'Square Root Calculator', link: '/SquareRootCalculator', icon: '' },
          { name: 'Percentage Calculator', link: '/PercentageCalculator', icon: '' },
          { name: 'Area Calculator', link: '/AreaCalculator', icon: '' },
          { name: 'Volume Calculator', link: '/VolumeCalculator', icon: '' },
          { name: 'Fraction Calculator', link: '/FractionCalculato', icon: '' },
          { name: 'Budget Calculator', link: '/BudgetCalculator', icon: '' },
          // Add more health & fitness tools
        ],
      },
      {
        name: 'Education',
        tools: [
          { name: 'Digital Science Quiz', link: '/DigitalScienceQuiz', icon: '🧪' },
          { name: 'Digital Math Quiz', link: '/DigitalMathQuiz', icon: '➕' },

          { name: 'Geography Quiz', link: '/GeographyQuiz', icon: '🌍' },
          { name: 'History Quiz', link: '/HistoryQuiz', icon: '📖' },
          { name: 'Coding Quiz', link: '/CodingQuiz', icon: '👨‍💻' },
          // Add more educational tools
        ],
      },
      {
        name: 'Entertainment',
        tools: [
          { name: 'Movie Recommender', link: '/tools/movie-recommender', icon: '🎬' },
          { name: 'Music Player', link: '/tools/music-player', icon: '🎵' },
          // Add more entertainment tools
        ],
      },
      {
        name: 'Travel',
        tools: [
          { name: 'Travel Planner', link: '/tools/travel-planner', icon: '✈️' },
          { name: 'Currency Converter', link: '/tools/currency-converter', icon: '💱' },
          // Add more travel tools
        ],
      },
      {
        name: 'Traveu',
        tools: [
          { name: 'Travel Planner', link: '/tools/travel-planner', icon: '✈️' },
          { name: 'Currency Converter', link: '/tools/currency-converter', icon: '💱' },
          // Add more travel tools
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
    gap: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
  }

  /* Updated style for each category container */
  .category {
    flex: 0 0 calc(33.33% - 40px); /* Three items per row */
    margin: 10px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    color: #333;
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
  