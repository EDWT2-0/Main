

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Language Translator</title>
  <meta name="description" content="Translate text between different languages with our online language translator. Break language barriers and communicate effectively in various languages." />
  <meta name="keywords" content="language translator, translation tool, multilingual communication, translate text" />
</head>



<!-- src/routes/Translator.svelte -->
<script>

import GoogleAds from '../../components/GoogleAds.svelte';

    let inputText = '';
    let selectedLanguage = '';
    let translatedText = '';
  
    const languages = [
      { code: 'en', name: 'English' },
      { code: 'es', name: 'Spanish' },
      { code: 'fr', name: 'French' },
      { code: 'de', name: 'German' },
      { code: 'it', name: 'Italian' },
      // Add more languages here...
    ];
  
    const translations = {
      en: {
        // English translations (case-insensitive keys)
        hello: 'Hello',
        goodbye: 'Goodbye',
        cat: 'Cat',
        dog: 'Dog',
        house: 'House',
        apple: 'Apple',
        banana: 'Banana',
        car: 'Car',
        book: 'Book',
        computer: 'Computer',
        flower: 'Flower',
        tree: 'Tree',
        music: 'Music',
        water: 'Water',
        sun: 'Sun',
        moon: 'Moon',
        friend: 'Friend',
        love: 'Love',
        smile: 'Smile',
        star: 'Star',
        // Add more words and translations here...
      },
      es: {
        // Spanish translations (case-insensitive keys)
        hello: 'Hola',
        goodbye: 'Adiós',
        cat: 'Gato',
        dog: 'Perro',
        house: 'Casa',
        apple: 'Manzana',
        banana: 'Plátano',
        car: 'Coche',
        book: 'Libro',
        computer: 'Computadora',
        flower: 'Flor',
        tree: 'Árbol',
        music: 'Música',
        water: 'Agua',
        sun: 'Sol',
        moon: 'Luna',
        friend: 'Amigo',
        love: 'Amor',
        smile: 'Sonrisa',
        star: 'Estrella',
        // Add more words and translations here...
      },
      fr: {
        // French translations (case-insensitive keys)
        hello: 'Bonjour',
        goodbye: 'Au revoir',
        cat: 'Chat',
        dog: 'Chien',
        house: 'Maison',
        apple: 'Pomme',
        banana: 'Banane',
        car: 'Voiture',
        book: 'Livre',
        computer: 'Ordinateur',
        flower: 'Fleur',
        tree: 'Arbre',
        music: 'Musique',
        water: 'Eau',
        sun: 'Soleil',
        moon: 'Lune',
        friend: 'Ami',
        love: 'Amour',
        smile: 'Sourire',
        star: 'Étoile',
        // Add more words and translations here...
      },
      de: {
        // German translations (case-insensitive keys)
        hello: 'Hallo',
        goodbye: 'Auf Wiedersehen',
        cat: 'Katze',
        dog: 'Hund',
        house: 'Haus',
        apple: 'Apfel',
        banana: 'Banane',
        car: 'Auto',
        book: 'Buch',
        computer: 'Computer',
        flower: 'Blume',
        tree: 'Baum',
        music: 'Musik',
        water: 'Wasser',
        sun: 'Sonne',
        moon: 'Mond',
        friend: 'Freund',
        love: 'Liebe',
        smile: 'Lächeln',
        star: 'Stern',
        // Add more words and translations here...
      },
      it: {
        // Italian translations (case-insensitive keys)
        hello: 'Ciao',
        goodbye: 'Arrivederci',
        cat: 'Gatto',
        dog: 'Cane',
        house: 'Casa',
        apple: 'Mela',
        banana: 'Banana',
        car: 'Auto',
        book: 'Libro',
        computer: 'Computer',
        flower: 'Fiore',
        tree: 'Albero',
        music: 'Musica',
        water: 'Acqua',
        sun: 'Sole',
        moon: 'Luna',
        friend: 'Amico',
        love: 'Amore',
        smile: 'Sorriso',
        star: 'Stella',
        // Add more words and translations here...
      },
      // Add translations for other languages here...
    };
  
    function translateText() {
      if (selectedLanguage && inputText) {
        const inputTextLower = inputText.toLowerCase();
        translatedText = translations[selectedLanguage][inputTextLower] || 'Translation not found';
      }
    }
  </script>
  
  <style>
    /* Add your CSS styles here */
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
  
    textarea {
      font-size: 18px;
      padding: 8px;
      width: 100%;
      margin-top: 10px;
    }
  
    select {
      font-size: 18px;
      padding: 8px;
      margin-top: 10px;
      width: 100%;
    }
  
    button {
      background-color: #3498db;
      color: #fff;
      border: none;
      padding: 12px 24px;
      font-size: 20px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
      margin-top: 10px;
    }
  
    button:hover {
      background-color: #2980b9;
    }
  
    p {
      font-size: 20px;
      margin-top: 20px;
      color: #555;
    }
  </style>
  
  <div>
    <h2>Language Translator</h2>
    <textarea rows="4" cols="50" bind:value={inputText} placeholder="Enter text to translate"></textarea>
    <select bind:value={selectedLanguage}>
      <option value="" disabled>Select a language</option>
      {#each languages as lang}
        <option value={lang.code}>{lang.name}</option>
      {/each}
    </select>
    <button on:click={translateText}>Translate</button>
    <p>{translatedText}</p>
  </div>
  