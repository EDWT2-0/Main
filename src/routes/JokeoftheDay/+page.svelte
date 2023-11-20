<!-- src/JokeOfTheDay.svelte -->

<head>
  <title>Joke of the Day - Everyday Web Things</title>
  <meta name="description" content="Brighten your day with our daily dose of humor. Enjoy a new joke every day from our 'Joke of the Day' collection." />
  <meta name="keywords" content="joke of the day, daily joke, humor, funny jokes, laughter, joke" />
</head>


<script>

import GoogleAds from '../../components/GoogleAds.svelte';

    let jokeIndex = 0;
  
    const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you get when you cross a snowman and a vampire? Frostbite!",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "How do you organize a space party? You 'planet'!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why did the math book look sad? Because it had too many problems.",
  "Did you hear about the cheese factory that exploded? There was nothing left but de-brie.",
  "I used to play piano by ear, but now I use my hands.",
  "Why did the bicycle fall over? Because it was two-tired!",
  "I'm on a seafood diet. I see food, and I eat it.",
  "I told my wife she was overreacting. She just flew off the handle.",
  "What did one wall say to the other wall? I'll meet you at the corner!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "I used to be a baker, but I couldn't make enough dough.",
  "How does a penguin build its house? Igloos it together!",
  "What do you get when you cross a snowman and a dog? Frostbite.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Why don't skeletons fight each other? They don't have the guts.",
  "I'm friends with all electricians. We have such a positive connection.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "I'm reading a book about anti-gravity. It's so good, I can't put it down!",
  "Why couldn't the bicycle find its way home? Because it lost its bearings!",
  "I'm friends with all gardeners. We have a lot of dirt on each other.",
  "Why did the scarecrow become a successful politician? Because he was outstanding in his field!",
  "I told my computer I needed a break, and now it won't stop sending me cookies.",
  "Parallel lines have it so easy. They're never gonna meet, but they have so much in common.",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why did the bicycle fall over? Because it was two-tired!",
  "What do you call a bear with no teeth? A gummy bear!",
  "I'm friends with all electricians. We have such a positive connection.",
  "What did the left eye say to the right eye? Between you and me, something smells.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I used to play piano by ear, but now I use my hands.",
  "Why did the math book look sad? Because it had too many problems.",
  "What do you get if you cross a vampire with a snowman? Frostbite!",
  "What kind of music do mummies listen to? Wrap music!",
];

  
    function getRandomJoke() {
      jokeIndex = Math.floor(Math.random() * jokes.length);
    }
  
    // Automatically update the joke every day (in milliseconds)
    const updateInterval = 24 * 60 * 60 * 1000; // 24 hours
  
    function updateJoke() {
      getRandomJoke();
    }
  
    // Initial joke update
    updateJoke();
  
    // Set up periodic joke updates
    setInterval(updateJoke, updateInterval);
  </script>
  
  <style>
    div {
      text-align: center;
      margin: 20px;
      background-color: #f7f7f7;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    h2 {
      font-size: 28px;
      color: #333;
      margin-bottom: 10px;
    }
  
    p {
      font-size: 20px;
      margin-top: 20px;
      color: #555;
    }
  </style>
  
  <div>
    <h2>Joke of the Day</h2>
    <p>{jokes[jokeIndex]}</p>
  </div>
  