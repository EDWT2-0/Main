<!-- Button.svelte -->
<script>
  let buttonText = "Push the Button";

  function handleClick() {
    // Change the text to something unexpected
    buttonText = "Hmm...";

    // Simulate a random delay before revealing the surprise
    setTimeout(() => {
      const randomNumber = Math.random();

      // Choose a random action based on the random number
      if (randomNumber < 0.2) {
        // Rickroll
        buttonText = "You've been Rickrolled! 🎉";
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
      } else if (randomNumber < 0.4) {
        // Cat GIF
        buttonText = "Cat attack! 🐱";
        window.open("https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", "_blank");
      } else if (randomNumber < 0.6) {
        // Secret message
        buttonText = "1";
        alert("1");
      } else {
        // unhinged Duolingo Reminder
        buttonText = "Unhinged Duolingo Reminder!";
        const messages = [
          "The Duolingo Owl is watching... always watching...",
          "Duolingo is not just an app, it's a lifestyle. A terrifying lifestyle.",
          "Do your Duolingo or prepare to face the consequences! 🦉",
          "Your language skills are subpar. The Duolingo Owl is displeased.",
          "Duolingo wants your soul... and your verb conjugations.",
          "Ignoring Duolingo is like ignoring a hungry crocodile... bad idea!",
          "Duolingo is coming for you... and it's bringing flashcards!"
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        alert(`⚠️ Duolingo Reminder ⚠️\n\n${randomMessage}`);
      }
    }, 2000); // Change the delay time as needed
  }
</script>

<button on:click={handleClick}>{buttonText}</button>
