

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>History Quiz</title>
  <meta name="description" content="Journey through time with our online history quiz. Test your knowledge of historical events, figures, and civilizations in an engaging quiz format." />
  <meta name="keywords" content="history quiz, world history, online quiz, historical knowledge" />
</head>



<script>
    let questionsPool = [
      // Middle School
      { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "George Washington", "John Adams", "Abraham Lincoln"], correctAnswer: "George Washington" },
      { question: "In which year did Christopher Columbus first arrive in the Americas?", options: ["1492", "1500", "1600", "1700"], correctAnswer: "1492" },
      { question: "What ancient civilization built the pyramids in Egypt?", options: ["Greek", "Roman", "Egyptian", "Mayan"], correctAnswer: "Egyptian" },
      { question: "Who is known for leading the Civil Rights Movement in the United States?", options: ["Malcolm X", "Martin Luther King Jr.", "Rosa Parks", "Harriet Tubman"], correctAnswer: "Martin Luther King Jr." },
      { question: "Which war was fought between the Northern and Southern states in the United States?", options: ["World War I", "American Revolution", "Civil War", "Vietnam War"], correctAnswer: "Civil War" },
      { question: "What event marked the beginning of World War II?", options: ["Pearl Harbor", "D-Day", "The Great Depression", "The Treaty of Versailles"], correctAnswer: "Pearl Harbor" },
      { question: "Who wrote the 'Declaration of Independence'?", options: ["George Washington", "Thomas Jefferson", "John Adams", "James Madison"], correctAnswer: "Thomas Jefferson" },
      { question: "What ancient civilization is known for its philosophy, including the teachings of Socrates, Plato, and Aristotle?", options: ["Egyptian", "Mesopotamian", "Greek", "Roman"], correctAnswer: "Greek" },
      { question: "Which European explorer is credited with circumnavigating the globe?", options: ["Christopher Columbus", "Ferdinand Magellan", "Marco Polo", "John Cabot"], correctAnswer: "Ferdinand Magellan" },
      { question: "What was the main economic activity in the Southern colonies of the United States?", options: ["Fishing", "Mining", "Agriculture (Plantation farming)", "Manufacturing"], correctAnswer: "Agriculture (Plantation farming)" },
      { question: "Who was the ruler of ancient Egypt known for constructing the Great Pyramid of Giza?", options: ["Hatshepsut", "Cleopatra", "Ramesses II", "Khufu"], correctAnswer: "Khufu" },
      { question: "Which ancient civilization is credited with the invention of the wheel?", options: ["Sumerians", "Mayans", "Chinese", "Indus Valley Civilization"], correctAnswer: "Sumerians" },
      { question: "What was the significance of the Battle of Marathon in ancient Greece?", options: ["The defeat of Persia by Athens", "The Trojan War", "The establishment of democracy", "The conquest of Egypt"], correctAnswer: "The defeat of Persia by Athens" },
      { question: "Who was the famous nurse during the Crimean War and is considered the founder of modern nursing?", options: ["Clara Barton", "Florence Nightingale", "Mary Seacole", "Dorothea Dix"], correctAnswer: "Florence Nightingale" },
      { question: "What ancient city was known for its Hanging Gardens, one of the Seven Wonders of the Ancient World?", options: ["Babylon", "Athens", "Rome", "Alexandria"], correctAnswer: "Babylon" },
      { question: "Which ancient empire was ruled by Julius Caesar, Augustus, and Nero?", options: ["Persian Empire", "Roman Empire", "Greek Empire", "Byzantine Empire"], correctAnswer: "Roman Empire" },
      { question: "Who was the famous queen of ancient Egypt known for her relationships with Julius Caesar and Mark Antony?", options: ["Hatshepsut", "Nefertiti", "Cleopatra", "Ankhesenamun"], correctAnswer: "Cleopatra" },
      { question: "What was the significance of the Battle of Hastings in 1066?", options: ["Norman conquest of England", "Crusades", "The Hundred Years' War", "The Reconquista"], correctAnswer: "Norman conquest of England" },
      { question: "Which medieval queen is known for her role in the Hundred Years' War and was later canonized as a saint?", options: ["Isabella I of Castile", "Joan of Arc", "Eleanor of Aquitaine", "Matilda of Tuscany"], correctAnswer: "Joan of Arc" },
  
      // High School
      { question: "Who was the leader of Nazi Germany during World War II?", options: ["Joseph Stalin", "Winston Churchill", "Benito Mussolini", "Adolf Hitler"], correctAnswer: "Adolf Hitler" },
      { question: "Which document established the framework of the United States government and is considered the supreme law of the land?", options: ["The Bill of Rights", "The Federalist Papers", "The Articles of Confederation", "The Constitution"], correctAnswer: "The Constitution" },
      { question: "What was the significance of the Battle of Gettysburg during the Civil War?", options: ["It was the first major battle of the war", "It marked the end of the war", "It was a turning point in favor of the Union", "It led to the Emancipation Proclamation"], correctAnswer: "It was a turning point in favor of the Union" },
      { question: "Who was the primary author of 'The Communist Manifesto'?", options: ["Vladimir Lenin", "Karl Marx", "Joseph Stalin", "Leon Trotsky"], correctAnswer: "Karl Marx" },
      { question: "What was the main cause of the French Revolution?", options: ["Economic inequality", "Religious conflict", "Foreign invasion", "Monarchy support"], correctAnswer: "Economic inequality" },
      { question: "Which U.S. president issued the Emancipation Proclamation during the Civil War?", options: ["Andrew Johnson", "Abraham Lincoln", "Ulysses S. Grant", "James Buchanan"], correctAnswer: "Abraham Lincoln" },
      { question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?", options: ["Vladimir Putin", "Mikhail Gorbachev", "Joseph Stalin", "Nikita Khrushchev"], correctAnswer: "Nikita Khrushchev" },
      { question: "What was the purpose of the Marshall Plan after World War II?", options: ["To rebuild Europe", "To contain the spread of communism", "To establish the United Nations", "To promote free trade"], correctAnswer: "To rebuild Europe" },
      { question: "What event is often considered the beginning of the Protestant Reformation?", options: ["The Council of Trent", "The Diet of Worms", "The Peace of Augsburg", "The Ninety-Five Theses"], correctAnswer: "The Ninety-Five Theses" },
      { question: "Who was the first woman to fly solo across the Atlantic Ocean?", options: ["Bessie Coleman", "Amelia Earhart", "Harriet Quimby", "Jacqueline Cochran"], correctAnswer: "Amelia Earhart" },
      { question: "What was the significance of the Battle of Saratoga during the American Revolution?", options: ["It was the final battle of the war", "It led to the Treaty of Paris", "It secured French support for the Americans", "It marked the British occupation of New York"], correctAnswer: "It secured French support for the Americans" },
      { question: "Who was the leader of the Soviet Union during the Russian Revolution of 1917?", options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Mikhail Gorbachev"], correctAnswer: "Vladimir Lenin" },
      { question: "What was the purpose of the Berlin Conference in 1884-1885?", options: ["To establish trade routes in Africa", "To divide Africa among European powers", "To negotiate peace in the Balkans", "To address the Irish Potato Famine"], correctAnswer: "To divide Africa among European powers" },
      { question: "Who was the primary author of the 'Federalist Papers'?", options: ["Thomas Jefferson", "Alexander Hamilton", "James Madison", "John Adams"], correctAnswer: "James Madison" },
      { question: "What was the outcome of the Mexican-American War in 1848?", options: ["Annexation of Texas", "Gadsden Purchase", "Treaty of Guadalupe Hidalgo", "Oregon Trail opened"], correctAnswer: "Treaty of Guadalupe Hidalgo" },
      { question: "Who was the famous leader of the Indian independence movement and advocate for nonviolent resistance?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Indira Gandhi"], correctAnswer: "Mahatma Gandhi" },
      { question: "What was the significance of the Treaty of Versailles after World War I?", options: ["Establishment of the League of Nations", "Annexation of Austria", "Formation of the United Nations", "Creation of the European Union"], correctAnswer: "Establishment of the League of Nations" },
      { question: "Who was the commander of the Confederate Army during the American Civil War?", options: ["Robert E. Lee", "Ulysses S. Grant", "Stonewall Jackson", "Jefferson Davis"], correctAnswer: "Robert E. Lee" },
      { question: "What was the purpose of the Louisiana Purchase in 1803?", options: ["To gain control of the Mississippi River", "To expand westward", "To establish trade with France", "To acquire Florida"], correctAnswer: "To gain control of the Mississippi River" },
      { question: "Who was the famous nurse during the Crimean War and is considered the founder of modern nursing?", options: ["Clara Barton", "Florence Nightingale", "Mary Seacole", "Dorothea Dix"], correctAnswer: "Florence Nightingale" },
      { question: "What ancient city was known for its Hanging Gardens, one of the Seven Wonders of the Ancient World?", options: ["Babylon", "Athens", "Rome", "Alexandria"], correctAnswer: "Babylon" },
      { question: "Which ancient empire was ruled by Julius Caesar, Augustus, and Nero?", options: ["Persian Empire", "Roman Empire", "Greek Empire", "Byzantine Empire"], correctAnswer: "Roman Empire" },
      { question: "Who was the famous queen of ancient Egypt known for her relationships with Julius Caesar and Mark Antony?", options: ["Hatshepsut", "Nefertiti", "Cleopatra", "Ankhesenamun"], correctAnswer: "Cleopatra" },
      { question: "What was the significance of the Battle of Hastings in 1066?", options: ["Norman conquest of England", "Crusades", "The Hundred Years' War", "The Reconquista"], correctAnswer: "Norman conquest of England" },
      { question: "Which medieval queen is known for her role in the Hundred Years' War and was later canonized as a saint?", options: ["Isabella I of Castile", "Joan of Arc", "Eleanor of Aquitaine", "Matilda of Tuscany"], correctAnswer: "Joan of Arc" },
  
    ];
  
    let questions = [];
    let currentQuestion = 0;
    let userAnswers = Array(questions.length).fill(null);
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let selectedQuestionCount = 10; // Default to 10 questions
    let quizStarted = false;
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    function startQuiz() {
    shuffleArray(questionsPool); // Shuffle the question pool
    questions = questionsPool.slice(0, selectedQuestionCount);
    currentQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    shuffleArray(questions[currentQuestion].options);
    quizStarted = true;
  }

  function handleAnswer(option) {
    userAnswers[currentQuestion] = option;

    // Move to the next question
    currentQuestion++;

    if (currentQuestion < questions.length) {
      shuffleArray(questions[currentQuestion].options);
    } else {
      // Quiz completed, you can handle the results here
      console.log("Quiz Completed:", userAnswers);

      // Calculate correct and incorrect answers
      for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].correctAnswer) {
          correctAnswers++;
        } else {
          incorrectAnswers++;
        }
      }
    }
  }

  function goBackToStart() {
    currentQuestion = 0;
    userAnswers = Array(questions.length).fill(null);
    correctAnswers = 0;
    incorrectAnswers = 0;
    quizStarted = false;
  }
