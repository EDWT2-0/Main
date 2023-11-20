
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Space News</title>
  <meta name="description" content="Stay informed about the latest news from the cosmos with our online space news portal. Explore updates on space exploration, discoveries, and celestial events." />
  <meta name="keywords" content="space news, astronomy news, cosmic discoveries, space exploration" />
</head>


<!-- SpaceNews.svelte -->

<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    const apiKey = 'cf9977d071086321b6a94a19de';
    const apiUrl = 'https://cosmic-nxws.ghost.io/ghost/api/v3/content/';
    const articles = writable([]);
  
    onMount(async () => {
      try {
        const response = await fetch(`${apiUrl}posts/?key=${apiKey}&limit=9`);
        if (response.ok) {
          const data = await response.json();
          articles.set(data.posts);
        } else {
          console.error('Failed to fetch space news articles');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  </script>
  
  <main>
    <h1>Latest in Space - Provided by CosmicNxws!</h1>
    {#each $articles as article}
      <div class="article">
        <img src={article.feature_image} alt={article.title} />
        <h3>{article.title}</h3>
        <button><a href={article.url} target="_blank" rel="noopener">Read Article</a></button>
      </div>
    {/each}
  </main>
  
  <style>
    /* Add your CSS styles here */
    .article {
      padding: 10px;
      border: 1px solid #ddd;
      margin: 10px;
      text-align: center;
    }
  
    img {
      max-width: 100%;
      height: auto;
    }
  
    button {
      background-color: #007BFF;
      color: #fff;
      padding: 8px 16px;
      border: none;
      cursor: pointer;
    }
  </style>
  