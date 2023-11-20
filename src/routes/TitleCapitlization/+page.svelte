<script>
    let inputText = '';
    let capitalizedTitle = '';
  
    function capitalizeTitle() {
      capitalizedTitle = inputText.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
  </script>
  
  <style>
    /* Add your CSS styles here */
  </style>
  
  <div>
    <input type="text" bind:value={inputText} on:input={capitalizeTitle} placeholder="Enter a title" />
    <h1>{capitalizedTitle}</h1>
  </div>
  