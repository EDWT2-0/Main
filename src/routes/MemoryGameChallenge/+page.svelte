<!-- MemoryGameChallenge.svelte -->
<script>
    let tiles = [
      { id: 1, value: 'A', flipped: false, matched: false },
      { id: 2, value: 'B', flipped: false, matched: false },
      // Add more tile objects as needed
    ];
  
    let selectedTile = null;
  
    function flipTile(tile) {
      if (!tile.flipped && !tile.matched) {
        tile.flipped = true;
  
        if (selectedTile) {
          // Compare selected tile with the current tile
          if (selectedTile.value === tile.value) {
            selectedTile.matched = true;
            tile.matched = true;
          } else {
            setTimeout(() => {
              selectedTile.flipped = false;
              tile.flipped = false;
            }, 1000);
          }
          selectedTile = null;
        } else {
          selectedTile = tile;
        }
      }
    }
  </script>
  
  <style>
    /* Your provided CSS styles here */
    /* ... (same styles as before) */
  
    /* Additional styles for Memory Game tiles */
    .tile {
      display: inline-block;
      width: 100px;
      height: 100px;
      margin: 5px;
      border: 2px solid var(--button-light);
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
      background-color: var(--button-light);
      color: var(--text-light);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .flipped {
      background-color: var(--background-light);
      color: var(--text-dark);
    }
  
    .matched {
      visibility: hidden;
    }
  </style>
  
  <main>
    <h1>Memory Game Challenge</h1>
    <div class="game-board">
      {#each tiles as tile (tile.id)}
        <div class="tile {tile.flipped ? 'flipped' : ''} {tile.matched ? 'matched' : ''}"
             on:click={() => flipTile(tile)}
             transition:fade>
          {tile.flipped ? tile.value : ''}
        </div>
      {/each}
    </div>
  </main>
  