

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Strength Checker</title>
  <meta name="description" content="Evaluate the strength of your passwords with our online password strength checker. Enhance your online security with strong and secure passwords." />
  <meta name="keywords" content="password strength checker, password security, strong passwords, online security" />
</head>


<!-- PasswordStrengthChecker.svelte -->

<script>
    let password = '';
    let strength = 'Weak';
  
    function checkPasswordStrength() {
      const capitalCount = (password.match(/[A-Z]/g) || []).length;
      const digitCount = (password.match(/\d/g) || []).length;
  
      if (capitalCount >= 1 && digitCount >= 1) {
        strength = 'Strong';
      } else if (capitalCount >= 2 && digitCount >= 2) {
        strength = 'Super Strong';
      } else {
        strength = 'Weak';
      }
    }
  </script>
  

  <style>
    :root {
      --background-light: #f7f7f7;
      --background-dark: #333;
      --text-light: #333;
      --text-dark: #f7f7f7;
      --button-light: #0078d4;
      --button-dark: #005ea2;
    }
  
    @media (prefers-color-scheme: dark) {
      :root {
        --background: var(--background-dark);
        --text: var(--text-dark);
        --button: var(--button-dark);
      }
  
      input[type="text"] {
        background-color: var(--button);
        color: white;
        border: none;
        border-radius: 5px;
        padding: 8px 12px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
  
      input[type="text"]:focus {
        outline: none;
      }
  
      input[type="text"]::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  
    /* Other styles */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: var(--background);
      color: var(--text);
    }
  
    div {
      text-align: center;
      margin-top: 20px;
    }
  
    h1 {
      font-size: 28px;
      margin-bottom: 15px;
    }
  
    label {
      margin-right: 10px;
    }
  
    input[type="text"] {
      font-size: 16px;
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
    }
  
    p {
      font-size: 18px;
      margin-bottom: 15px;
    }
  </style>
  
  <div>
    <h1>Password Strength Checker</h1>
    <label for="password">Password:</label>
    <input type="text" id="password" bind:value={password} on:input={checkPasswordStrength} />
  
    <p>Strength: {strength}</p>
  </div>
  