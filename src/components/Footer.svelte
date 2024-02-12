<script>
	let year = new Date().getFullYear();
  
	function scrollToTop() {
	  window.scrollTo({
		top: 0,
		behavior: 'smooth'
	  });
	}
  </script>
  
  <footer>
	<p>&copy; {year} Everydaywebthings All rights reserved - <a href="/privacypolicy" class="privacy-link">Privacy Policy</a></p>
	<button on:click={scrollToTop} class="back-to-top">Back to Top</button>
  </footer>
  
  <style>
	/* Add your styling here */
	footer {
	  text-align: center;
	  padding: 20px 0;
	  /* Other styles... */
	}
  
	/* Styles for the link */
	a {
	  color: #333;
	  text-decoration: none;
	  /* Other link styles... */
	}
  
	/* Styles for the privacy policy link */
	.privacy-link {
	  color: #007bff; /* Set privacy policy link color to blue */
	  /* Other privacy policy link styles... */
	}
  
	/* Styles for the "Back to Top" button */
	.back-to-top {
	  margin-top: 10px; /* Adjust spacing */
	  padding: 8px 16px;
	  font-size: 14px;
	  border: none;
	  border-radius: 5px;
	  background-color: #007bff;
	  color: white;
	  cursor: pointer;
	  transition: background-color 0.3s ease;
	}
  
	.back-to-top:hover {
	  background-color: #0056b3;
	}
  
	/* Styles for dark mode */
	/* You can adapt these styles according to your dark mode requirements */
	@media (prefers-color-scheme: dark) {
	  footer {
		border-top-color: #888; /* Adjust the separator color for dark mode */
		color: #fff;
	  }
	  a {
		color: #fff;
	  }
	  .privacy-link {
		color: #007bff; /* Change privacy policy link color to blue in dark mode */
		/* Other privacy policy link styles for dark mode... */
	  }
	}
  </style>
  