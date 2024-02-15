<!-- RandomFact.svelte -->
<script>
    let facts = [
      "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
      "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
      "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
      "The Earth's atmosphere weighs about 5.5 quadrillion tons.",
      "A single cloud can weigh more than 1 million pounds.",
      "A day on Venus is longer than a year on Venus.",
      "The Eiffel Tower can be 15 cm taller during the summer, due to thermal expansion of the metal.",
      "Bananas are berries, but strawberries aren't.",
      "Polar bears have black skin under their white fur.",
      "A group of flamingos is called a 'flamboyance'."
    ];
  
    let currentFact = facts[Math.floor(Math.random() * facts.length)];
    
    function generateFact() {
      currentFact = facts[Math.floor(Math.random() * facts.length)];
    }
  </script>
  
  <style>
    .fact-container {
      padding: 90px 20px; /* Added more vertical padding */
      
      border: 1px solid #ccc;
      border-radius: 5px;
      margin: 20px 0;
    }
  </style>
  
  <div class="fact-container">
    <h2>Random Fact:</h2>
    <p>{currentFact}</p>
    <button on:click={generateFact}>Generate New Fact</button>
  </div>
  