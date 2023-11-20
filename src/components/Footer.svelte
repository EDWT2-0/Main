<script>
	let year = new Date().getFullYear();
  </script>
  
  <footer>
	<p>&copy; {year} Everydaywebthings - <a href="/privacypolicy" class="privacy-link">Privacy Policy</a></p>
  </footer>
  
  <style>
	/* Add your styling here */
	footer {
	  text-align: center;
	  padding: 10px 0;
	  border-top: 1px solid #ccc; /* Horizontal line separator */
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
	  color: blue; /* Set privacy policy link color to blue */
	  /* Other privacy policy link styles... */
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
		color: #00f; /* Change privacy policy link color to blue in dark mode */
		/* Other privacy policy link styles for dark mode... */
	  }
	}
  </style>
  