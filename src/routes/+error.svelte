<!-- 404.svelte -->
<script>
	export let error = "Page Not Found"; // Customizable error message
  </script>
  
  <main>
	<h1>{error}</h1>
	<p>Sorry, the page you are looking for does not exist.</p>
	<!-- You can add more content or customize the message here -->
  </main>
  
  <style>
	main {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  height: 40vh;
	  text-align: center;
	}
  
	h1 {
	  font-size: 3rem;
	  margin-bottom: 10px;
	}
  
	p {
	  font-size: 1.2rem;
	  color: #888;
	}
  </style>
  