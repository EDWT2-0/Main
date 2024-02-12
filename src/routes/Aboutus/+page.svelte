<!-- TeamPage.svelte -->

<head>
  <meta charset="UTF-8">
  <meta name="description" content="Learn more about the team behind everydaywebthings.com, a platform offering simple and useful web tools, apps, games, and more! Meet our team members - Sam Thibault (CEO), Jacob Macflee (Developer), Flavio Herrera (Developer), and more. Stay connected with us on social media.">
  <meta name="keywords" content="about us, our team, everydaywebthings, web tools, apps, games, team members, CEO, developer, Sam Thibault, Jacob Macflee, Flavio Herrera, social media">
  <meta name="author" content="EverydayWebThings">
  <title>About Us - Our Team </title>
</head>

<main>


	<h1>About us / Our Team</h1>
  
	<p>Welcome to everydaywebthings.com! we are like a web swiss army knife for simple and useful tools, Apps, Games and More!.</p>
  
	<section class="team-members">
	  <div class="team-member">
		<div class="profile-container">
		  <img src="Sampfpf.jpg" alt="Sam Thibault's profile picture" class="profile-image" />
		</div>
		<h2>Sam Thibault</h2>
		<p>Owner & Developer</p>
	  </div>
  
	 
	  
	  <!-- Add more team members following the same structure -->
	</section>
  
	<section class="follow-us">
	  <h2>Follow along!</h2>
	  <p>Stay connected with us on social media:</p>
	  <!-- Add social media icons or links here -->
	  <!-- Example: -->
	  <div class="social-icons">
		<a href="https://www.tiktok.com/@teebotech" target="_blank" rel="noopener noreferrer">
		  <img src="/twitter-icon.png" alt="Tiktok" />
		</a>
		<!-- Add more social media icons or links as needed -->
	  </div>
	</section>
  </main>
  
  
  
  
  <style>
/* General styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5; /* Light mode background color */
  color: #333; /* Light mode text color */
}

body.dark-mode {
  background-color: #333; /* Dark mode background color */
  color: #f5f5f5; /* Dark mode text color */
}

main {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
}

p {
  font-size: 18px;
  line-height: 1.6;
  color: inherit; /* Ensures text color adapts to the body's color */
}

/* Team members section */
.team-members {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.team-member {
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

body.dark-mode .team-member {
  background-color: #444; /* Dark mode profile background color */
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.1);
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin: 0 auto 15px;
  display: block;
  border: 3px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

p.position {
  font-size: 18px;
  color: #888;
  margin-bottom: 20px;
}

/* Follow us section */
.follow-us {
  margin-top: 40px;
  text-align: center;
}

.follow-us h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.follow-us p {
  font-size: 18px;
  margin-bottom: 30px;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.social-icons a {
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.social-icons img {
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease-in-out;
}

.social-icons a:hover,
.social-icons a:focus {
  transform: scale(1.1);
}

  </style>
  