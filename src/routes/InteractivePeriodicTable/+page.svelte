<!-- PeriodicTable.svelte -->
<script>
  let elements = [
    { symbol: 'H', name: 'Hydrogen', atomicNumber: 1 },
    { symbol: 'He', name: 'Helium', atomicNumber: 2 },
    // Add more elements with their properties
    // Example: { symbol: 'Li', name: 'Lithium', atomicNumber: 3 },
    // ...
  ];

  function handleClick(element) {
    alert(`You clicked ${element.name} (${element.symbol}) - Atomic Number: ${element.atomicNumber}`);
  }
</script>

<style>
  /* Your CSS styles here */
  /* Use the styles you provided earlier */

  /* Additional styles for the periodic table */
  .periodic-table {
    display: grid;
    grid-template-columns: repeat(18, 1fr); /* Adjust the number of columns */
    gap: 5px;
  }

  .element {
    background-color: var(--button-light);
    color: var(--text-light);
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .element:hover {
    background-color: var(--button-dark);
    color: white;
  }
</style>

<main>
  <h1>Interactive Periodic Table</h1>
  <div class="periodic-table">
    {#each elements as element}
      <div class="element" on:click={() => handleClick(element)}>
        <p>{element.symbol}</p>
        <p>{element.name}</p>
        <p>{element.atomicNumber}</p>
      </div>
    {/each}
  </div>
</main>
