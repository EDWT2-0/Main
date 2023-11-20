<script>
    const safetyTips = [
      "Keep your passport and important documents in a secure and separate location.",
      "Stay informed about the local customs and laws of the destination.",
      "Always have a first-aid kit and any necessary medications with you.",
      "Use reliable transportation and only use official taxis or ridesharing services.",
      "Avoid displaying expensive jewelry and electronics.",
      "Stay in well-reviewed and reputable accommodations.",
      "Keep emergency contact information and local emergency numbers handy.",
      "Be cautious when sharing personal information on social media.",
      "Stay hydrated and use sunscreen in hot climates.",
      "Keep a copy of your itinerary with a trusted person back home.",
      "Use a money belt or hidden pouch for important items.",
      "Stay aware of your surroundings and trust your instincts.",
    ];
  </script>
  
  <style>
    /* CSS styles for the Travel Safety Tips page */
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
      list-style-type: disc;
      padding-left: 20px;
    }
  
    li {
      font-size: 20px;
      margin: 10px 0;
    }
  </style>
  
  <div>
    <h1>Travel Safety Tips</h1>
    <ul>
      {#each safetyTips as tip (index)}
        <li>{tip}</li>
      {/each}
    </ul>
  </div>
  