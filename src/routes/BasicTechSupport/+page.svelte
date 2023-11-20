<script>
  let techTypes = ['Appliances', 'Computers', 'Mobile Devices'];
  let selectedTechType = '';

  


  let brands = {
  'Appliances': ['Whirlpool', 'Samsung', 'LG', 'General Electric (GE)', 'Electrolux', 'Bosch', 'Panasonic', 'Frigidaire', 'Maytag', 'KitchenAid'],
  'Computers': ['Dell', 'HP', 'Lenovo', 'Apple', 'Acer', 'Asus', 'Microsoft', 'Alienware', 'MSI'],
  'Mobile Devices': ['Apple', 'Samsung', 'Google', 'OnePlus', 'LG', 'Sony', 'Motorola', 'Nokia', 'Xiaomi']
};







  let selectedBrand = '';

  let itemTypes = {
  'Appliances': {
    'Whirlpool': ['Washers', 'Type 2', 'Type 3'],
    'Samsung': ['Type 4', 'Type 5', 'Type 6'],
    'LG': ['Type 7', 'Type 8', 'Type 9'],
    // Add more appliance brand types here
  },
  'Computers': {
    'Dell': ['Type X1', 'Type X2', 'Type X3'],
    'HP': ['Type Y1', 'Type Y2', 'Type Y3'],
    'Lenovo': ['Type Z1', 'Type Z2', 'Type Z3'],
    // Add more computer brand types here
  },
  'Mobile Devices': {
    'Apple': ['Type P1', 'Type P2', 'Type P3'],
    'Samsung': ['Type Q1', 'Type Q2', 'Type Q3'],
    'Google': ['Type R1', 'Type R2', 'Type R3'],
    // Add more mobile device brand types here
  }
};




  let selectedItemType = '';

  let models = {
    'Appliances': {
      'Whirlpool': {
        'Washers': ['Model 1A1', 'Model 1A2', 'Model 1A3'],
        'Type 2': ['Model 2A1', 'Model 2A2', 'Model 2A3'],
        'Type 3': ['Model 3A1', 'Model 3A2', 'Model 3A3']
      },
      'Brand B': {
        'Type 1': ['Model 1B1', 'Model 1B2', 'Model 1B3'],
        'Type 2': ['Model 2B1', 'Model 2B2', 'Model 2B3'],
        'Type 3': ['Model 3B1', 'Model 3B2', 'Model 3B3']
      },
      'Brand C': {
        'Type 1': ['Model 1C1', 'Model 1C2', 'Model 1C3'],
        'Type 2': ['Model 2C1', 'Model 2C2', 'Model 2C3'],
        'Type 3': ['Model 3C1', 'Model 3C2', 'Model 3C3']
      }
    },
    'Computers': {
      'Brand X': {
        'Type X1': ['Model 1X1', 'Model 1X2', 'Model 1X3'],
        'Type X2': ['Model 2X1', 'Model 2X2', 'Model 2X3'],
        'Type X3': ['Model 3X1', 'Model 3X2', 'Model 3X3']
      },
      'Brand Y': {
        'Type Y1': ['Model 1Y1', 'Model 1Y2', 'Model 1Y3'],
        'Type Y2': ['Model 2Y1', 'Model 2Y2', 'Model 2Y3'],
        'Type Y3': ['Model 3Y1', 'Model 3Y2', 'Model 3Y3']
      },
      'Brand Z': {
        'Type Z1': ['Model 1Z1', 'Model 1Z2', 'Model 1Z3'],
        'Type Z2': ['Model 2Z1', 'Model 2Z2', 'Model 2Z3'],
        'Type Z3': ['Model 3Z1', 'Model 3Z2', 'Model 3Z3']
      }
    },
    'Mobile Devices': {
      'Brand P': {
        'Type P1': ['Model 1P1', 'Model 1P2', 'Model 1P3'],
        'Type P2': ['Model 2P1', 'Model 2P2', 'Model 2P3'],
        'Type P3': ['Model 3P1', 'Model 3P2', 'Model 3P3']
      },
      'Brand Q': {
        'Type Q1': ['Model 1Q1', 'Model 1Q2', 'Model 1Q3'],
        'Type Q2': ['Model 2Q1', 'Model 2Q2', 'Model 2Q3'],
        'Type Q3': ['Model 3Q1', 'Model 3Q2', 'Model 3Q3']
      },
      'Samsung': {
        'Type R1': ['Model 1R1', 'Model 1R2', 'Model 1R3'],
        'Type R2': ['Model 2R1', 'Model 2R2', 'Model 2R3'],
        'Type R3': ['Model 3R1', 'Model 3R2', 'Model 3R3']
      }
    }
  };
  let selectedModel = '';

  let responses = {
    'Appliances': {
      'Whirlpool': {
        'Washers': {
          'Model WTW5105HC': 'Response for Model 1A1',
          'Model WTW5000DW4': 'Response for Model 1A2',
          'Model WTW8300BW4': 'Response for Model 1A3',
          'Model WTW8500BW4': 'Response for Model 1A1',
          'Model WTW9500BW4': 'Response for Model 1A2',
          'Model WTW9350BW4': 'Response for Model 1A3',
        },
        'Dryers': {
          'Model WED4815EW1': 'Response for Model 1A1',
          'Model WED4850HW1': 'Response for Model 1A2',
          'Model WED8620HP1': 'Response for Model 1A3',
          'Model 2A1': 'Response for Model 2A1',
          'Model 2A2': 'Response for Model 2A2',
          'Model 2A3': 'Response for Model 2A3',
        },
        'Refrigerators': {
          'Model 3A1': 'Response for Model 3A1',
          'Model 3A2': 'Response for Model 3A2',
          'Model 3A3': 'Response for Model 3A3',
        }
      },
      'Brand B': {
        'Type 1': {
          'Model 1B1': 'Response for Model 1B1',
          'Model 1B2': 'Response for Model 1B2',
          'Model 1B3': 'Response for Model 1B3',
        },
        'Type 2': {
          'Model 2B1': 'Response for Model 2B1',
          'Model 2B2': 'Response for Model 2B2',
          'Model 2B3': 'Response for Model 2B3',
        },
        'Type 3': {
          'Model 3B1': 'Response for Model 3B1',
          'Model 3B2': 'Response for Model 3B2',
          'Model 3B3': 'Response for Model 3B3',
        }
      },
      'Brand C': {
        'Type 1': {
          'Model 1C1': 'Response for Model 1C1',
          'Model 1C2': 'Response for Model 1C2',
          'Model 1C3': 'Response for Model 1C3',
        },
        'Type 2': {
          'Model 2C1': 'Response for Model 2C1',
          'Model 2C2': 'Response for Model 2C2',
          'Model 2C3': 'Response for Model 2C3',
        },
        'Type 3': {
          'Model 3C1': 'Response for Model 3C1',
          'Model 3C2': 'Response for Model 3C2',
          'Model 3C3': 'Response for Model 3C3',
        }
      }
    },
    'Computers': {
      'Brand X': {
        'Type X1': {
          'Model 1X1': 'Response for Model 1X1',
          'Model 1X2': 'Response for Model 1X2',
          'Model 1X3': 'Response for Model 1X3',
        },
        'Type X2': {
          'Model 2X1': 'Response for Model 2X1',
          'Model 2X2': 'Response for Model 2X2',
          'Model 2X3': 'Response for Model 2X3',
        },
        'Type X3': {
          'Model 3X1': 'Response for Model 3X1',
          'Model 3X2': 'Response for Model 3X2',
          'Model 3X3': 'Response for Model 3X3',
        }
      },
      'Brand Y': {
        'Type Y1': {
          'Model 1Y1': 'Response for Model 1Y1',
          'Model 1Y2': 'Response for Model 1Y2',
          'Model 1Y3': 'Response for Model 1Y3',
        },
        'Type Y2': {
          'Model 2Y1': 'Response for Model 2Y1',
          'Model 2Y2': 'Response for Model 2Y2',
          'Model 2Y3': 'Response for Model 2Y3',
        },
        'Type Y3': {
          'Model 3Y1': 'Response for Model 3Y1',
          'Model 3Y2': 'Response for Model 3Y2',
          'Model 3Y3': 'Response for Model 3Y3',
        }
      },
      'Brand Z': {
        'Type Z1': {
          'Model 1Z1': 'Response for Model 1Z1',
          'Model 1Z2': 'Response for Model 1Z2',
          'Model 1Z3': 'Response for Model 1Z3',
        },
        'Type Z2': {
          'Model 2Z1': 'Response for Model 2Z1',
          'Model 2Z2': 'Response for Model 2Z2',
          'Model 2Z3': 'Response for Model 2Z3',
        },
        'Type Z3': {
          'Model 3Z1': 'Response for Model 3Z1',
          'Model 3Z2': 'Response for Model 3Z2',
          'Model 3Z3': 'Response for Model 3Z3',
        }
      }
    },
    'Mobile Devices': {
      'Brand P': {
        'Type P1': {
          'Model 1P1': 'Response for Model 1P1',
          'Model 1P2': 'Response for Model 1P2',
          'Model 1P3': 'Response for Model 1P3',
        },
        'Type P2': {
          'Model 2P1': 'Response for Model 2P1',
          'Model 2P2': 'Response for Model 2P2',
          'Model 2P3': 'Response for Model 2P3',
        },
        'Type P3': {
          'Model 3P1': 'Response for Model 3P1',
          'Model 3P2': 'Response for Model 3P2',
          'Model 3P3': 'Response for Model 3P3',
        }
      },
      'Brand Q': {
        'Type Q1': {
          'Model 1Q1': 'Response for Model 1Q1',
          'Model 1Q2': 'Response for Model 1Q2',
          'Model 1Q3': 'Response for Model 1Q3',
        },
        'Type Q2': {
          'Model 2Q1': 'Response for Model 2Q1',
          'Model 2Q2': 'Response for Model 2Q2',
          'Model 2Q3': 'Response for Model 2Q3',
        },
        'Type Q3': {
          'Model 3Q1': 'Response for Model 3Q1',
          'Model 3Q2': 'Response for Model 3Q2',
          'Model 3Q3': 'Response for Model 3Q3',
        }
      },
      'Samsung': {
        'Type R1': {
          'Model 1R1': 'Response for Model 1R1',
          'Model 1R2': 'Response for Model 1R2',
          'Model 1R3': 'Response for Model 1R3',
        },
        'Type R2': {
          'Model 2R1': 'Response for Model 2R1',
          'Model 2R2': 'Response for Model 2R2',
          'Model 2R3': 'Response for Model 2R3',
        },
        'Type R3': {
          'Model 3R1': 'Response for Model 3R1',
          'Model 3R2': 'Response for Model 3R2',
          'Model 3R3': 'Response for Model 3R3',
        }
      }
    }
  };
  let selectedResponse = '';

  function handleTechTypeChange(event) {
    selectedTechType = event.target.value;
    selectedBrand = '';
    selectedItemType = '';
    selectedModel = '';
    selectedResponse = '';
  }

  function handleBrandChange(event) {
    selectedBrand = event.target.value;
    selectedItemType = '';
    selectedModel = '';
    selectedResponse = '';
  }

  function handleItemTypeChange(event) {
    selectedItemType = event.target.value;
    selectedModel = '';
    selectedResponse = '';
  }

  function handleModelChange(event) {
    selectedModel = event.target.value;
    const category = selectedTechType;
    selectedResponse = responses[category][selectedBrand][selectedItemType][selectedModel] || '';
  }







  
