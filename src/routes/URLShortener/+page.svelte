<!-- FeatureNotAvailable.svelte -->

<script>
  // You can customize the message and other properties as needed
  let message = "Sorry, this feature is not available right now.";
</script>

<main>
  <div class="container">
    <div class="content">
      <div class="exclamation">
        <span>!</span>
      </div>
      <h1>Feature Not Available</h1>
      <p>{message}</p>
    </div>
  </div>
</main>

<style>
  /* You can customize the styling here */
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh; /* Adjust the height as needed */
  }

  .container {
    text-align: center;
  }

  .content {
    padding: 20px;
  }

  .exclamation {
    font-size: 48px;
    animation: bounce 1s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: #888;
  }
</style>
