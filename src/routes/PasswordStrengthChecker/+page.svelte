

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
    /* Add your CSS styles here (same styles as provided) */
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
  
    label {
      font-size: 20px;
      color: #333;
      margin-right: 10px;
    }
  
    input {
      font-size: 18px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
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
    <h1>Password Strength Checker</h1>
    <label for="password">Password:</label>
    <input type="text" id="password" bind:value={password} on:input={checkPasswordStrength} />
  
    <p>Strength: {strength}</p>
  </div>
  