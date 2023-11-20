<script>
    let brainTeaser = "";
    let answer = "";
  
    const brainTeasers = [
      {
        question: "I am taken from a mine and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
        answer: "Pencil Lead"
      },
      {
        question: "The more you take, the more you leave behind. What am I?",
        answer: "Footsteps"
      },
      {
        question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
        answer: "An Echo"
      },
      {
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        answer: "The Letter 'M'"
      },
      {
        question: "You see a boat filled with people. It has not sunk, but when you look again, you don’t see a single person on the boat. Why?",
        answer: "All the people were married!"
      },
      {
        question: "What has keys but can't open locks?",
        answer: "A Piano"
      },
      {
        question: "What can travel around the world while staying in a corner?",
        answer: "A Stamp"
      },
      {
        question: "I have keys but open no locks. I have space but no room. You can enter, but you can't go inside. What am I?",
        answer: "A Keyboard"
      },
      {
        question: "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
        answer: "A Fire"
      },
      {
        question: "What has one eye but can't see?",
        answer: "A Needle"
      },
      {
        question: "I'm tall when I'm young and short when I'm old. What am I?",
        answer: "A Candle"
      },
      {
        question: "What has keys but can't open locks?",
        answer: "A Piano"
      },
      {
        question: "What has keys but can't open locks?",
        answer: "A Piano"
      },
      {
        question: "What can travel around the world while staying in a corner?",
        answer: "A Stamp"
      },
      {
        question: "I have keys but open no locks. I have space but no room. You can enter, but you can't go inside. What am I?",
        answer: "A Keyboard"
      },
      {
        question: "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
        answer: "A Fire"
      },
      {
        question: "What has one eye but can't see?",
        answer: "A Needle"
      },
      {
        question: "I'm tall when I'm young and short when I'm old. What am I?",
        answer: "A Candle"
      },
      {
        question: "What has keys but can't open locks?",
        answer: "A Piano"
      },
      {
        question: "What has keys but can't open locks?",
        answer: "A Piano"
      },
      {
        question: "What can travel around the world while staying in a corner?",
        answer: "A Stamp"
      },
      {
        question: "I have keys but open no locks. I have space but no room. You can enter, but you can't go inside. What am I?",
        answer: "A Keyboard"
      },
      {
        question: "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
        answer: "A Fire"
      },
      {
        question: "What has one eye but can't see?",
        answer: "A Needle"
      },
      {
        question: "I'm tall when I'm young and short when I'm old. What am I?",
        answer: "A Candle"
      },
      {
        question: "What has keys but can't open locks?",
        answer: "A Piano"
      },
      {
        question: "What has keys but can't open locks?",
        answer: "A Piano"
      },
      {
        question: "What can travel around the world while staying in a corner?",
        answer: "A Stamp"
      },
      {
        question: "I have keys but open no locks. I have space but no room. You can enter, but you can't go inside. What am I?",
        answer: "A Keyboard"
      },
      {
        question: "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
        answer: "A Fire"
      },
      {
        question: "What has one eye but can't see?",
        answer: "A Needle"
      },
      {
        question: "I'm tall when I'm young and short when I'm old. What am I?",
        answer: "A Candle"
      },
      // Add more brain teasers and answers here...
    ];
  
    function getRandomBrainTeaser() {
      const randomIndex = Math.floor(Math.random() * brainTeasers.length);
      brainTeaser = brainTeasers[randomIndex].question;
      answer = ""; // Clear the answer when showing a new teaser
    }
  
    function revealAnswer() {
      const currentTeaser = brainTeasers.find(teaser => teaser.question === brainTeaser);
      if (currentTeaser) {
        answer = currentTeaser.answer;
      }
    }
  
    // Initialize with a random brain teaser
    getRandomBrainTeaser();
  </script>
  
  <main>
    <h1>Daily Brain Teaser</h1>
    <p>{brainTeaser}</p>
    {#if answer}
      <p><strong>Answer:</strong> {answer}</p>
    {/if}
    <button on:click={getRandomBrainTeaser}>Get Another Teaser</button>
    <button on:click={revealAnswer}>Reveal Answer</button>
  </main>
  
  <style>
    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    p {
      font-size: 18px;
      margin-bottom: 20px;
    }
  
    strong {
      font-weight: bold;
    }
  
    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 10px;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  </style>
  