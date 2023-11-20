<script>
    const challenges = [
      "Climb a mountain",
      "Go white-water rafting",
      "Learn to surf",
      // ... (add more challenges)
    ];
  </script>
  
  <style>
    /* CSS styles for the Adventure Challenges page */
    div {
      text-align: center;
      margin: 20px;
      background-color: #f7f7f7;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    h1 {
      font-size: 28px;
      color: #333;
      margin-bottom: 10px;
    }
  
    ul {
      list-style-type: decimal;
      padding-left: 20px;
    }
  
    li {
      font-size: 20px;
      margin: 10px 0;
    }
  </style>
  
  <div>
    <h1>Travel Adventure Challenges</h1>
    <ul>
      {#each challenges as challenge (key)}
        <li>{challenge}</li>
      {/each}
    </ul>
  </div>
  