</script>






<style>
  /* Container style */
  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  /* Header style */
  h1 {
    font-size: 24px;
    text-align: center;
  }

  /* Label style */
  label {
    display: block;
    margin-top: 10px;
    font-weight: bold;
  }

  /* Select style */
  select {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  /* Response paragraph style */
  p {
    font-weight: bold;
    margin-top: 20px;
  }
</style>





<h1>Tech Support</h1>

<label for="techType">Select Tech Type:</label>
<select id="techType" bind:value={selectedTechType} on:change={handleTechTypeChange}>
  <option value="">Select Type</option>
  {#each techTypes as type}
    <option value={type}>{type}</option>
  {/each}
</select>

{#if selectedTechType}
  <label for="brand">Select Brand:</label>
  <select id="brand" bind:value={selectedBrand} on:change={handleBrandChange}>
    <option value="">Select Brand</option>
    {#each brands[selectedTechType] as brand}
      <option value={brand}>{brand}</option>
    {/each}
  </select>
{/if}

{#if selectedBrand}
  <label for="itemType">Select Item Type:</label>
  <select id="itemType" bind:value={selectedItemType} on:change={handleItemTypeChange}>
    <option value="">Select Item Type</option>
    {#each itemTypes[selectedTechType][selectedBrand] as itemType}
      <option value={itemType}>{itemType}</option>
    {/each}
  </select>
{/if}

{#if selectedItemType}
  <label for="model">Select Model:</label>
  <select id="model" bind:value={selectedModel} on:change={handleModelChange}>
    <option value="">Select Model</option>
    {#each models[selectedTechType][selectedBrand][selectedItemType] as model}
      <option value={model}>{model}</option>
    {/each}
  </select>
{/if}

{#if selectedResponse}
  <p>Response: {selectedResponse}</p>
{/if}