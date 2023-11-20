<!-- src/DailyFunFact.svelte -->

<head>
  <title>Daily Fun Fact - Everyday Web Things</title>
  <meta name="description" content="Learn something new and intriguing every day with our 'Daily Fun Fact.' Explore a wide range of fascinating facts and expand your knowledge." />
  <meta name="keywords" content="daily fun fact, interesting facts, knowledge, trivia, daily facts, facts" />
</head>


<script>

import GoogleAds from '../../components/GoogleAds.svelte';

    let factIndex = 0;
  
    const funFacts = [
  "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
  "A group of flamingos is called a 'flamboyance.'",
  "The shortest war in history lasted only 38 to 45 minutes. It was fought between Britain and Zanzibar on August 27, 1896.",
  "Octopuses have three hearts: two pump blood to the gills, while the third pumps it to the rest of the body.",
  "The world's smallest mammal is the bumblebee bat, which weighs less than a penny.",
  "In Switzerland, it's illegal to own just one guinea pig because they are prone to loneliness.",
  "Bananas are berries, but strawberries are not!",
  "Cows have best friends and can become stressed when separated from them.",
  "The longest hiccuping spree lasted for 68 years!",
  "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of the iron in the heat.",
  "The average person will spend six months of their life waiting for red lights to turn green.",
  "Honeybees can recognize human faces.",
  "There is a species of jellyfish known as Turritopsis dohrnii, or the 'immortal jellyfish,' which is capable of reverting back to its juvenile form after reaching maturity.",
  "The 'D' in D-Day stands for 'Day.' It is used to denote the start date of military operations when the exact date is classified.",
  "A group of owls is called a 'parliament.'",
  "Astronauts' height can change in space due to the absence of gravity. They can grow up to 2 inches taller while in space.",
  "Armadillos always give birth to identical quadruplets.",
  "The unicorn is Scotland's national animal.",
  "The longest hiccuping spree lasted for 68 years!",
  "The world's largest desert is not the Sahara; it's Antarctica.",
  "In terms of mass, the total weight of ants on Earth is roughly equal to the total weight of all the humans on Earth.",
  "The 'Windy City' nickname for Chicago isn't about the weather; it originated from its politicians' long-windedness.",
  "A day on Venus is longer than a year on Venus. It takes Venus 243 Earth days to complete one rotation on its axis and only 225 Earth days to orbit the Sun.",
  "The oldest known living organism is a colony of seagrass called Posidonia oceanica, which is estimated to be over 100,000 years old.",
  "The world's largest pizza was over 13,000 square feet, made in Rome in 2012.",
  "Sloths only poop once a week.",
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
  "A hummingbird's heart can beat up to 1,260 times per minute.",
  "The Great Wall of China is not visible from space with the naked eye, despite the popular belief.",
  "A group of pugs is called a 'grumble.'",
  "Polar bears are left-handed (or, more accurately, left-pawed).",
  "There are more possible iterations of a game of chess than there are atoms in the observable universe.",
  "A day on Pluto is less than 7 hours long.",
  "Coca-Cola was originally green.",
  "A sneeze travels at about 100 miles per hour.",
  "There are more sheep in New Zealand than people.",
  "The longest recorded flight of a chicken is 13 seconds.",
  "The dot over the letter 'i' is called a tittle.",
  "The longest word in the English language without a vowel is 'rhythms.'",
  "The first recorded game of baseball was played in 1846 in Hoboken, New Jersey.",
  "A baby kangaroo is called a 'joey.'",
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
  "The world's largest pizza was over 13,000 square feet, made in Rome in 2012.",
  "Sloths only poop once a week.",
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
  "A hummingbird's heart can beat up to 1,260 times per minute.",
  "The Great Wall of China is not visible from space with the naked eye, despite the popular belief.",
  "A group of pugs is called a 'grumble.'",
    ];
  
    function getRandomFact() {
      factIndex = Math.floor(Math.random() * funFacts.length);
    }
  
    // Automatically update the fun fact every day (in milliseconds)
    const updateInterval = 24 * 60 * 60 * 1000; // 24 hours
  
    function updateFunFact() {
      getRandomFact();
    }
  
    // Initial fun fact update
    updateFunFact();
  
    // Set up periodic fun fact updates
    setInterval(updateFunFact, updateInterval);
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
    <h2>Daily Fun Fact</h2>
    <p>{funFacts[factIndex]}</p>
  </div>
  