<script>
    let question = "";
    let options = [""];
    let poll = {
      question: "",
      options: [],
    };
  
    function addOption() {
      options = [...options, ""];
    }
  
    function removeOption(index) {
      options = options.filter((_, i) => i !== index);
    }
  
    function createPoll() {
      poll.question = question;
      poll.options = options.filter((option) => option.trim() !== "");
      // You can send the 'poll' object to your server for further processing.
      // For this example, we will just log it to the console.
      console.log(poll);
    }
  </script>
  
  <style>
    /* Add your CSS styles here */
  </style>
  
  <div>
    <label for="question">Question:</label>
    <input type="text" id="question" bind:value={question} />
  
    {#each options as option, index (option)}
      <div class="option">
        <input type="text" bind:value={options[index]} />
        <button on:click={() => removeOption(index)}>Remove</button>
      </div>
    {/each}
  
    <button on:click={addOption}>Add Option</button>
  
    <button on:click={createPoll}>Create Poll</button>
  </div>
  