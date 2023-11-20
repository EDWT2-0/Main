<!-- Admin.svelte -->
<script>
    let newTechType = '';
    let newBrand = '';
    let newModel = '';
  
    // Arrays to store added items
    let addedTechTypes = [];
    let addedBrands = [];
    let addedModels = [];
  
    // Function to add a new Tech Type
    function addTechType() {
      if (newTechType) {
        addedTechTypes.push(newTechType);
        newTechType = '';
      }
    }
  
    // Function to add a new Brand
    function addBrand() {
      if (newBrand) {
        addedBrands.push(newBrand);
        newBrand = '';
      }
    }
  
    // Function to add a new Model
    function addModel() {
      if (newModel) {
        addedModels.push(newModel);
        newModel = '';
      }
    }
  </script>
  
  <style>
    /* Add your CSS styling here */
  </style>
  
  <h2>Admin Panel</h2>
  
  <h3>Add New Tech Type</h3>
  <input type="text" bind:value={newTechType} />
  <button on:click={addTechType}>Add Tech Type</button>
  
  <h3>Add New Brand</h3>
  <input type="text" bind:value={newBrand} />
  <button on:click={addBrand}>Add Brand</button>
  
  <h3>Add New Model</h3>
  <input type="text" bind:value={newModel} />
  <button on:click={addModel}>Add Model</button>
  
  <h2>Added Items</h2>
  
  <h3>Added Tech Types</h3>
  <ul>
    {#each addedTechTypes as techType}
      <li>{techType}</li>
    {/each}
  </ul>
  
  <h3>Added Brands</h3>
  <ul>
    {#each addedBrands as brand}
      <li>{brand}</li>
    {/each}
  </ul>
  
  <h3>Added Models</h3>
  <ul>
    {#each addedModels as model}
      <li>{model}</li>
    {/each}
  </ul>
  