

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shakespearean Insult Generator</title>
  <meta name="description" content="Generate random Shakespearean insults for your amusement. Customize the insults and have fun with the Bard's language." />
  <meta name="keywords" content="Shakespearean insult generator, random insults, Shakespeare, witty insults, creative insults" />
</head>






<script>
    let insults = [
    "Thou art as fat as butter!",
    "Thou art a base, proud, shallow, beggarly, three-suited, hundred-pound, filthy worsted-stocking knave!",
    "I do desire we may be better strangers.",
    "Thy tongue outvenoms all the worms of Nile.",
    "Thine face is not worth sunburning.",
    "Thou art as loathsome as a toad!",
    "Thou art a saucy knave!",
    "Thy wit is as thick as Tewkesbury mustard!",
    "Thou pribbling ill-nurtured knave!",
    "Thou qualling ill-nurtured miscreant!",
    "Thou lewd, ill-nurtured coxcomb!",
    "Thou art a ruttish pribbling coxcomb!",
    "Thou art as a beslubbering flap-mouthed lout!",
    "Thou art as a rank onion-eyed miscreant!",
    "Thou art as a reeky weather-bitten canker-blossom!",
    "Thou art a churlish ill-nurtured hedge-born scullion!",
    "Thou art a bootless fool!",
    "Thou art a lump of foul deformity!",
    "Thou art a foul and loathsome beggar!",
    "Thou art a spongy fool-born scullion!",
    "Thou art as a monstrous infectious malady!",
    "Thou art a knotty-pated miscreant!",
    "Thou art a knave and no true knight!",
    "Thou art a motley-minded scullion!",
    "Thou art as a milk-livered malcontent!",
    "Thou art as a surly ill-nurtured miscreant!",
    "Thou art as a goatish malmsey-nosed scullion!",
    "Thou art a roguish hedge-born scullion!",
    "Thou art as a droning ill-nurtured scullion!",
    "Thou art a knavish ill-nurtured scullion!",
    "Thou art a loggerheaded knave!",
    "Thou art as a fly-bitten miscreant!"
  ];

  
    let randomInsult = "";
  
    function generateRandomInsult() {
      randomInsult = insults[Math.floor(Math.random() * insults.length)];
    }
  </script>
  
  <main>
    <h1>Shakespearean Insult Generator</h1>
    <p>Click the button to generate a random Shakespearean insult:</p>
    <button on:click={generateRandomInsult}>Generate Insult</button>
    {#if randomInsult}
      <p class="insult">{randomInsult}</p>
    {/if}
  </main>
  
  <style>
    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }
  
    p {
      font-size: 18px;
      margin-bottom: 12px;
    }
  
    button {
      font-size: 16px;
      padding: 8px 16px;
      background-color: #0078d4;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .insult {
      font-size: 20px;
      font-style: italic;
    }
  </style>
  