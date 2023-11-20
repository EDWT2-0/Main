<!-- PeriodicTable.svelte -->

<script>
    const elements = [
      { symbol: "H", name: "Hydrogen", atomicNumber: 1, group: "Nonmetals" },
      { symbol: "He", name: "Helium", atomicNumber: 2, group: "Noble Gases" },
      // Add more elements here
    ];
  
    let selectedElement = null;
  
    function selectElement(element) {
      selectedElement = element;
    }
  </script>
  
  <main>
    <h1>Interactive Periodic Table</h1>
  
    <table>
      <thead>
        <tr>
          <th>Atomic Number</th>
          <th>Symbol</th>
          <th>Element Name</th>
          <th>Group</th>
        </tr>
      </thead>
      <tbody>
        {#each elements as element (element.atomicNumber)}
          <tr on:click={() => selectElement(element)} class:selected={element === selectedElement}>
            <td>{element.atomicNumber}</td>
            <td>{element.symbol}</td>
            <td>{element.name}</td>
            <td>{element.group}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  
    {#if selectedElement}
      <div class="element-details">
        <h2>{selectedElement.name}</h2>
        <p>Symbol: {selectedElement.symbol}</p>
        <p>Atomic Number: {selectedElement.atomicNumber}</p>
        <p>Group: {selectedElement.group}</p>
      </div>
    {/if}
  </main>
  
  <style>
    /* Add your CSS styles here */
    table {
      width: 100%;
      border-collapse: collapse;
    }
  
    th, td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: center;
    }
  
    tr[selected] {
      background-color: #007BFF;
      color: white;
    }
  
    .element-details {
      margin-top: 20px;
      padding: 10px;
      background-color: #f5f5f5;
    }
  </style>
  