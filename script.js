function generateMainPage() {
    return `      
  <section class="nav">
    <button class="nav-button" id="main-button">MAIN</button>
    <button class="nav-button" id="about-button">ABOUT</button>
    <a href="#portfolio" class="nav-button" id="projects-button">PROJECTS</a>
  </section>

  <section class="mini-bio">
    <h1 class="title-text" id="kate-meng">KATE MENG</h1>
    <div class=mini-bio-boxes>
    <img class="grey-box" img src="images/portfolio-doodle.png">
    <p class="orange-box" id="mini-bio-text">I am an aspiring web developer.
      I go nuts over watching web pages 
      come to life and cool animal facts. 
      If you have one, you can tell it to me at 
      <a class="link" href="mailto:katemeng08@gmail.com?">katemeng08@gmail.com</a>
    </p>
  </div>
  </section>

  <section class="portfolio">
    <h2 class="title-text" id="portfolio">PORTFOLIO</h2>
    <div class=portfolio-boxes>
    <img class="grey-box" img src="images/betta.PNG">
    <p class="blue-box" id="betta-proj-text">
      <span class="project-title">Betta Fish Quiz</span> <br>
      <a class="link" href="https://ktmng.github.io/betta-fish-quiz-app/" target="_blank">Live Page</a> | <a class="link" href="https://github.com/ktmng/betta-fish-quiz-app" target="_blank">Github</a><br>
      <span class="italic">Technologies: HTML, CSS, JavaScript, jQuery</span><br>
      <br>
      An interactive quiz application that allows users to test their knowledge 
      about betta fish and how to care for them. The application tallies the user’s 
      score as they go, responds to their answers, and sends a custom message 
      based on the user’s score at the end. This application was created as an 
      assignment for Thinkful’s curriculum to showcase my capabilities with the 
      fundamentals of web development.
    </p>
  </div>

  <div class=portfolio-boxes>
  <img class="grey-box" img src="images/makeup.PNG">
  <p class="blue-box" id="makeup-proj-text">
    <span class="project-title">Make-Up Your Mind</span> <br>
    <a class="link" href="https://ktmng.github.io/make-up-your-mind/" target="_blank">Live Page</a> | <a class="link" href="https://github.com/ktmng/make-up-your-mind" target="_blank">Github</a><br>
    <span class="italic">Technologies: HTML, CSS, JavaScript, jQuery</span><br>
    <span class="italic">Built With: Youtube DATA API, Makeup API - Herokuapp</span><br>
    <br>
    An application for make-up lovers to search and view a variety of 
    products from different brands in addition to watching videos related 
    to what they searched for. Users can view the products along with their
    preset corresponding descriptions, prices, and links to purchase them. Users may also choose to view the videos either in the window or in a new tab by clicking the respective links.
  </p>
</div>
</section>`;
}

function renderMainPage() {
  const addToHtml = generateMainPage();
  $('.main').html(addToHtml);
}

function handleMainButton() {
  $('.main').on('click', '#main-button', () => {
  renderMainPage();
  });
  console.log("handleMainButton ran");
}

function generateAboutPage() {
  return `
<section class="nav">
  <button class="nav-button" id="main-button">MAIN</button>
  <button class="nav-button" id="about-button">ABOUT</button>
  <a href="#portfolio" class="nav-button" id="projects-button">PROJECTS</a>
</section>

<section class="full-bio">
  <h2 class="title-text" id="more-about-me">MORE ABOUT ME</h2>
  <div class="about-boxes">
  <p class="orange-box">
  I’m a current student of Thinkful’s Full-Stack Web Development Bootcamp 
  and recently converted coding nerd. I couldn’t stop noticing how tech has 
  integrated itself, refined, and paved the way for so many fields outside its 
  own and simply wanted to be a part of it. I’m convinced I fall in love with 
  coding every time I find a solution and watch it run. And while I can’t resist 
  the gratification of seeing code manifest to a web page, what truly excites me 
  about web development is that it continually trains me to think differently and 
  approach what I see in new ways. 
  <br>
  <br>
  Before web development, I had an undergraduate degree in biology and worked
  as a registered behavioral technician for children with autism. From lab partners 
  to supervisors, there were a lot of people that taught me not only what it means 
  to work well on a team, but also what qualities I value in my team members. 
  I have always gotten along with all team members, but the ones I have noticed I tend to
  connect with better are those whom I can learn from. That being said, I would be 
  incredibly grateful and excited to work on a team with great programmers.  
  <br>
  <br>
  Web development is without a doubt high up on the list of things I enjoy, but 
  I don’t think it could ever beat watching nature documentaries narrated by David 
  Attenborough, conquering my friends at board games, pretending to perform at a 
  live concert, or suddenly finding inspiration to create new art. 
  </p>
  </div>
</section>

<section class="contact">
  <h2 class="title-text" id="contact">CONTACT</h2>
  <div class="about-boxes">
  <p class="blue-box" id="contact-info">
  email: <a class="link" href="mailto:katemeng08@gmail.com?">katemeng08@gmail.com</a>
  <br>
  <a class="link" target="_blank" href="https://www.linkedin.com/in/kate-meng/">linkedin</a>
  <br>
  <a class="link" target="_blank" href="https://github.com/ktmng">github</a>
  </p>
  </div>
</section>
  `;
}

function renderAboutPage() {
  const addToHtml = generateAboutPage();
  $('.main').html(addToHtml);
}

function handleAboutButton() {
  $('.main').on('click', '#about-button', () => {
    renderAboutPage();
    });
    console.log("handleAboutButton ran");  
}

function handleProjectsButton() {
  $('.main').on('click', '#projects-button', () => {
    renderMainPage();
    });
    console.log("handleGithubButton ran");
}

function initPage() {
  renderMainPage();
  handleMainButton();
  handleAboutButton();
  handleProjectsButton();
}

$(initPage);