<!-- routes/passwordgenerator/+page.svelte -->




<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Generator - Everyday Web Things</title>
  <meta name="description" content="Generate secure passwords with our online Random password generator. Create strong and unique passwords for your accounts with ease at Everyday Web Things." />
  <meta name="keywords" content="password generator, secure password, online password, random password, strong password, password creation, password tool" />
  <meta name="author" content="Everyday Web Things" />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <link rel="canonical" href="https://www.everydaywebthings.com/password-generator" />

  <meta property="og:title" content="Password Generator - Everyday Web Things" />
  <meta property="og:description" content="Generate secure and unique passwords with our online Random password generator. Protect your accounts with strong passwords at Everyday Web Things." />
  <meta property="og:image" content="https://www.everydaywebthings.com/images/og-image.jpg" />
  <meta property="og:url" content="https://www.everydaywebthings.com/password-generator" />
  <meta property="og:type" content="website" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@EverydayWebThings" />
  <meta name="twitter:title" content="Password Generator - Everyday Web Things" />
  <meta name="twitter:description" content="Generate secure and unique passwords with our online Random password generator. Protect your accounts with strong passwords at Everyday Web Things." />
  <meta name="twitter:image" content="https://www.everydaywebthings.com/images/twitter-image.jpg" />
  
</head>







<script>

  import { onMount } from 'svelte';
  import GoogleAds from '../../components/GoogleAds.svelte';

  let password = '';
  let length = 12;
  let includeUppercase = true;
  let includeNumbers = true;
  let includeSpecialChars = true;

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+{}[]|:;"<>,.?/~';

    let chars = lowercaseChars;
    if (includeUppercase) chars += uppercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecialChars) chars += specialChars;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars.charAt(randomIndex);
    }

    password = newPassword;
  };

  let page = '/passwordgenerator'; 

  // Function to track page view
  function trackPageView() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-H2EFXSCDHN', { 'page_path': page });
  }

  onMount(trackPageView);
</script>


<main>
  <h1> Password Generator</h1>
  <div>
    <label for="length">Password Length:</label>
    <input type="number" id="length" bind:value={length} min="1" />
  </div>
  <div>
    <label for="includeUppercase">Include Uppercase:</label>
    <input type="checkbox" id="includeUppercase" bind:checked={includeUppercase} />
  </div>
  <div>
    <label for="includeNumbers">Include Numbers:</label>
    <input type="checkbox" id="includeNumbers" bind:checked={includeNumbers} />
  </div>
  <div>
    <label for="includeSpecialChars">Include Special Characters:</label>
    <input type="checkbox" id="includeSpecialChars" bind:checked={includeSpecialChars} />
  </div>
  <button on:click={generatePassword}>Generate Password</button>
  <div class="result">
    <label for="password">Generated Password:</label>
    <input type="text" id="password" readonly value={password} />
  </div>
</main>



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

  .input-group {
    display: flex;
    align-items: center;
    margin: 10px;
  }

  label {
    flex: 1;
    text-align: left;
    margin-right: 10px;
  }

  input[type="number"] {
    width: 60px;
    padding: 8px;
  }

  .result {
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
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
  }

  button:hover {
    background-color: #2980b9;
  }

  input[type="text"] {
    font-size: 18px;
    margin-top: 10px;
    color: #333;
    padding: 8px;
    width: 100%;
  }
</style>

