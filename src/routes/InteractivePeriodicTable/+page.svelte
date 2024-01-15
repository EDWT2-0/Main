<!-- PeriodicTable.svelte -->
<script>
  let elements = [
    { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, description: 'Colorless, odorless gas.' },
    { symbol: 'He', name: 'Helium', atomicNumber: 2, description: 'Inert, non-toxic gas.' },
    { symbol: 'Li', name: 'Lithium', atomicNumber: 3, description: 'Soft, silvery-white alkali metal.' },
    { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, description: 'Hard, gray-white metal.' },
    { symbol: 'B', name: 'Boron', atomicNumber: 5, description: 'Metalloid with high melting point.' },
    { symbol: 'C', name: 'Carbon', atomicNumber: 6, description: 'Essential for organic compounds.' },
    { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, description: 'Colorless, odorless gas.' },
    { symbol: 'O', name: 'Oxygen', atomicNumber: 8, description: 'Supports combustion and life.' },
    { symbol: 'F', name: 'Fluorine', atomicNumber: 9, description: 'Highly reactive, pale yellow gas.' },
    { symbol: 'Ne', name: 'Neon', atomicNumber: 10, description: 'Inert, noble gas.' },
    { symbol: 'Na', name: 'Sodium', atomicNumber: 11, description: 'Soft, silvery-white alkali metal.' },
    { symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, description: 'Shiny gray solid.' },
    { symbol: 'Al', name: 'Aluminum', atomicNumber: 13, description: 'Lightweight, silvery-white metal.' },
    { symbol: 'Si', name: 'Silicon', atomicNumber: 14, description: 'Hard, brittle crystalline solid.' },
    { symbol: 'P', name: 'Phosphorus', atomicNumber: 15, description: 'Essential for life.' },
    { symbol: 'S', name: 'Sulfur', atomicNumber: 16, description: 'Yellow, brittle non-metal.' },
    { symbol: 'Cl', name: 'Chlorine', atomicNumber: 17, description: 'Greenish-yellow gas.' },
    { symbol: 'K', name: 'Potassium', atomicNumber: 19, description: 'Soft, silvery-white alkali metal.' },
    { symbol: 'Ca', name: 'Calcium', atomicNumber: 20, description: 'Shiny gray solid.' },
    { symbol: 'Sc', name: 'Scandium', atomicNumber: 21, description: 'Silvery-white metallic transition metal.' },
{ symbol: 'Ti', name: 'Titanium', atomicNumber: 22, description: 'Transition metal with a low density.' },
{ symbol: 'V', name: 'Vanadium', atomicNumber: 23, description: 'Hard, silvery-grey transition metal.' },
{ symbol: 'Cr', name: 'Chromium', atomicNumber: 24, description: 'Hard, lustrous, steel-gray metal.' },
{ symbol: 'Mn', name: 'Manganese', atomicNumber: 25, description: 'Silvery-gray, hard, brittle transition metal.' },
{ symbol: 'Fe', name: 'Iron', atomicNumber: 26, description: 'Metal essential for life.' },
{ symbol: 'Ni', name: 'Nickel', atomicNumber: 28, description: 'Silvery-white lustrous metal.' },
{ symbol: 'Cu', name: 'Copper', atomicNumber: 29, description: 'Reddish-orange transition metal.' },
{ symbol: 'Zn', name: 'Zinc', atomicNumber: 30, description: 'Bluish-silver, lustrous metal.' },
{ symbol: 'Ga', name: 'Gallium', atomicNumber: 31, description: 'Soft, silvery metal.' },
{ symbol: 'Ge', name: 'Germanium', atomicNumber: 32, description: 'Metalloid with a blue-gray appearance.' },
{ symbol: 'As', name: 'Arsenic', atomicNumber: 33, description: 'Metalloid, toxic.' },
{ symbol: 'Se', name: 'Selenium', atomicNumber: 34, description: 'Non-metal, essential for life.' },
{ symbol: 'Br', name: 'Bromine', atomicNumber: 35, description: 'Red-brown liquid halogen.' },
{ symbol: 'Kr', name: 'Krypton', atomicNumber: 36, description: 'Noble gas, colorless and odorless.' },
{ symbol: 'Rb', name: 'Rubidium', atomicNumber: 37, description: 'Soft, silvery-white alkali metal.' },
{ symbol: 'Sr', name: 'Strontium', atomicNumber: 38, description: 'Soft, silvery alkaline earth metal.' },
{ symbol: 'Y', name: 'Yttrium', atomicNumber: 39, description: 'Silvery-metallic transition metal.' },
{ symbol: 'Zr', name: 'Zirconium', atomicNumber: 40, description: 'Lustrous, grayish-white metal.' },
{ symbol: 'Nb', name: 'Niobium', atomicNumber: 41, description: 'Soft, gray, ductile transition metal.' },
{ symbol: 'Mo', name: 'Molybdenum', atomicNumber: 42, description: 'Silvery-gray metal with a high melting point.' },
{ symbol: 'Tc', name: 'Technetium', atomicNumber: 43, description: 'Radioactive metal, synthetic.' },
{ symbol: 'Ru', name: 'Ruthenium', atomicNumber: 44, description: 'Hard, white metal.' },
{ symbol: 'Rh', name: 'Rhodium', atomicNumber: 45, description: 'Silvery-white metallic transition metal.' },
{ symbol: 'Pd', name: 'Palladium', atomicNumber: 46, description: 'Lustrous, silvery-white metal.' },
{ symbol: 'Ag', name: 'Silver', atomicNumber: 47, description: 'White, shiny metal.' },
{ symbol: 'Cd', name: 'Cadmium', atomicNumber: 48, description: 'Soft, bluish-white metal.' },
{ symbol: 'In', name: 'Indium', atomicNumber: 49, description: 'Soft, malleable metal.' },
{ symbol: 'Sn', name: 'Tin', atomicNumber: 50, description: 'Malleable, silvery-white metal.' },
{ symbol: 'Sb', name: 'Antimony', atomicNumber: 51, description: 'Metalloid, brittle and crystalline.' },
{ symbol: 'Te', name: 'Tellurium', atomicNumber: 52, description: 'Metalloid with a silvery luster.' },
{ symbol: 'I', name: 'Iodine', atomicNumber: 53, description: 'Halogen, purple-black solid.' },
{ symbol: 'Xe', name: 'Xenon', atomicNumber: 54, description: 'Noble gas, colorless, and odorless.' },
{ symbol: 'Cs', name: 'Cesium', atomicNumber: 55, description: 'Soft, silvery-gold alkali metal.' },
{ symbol: 'Ba', name: 'Barium', atomicNumber: 56, description: 'Silvery-white alkaline earth metal.' },
{ symbol: 'La', name: 'Lanthanum', atomicNumber: 57, description: 'Silvery-white metallic transition metal.' },
{ symbol: 'Ce', name: 'Cerium', atomicNumber: 58, description: 'Soft, ductile, and silvery-white metal.' },
{ symbol: 'Pr', name: 'Praseodymium', atomicNumber: 59, description: 'Soft, silvery-white metal.' },
{ symbol: 'Nd', name: 'Neodymium', atomicNumber: 60, description: 'Soft, silvery-white metal.' },
{ symbol: 'Pm', name: 'Promethium', atomicNumber: 61, description: 'Radioactive, synthetic metal.' },
{ symbol: 'Sm', name: 'Samarium', atomicNumber: 62, description: 'Silvery-white metallic rare earth metal.' },
{ symbol: 'Eu', name: 'Europium', atomicNumber: 63, description: 'Silvery-white, reactive metal.' },
{ symbol: 'Gd', name: 'Gadolinium', atomicNumber: 64, description: 'Metallic rare earth element.' },
{ symbol: 'Tb', name: 'Terbium', atomicNumber: 65, description: 'Silvery-white, rare earth metal.' },
{ symbol: 'Dy', name: 'Dysprosium', atomicNumber: 66, description: 'Soft, silvery-white metal.' },
{ symbol: 'Ho', name: 'Holmium', atomicNumber: 67, description: 'Silvery-white metallic rare earth metal.' },
{ symbol: 'Er', name: 'Erbium', atomicNumber: 68, description: 'Silvery-white metallic rare earth metal.' },
{ symbol: 'Tm', name: 'Thulium', atomicNumber: 69, description: 'Soft, silvery-white rare earth metal.' },
{ symbol: 'Yb', name: 'Ytterbium', atomicNumber: 70, description: 'Soft, malleable, and ductile metal.' },
{ symbol: 'Lu', name: 'Lutetium', atomicNumber: 71, description: 'Silvery-white metal.' },
{ symbol: 'Hf', name: 'Hafnium', atomicNumber: 72, description: 'Lustrous, silvery-gray transition metal.' },
{ symbol: 'Ta', name: 'Tantalum', atomicNumber: 73, description: 'Hard, blue-gray, lustrous transition metal.' },
{ symbol: 'W', name: 'Tungsten', atomicNumber: 74, description: 'Hard, dense, steel-gray metal.' },
{ symbol: 'Re', name: 'Rhenium', atomicNumber: 75, description: 'Silvery-white, rare transition metal.' },
{ symbol: 'Os', name: 'Osmium', atomicNumber: 76, description: 'Hard, brittle, bluish-white transition metal.' },
{ symbol: 'Ir', name: 'Iridium', atomicNumber: 77, description: 'Silvery-white, dense, corrosion-resistant metal.' },
{ symbol: 'Pt', name: 'Platinum', atomicNumber: 78, description: 'Dense, malleable, ductile, and precious metal.' },
{ symbol: 'Au', name: 'Gold', atomicNumber: 79, description: 'Soft, yellow, dense metal.' },
{ symbol: 'Hg', name: 'Mercury', atomicNumber: 80, description: 'Liquid metal at room temperature.' },
{ symbol: 'Tl', name: 'Thallium', atomicNumber: 81, description: 'Soft, malleable gray metal.' },
{ symbol: 'Pb', name: 'Lead', atomicNumber: 82, description: 'Soft, dense, and malleable metal.' },
{ symbol: 'Bi', name: 'Bismuth', atomicNumber: 83, description: 'Brittle, pinkish-white metal.' },
{ symbol: 'Po', name: 'Polonium', atomicNumber: 84, description: 'Radioactive, synthetic metal.' },
{ symbol: 'At', name: 'Astatine', atomicNumber: 85, description: 'Radioactive halogen.' },
{ symbol: 'Rn', name: 'Radon', atomicNumber: 86, description: 'Colorless, odorless, radioactive noble gas.' },
{ symbol: 'Fr', name: 'Francium', atomicNumber: 87, description: 'Radioactive alkali metal.' },
{ symbol: 'Ra', name: 'Radium', atomicNumber: 88, description: 'Radioactive alkaline earth metal.' },
{ symbol: 'Ac', name: 'Actinium', atomicNumber: 89, description: 'Silvery-white, radioactive metal.' },
{ symbol: 'Th', name: 'Thorium', atomicNumber: 90, description: 'Radioactive, silvery, and actinide metal.' },
{ symbol: 'Pa', name: 'Protactinium', atomicNumber: 91, description: 'Radioactive, silvery-white actinide metal.' },
{ symbol: 'U', name: 'Uranium', atomicNumber: 92, description: 'Radioactive, silvery-white actinide metal.' },
{ symbol: 'Np', name: 'Neptunium', atomicNumber: 93, description: 'Radioactive, synthetic actinide metal.' },
{ symbol: 'Pu', name: 'Plutonium', atomicNumber: 94, description: 'Radioactive, synthetic actinide metal.' },
{ symbol: 'Am', name: 'Americium', atomicNumber: 95, description: 'Radioactive, synthetic actinide metal.' },
{ symbol: 'Cm', name: 'Curium', atomicNumber: 96, description: 'Radioactive, synthetic actinide metal.' },
{ symbol: 'Bk', name: 'Berkelium', atomicNumber: 97, description: 'Radioactive, synthetic actinide metal.' },
{ symbol: 'Cf', name: 'Californium', atomicNumber: 98, description: 'Radioactive, synthetic actinide metal.' },
{ symbol: 'Es', name: 'Einsteinium', atomicNumber: 99, description: 'Radioactive, synthetic actinide metal.' },
{ symbol: 'Fm', name: 'Fermium', atomicNumber: 100, description: 'Radioactive, synthetic actinide metal.' },
{ symbol: 'Md', name: 'Mendelevium', atomicNumber: 101, description: 'Radioactive, synthetic actinide metal.' },
{ symbol: 'No', name: 'Nobelium', atomicNumber: 102, description: 'Radioactive, synthetic actinide metal.' },
{ symbol: 'Lr', name: 'Lawrencium', atomicNumber: 103, description: 'Radioactive, synthetic actinide metal.' },
{ symbol: 'Rf', name: 'Rutherfordium', atomicNumber: 104, description: 'Radioactive, synthetic transition metal.' },
{ symbol: 'Db', name: 'Dubnium', atomicNumber: 105, description: 'Radioactive, synthetic transition metal.' },
{ symbol: 'Sg', name: 'Seaborgium', atomicNumber: 106, description: 'Radioactive, synthetic transition metal.' },
{ symbol: 'Bh', name: 'Bohrium', atomicNumber: 107, description: 'Radioactive, synthetic transition metal.' },
{ symbol: 'Hs', name: 'Hassium', atomicNumber: 108, description: 'Radioactive, synthetic transition metal.' },
{ symbol: 'Mt', name: 'Meitnerium', atomicNumber: 109, description: 'Radioactive, synthetic transition metal.' },
{ symbol: 'Ds', name: 'Darmstadtium', atomicNumber: 110, description: 'Radioactive, synthetic transition metal.' },
{ symbol: 'Rg', name: 'Roentgenium', atomicNumber: 111, description: 'Radioactive, synthetic transition metal.' },
{ symbol: 'Cn', name: 'Copernicium', atomicNumber: 112, description: 'Radioactive, synthetic transition metal.' },
{ symbol: 'Nh', name: 'Nihonium', atomicNumber: 113, description: 'Radioactive, synthetic element.' },
{ symbol: 'Fl', name: 'Flerovium', atomicNumber: 114, description: 'Radioactive, synthetic element.' },
{ symbol: 'Mc', name: 'Moscovium', atomicNumber: 115, description: 'Radioactive, synthetic element.' },
{ symbol: 'Lv', name: 'Livermorium', atomicNumber: 116, description: 'Radioactive, synthetic element.' },
{ symbol: 'Ts', name: 'Tennessine', atomicNumber: 117, description: 'Radioactive, synthetic element.' },
{ symbol: 'Og', name: 'Oganesson', atomicNumber: 118, description: 'Radioactive, synthetic element.' },
    // Continue adding more elements...
  ];

  let selectedElement = null;

  function handleClick(element) {
    selectedElement = element;
  }

  function closeModal() {
    selectedElement = null;
  }
