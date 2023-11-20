<script>
    import { onMount } from 'svelte';
  
    let progress = 0;
    let message = '';
    let boxesVisible = false;
    let isAdminLoggedIn = false;
  
    const messages = [
      "Loading assets...",
      "Compiling scripts...",
      "Optimizing images...",
      "Finalizing layout...",
      "Almost there...",
      "Hold on just a bit more...",
      "Preparing for launch...",
      "Loading complete!",
    ];
  
    function loadSlowly() {
      const interval = setInterval(() => {
        if (isAdminLoggedIn) {
          clearInterval(interval);
          setTimeout(() => {
            boxesVisible = true;
          }, 30000);
        } else {
          progress += 1;
          if (progress <= 100) {
            message = messages[Math.floor(progress / 15)];
          } else {
            clearInterval(interval);
            setTimeout(() => {
              boxesVisible = true;
            }, 30000);
          }
        }
      }, 3000); // Increase this value to make it load slower
    }
  
    onMount(() => {
      loadSlowly();
    });
  
    function login() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      
      if (username === "Admin1" && password === "Admin1") {
        isAdminLoggedIn = true;
        progress = 100;
      } else {
        alert("Invalid credentials. Please try again.");
      }
    }
  </script>
  
  <div class="progress-container">
    <div class="progress-bar" style="width:{progress}%;"></div>
    <div class="progress-text">{progress}%</div>
  </div>
  
  <div class="message">{message}</div>
  
  {#if !isAdminLoggedIn}
    <div class="login-form">
      <h2>Admin Login</h2>
      <input type="text" id="username" placeholder="Username" />
      <input type="password" id="password" placeholder="Password" />
      <button on:click={login}>Login</button>
    </div>
  {/if}
  
  {#if boxesVisible}
    <div class="boxes">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  {/if}
  
  <style>
    /* ... (previous styles) */
  
    .login-form {
      text-align: center;
      margin-top: 20px;
    }
  
    input[type="text"],
    input[type="password"] {
      margin: 5px;
      padding: 5px;
      width: 200px;
    }
  
    button {
      padding: 5px 10px;
      background-color: #4caf50;
      color: white;
      border: none;
      cursor: pointer;
    }
  </style>
  