</script>
  
  
  
  
  
  <style>
    main {
      text-align: center;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      max-width: 400px;
      margin: 0 auto;
    }
  
    h1 {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
    }
  
    p {
      margin: 10px 0;
    }
  
    button {
      background-color: #3498db;
      color: #fff;
      border: none;
      padding: 12px 24px;
      font-size: 18px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
      margin-top: 10px;
    }
  
    button:hover {
      background-color: #2980b9;
    }
  
    .question-container {
      text-align: left;
      margin-top: 20px;
    }
  
    .question {
      font-size: 18px;
      color: #333;
      margin-bottom: 10px;
    }
  
    .options {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    button.option-button {
      background-color: #3498db;
      color: #fff;
      border: none;
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
      margin-top: 10px;
      width: 100%;
    }
  
    button.option-button:hover {
      background-color: #2980b9;
    }
  
    .summary {
      margin-top: 20px;
      text-align: left;
    }
  
    .correct-answer {
      color: #4CAF50; /* Green */
    }
  
    .incorrect-answer {
      color: #FF5252; /* Red */
    }
  
    .back-button {
      background-color: #e74c3c;
      color: #fff;
      border: none;
      padding: 12px 24px;
      font-size: 18px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
      margin-top: 10px;
    }
  
    .back-button:hover {
      background-color: #c0392b;
    }
  
    .description {
      margin-top: 20px;
      font-size: 16px;
      color: #555;
    }
  </style>
  
  <main>
    {#if quizStarted}
      {#if currentQuestion < questions.length}
        <!-- Question Screen -->
        <h1>Question {currentQuestion + 1}</h1>
        <p>{questions[currentQuestion].question}</p>
        <div class="options">
          {#each questions[currentQuestion].options as option (option)}
            <button on:click={() => handleAnswer(option)} class="option-button">{option}</button>
          {/each}
        </div>
      {:else}
        <!-- Quiz Summary Screen -->
        <h1>Quiz Completed</h1>
        <p>Correct Answers: {correctAnswers}</p>
        <p>Incorrect Answers: {incorrectAnswers}</p>
        <h2>Incorrectly Answered Questions:</h2>
        {#each questions as { question, correctAnswer }, i}
          {#if userAnswers[i] !== correctAnswer}
            <p>{i + 1}. {question} - Correct Answer: {correctAnswer}</p>
          {/if}
        {/each}
        <button on:click={goBackToStart} class="back-button">Back to Start</button>
      {/if}
    {:else}
      <!-- Initial Screen -->
      <h1>General History Quiz</h1>
      <p>Select the number of questions:</p>
      <button on:click={() => { selectedQuestionCount = 5; startQuiz(); }}>5 Questions</button>
      <button on:click={() => { selectedQuestionCount = 10; startQuiz(); }}>10 Questions</button>
      <button on:click={() => { selectedQuestionCount = 20; startQuiz(); }}>20 Questions</button>
      <div class="description">
        <p>This quiz covers a variety of History topics from Middle school and High school.</p>
      </div>
    {/if}
  </main>