</script>



<style>
  /* Your CSS styles here */
  /* Use the styles you provided earlier */

  /* Additional styles for the periodic table */
  .periodic-table {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); /* Adjust the column width for mobile */
    gap: 5px;
  }

  .element {
    background-color: var(--button-light);
    color: var(--text-light);
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center; /* Center text within the element */
  }

  .element:hover {
    background-color: var(--button-dark);
    color: white;
  }

  /* Modal styles */
  .modal {
    position: fixed;
    top: 10%; /* Adjusted to 10% for positioning close to the top */
    left: 50%;
    transform: translateX(-50%); /* Center the modal horizontally */
    width: 100%;
    max-width: 600px; /* Set a maximum width for the modal on mobile */
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column; /* Stack modal content vertically */
    align-items: center;
    z-index: 999;
  }

  .modal-content {
    background-color: rgb(10, 10, 10);
    padding: 20px;
    border-radius: 10px;
    width: 100%; /* Set the width to 100% to match the modal container */
  }

  @media screen and (min-width: 601px) {
    /* Adjust styles for larger screens (e.g., desktop) */
    .periodic-table {
      grid-template-columns: repeat(10, 1fr); /* Adjust the number of columns for desktop */
      justify-content: center; /* Center elements horizontally */
      margin: 0 auto; /* Center the entire grid */
    }
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

  {#if selectedElement}
    <div class="modal" on:click={closeModal}>
      <div class="modal-content" on:click={(e) => e.stopPropagation()}>
        <h2>{selectedElement.name} ({selectedElement.symbol})</h2>
        <p>Atomic Number: {selectedElement.atomicNumber}</p>
        <p>Description: {selectedElement.description}</p>
        <button on:click={closeModal}>Close</button>
      </div>
    </div>
  {/if}
</main>
