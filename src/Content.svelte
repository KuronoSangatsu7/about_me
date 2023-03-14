<script lang="ts">
  import gitHubLogo from '../assets/github.png'
  import telegramLogo from '../assets/telegram.png'
  import linkedinLogo from '../assets/linkedin.png'
  import mailLogo from '../assets/mail.png'
</script>

<div class="bio">
  <h1>Hi, I'm Jaffar Totanji</h1>
  <div>I've never written a bio I'll think about one later</div>
</div>

<div class="projects">
  <ul>
    <li>Project_1</li>
    <li>Project_2</li>
    <li>Project_3</li>
  </ul>
</div>

<div class="contacts">
  <a href="https://github.com/KuronoSangatsu7" target="_blank" id="gh-link">
    <img src={gitHubLogo} alt="Github" class="contact-icon" />
  </a>

  <a
    href="https://www.linkedin.com/in/jaffar-totanji/"
    target="_blank"
    id="li-link"
  >
    <img src={linkedinLogo} alt="LinkedIn" class="contact-icon" />
  </a>

  <a href="https://t.me/KuroHata7" target="_blank" id="tg-link">
    <img src={telegramLogo} alt="Telegram" class="contact-icon" />
  </a>

  <a href="mailto:jaafarti@gmail.com" target="_blank" id="email">
    <img src={mailLogo} alt="Mail" class="contact-icon" />
  </a>
</div>

<style>
  .bio {
    text-align: center;
  }

  .projects > ul {
    padding: 0;
    list-style: none;
    margin: 0 auto 0 auto;
  }

  .contacts {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .contact-icon {
    height: 60px;
    width: 60px;
  }
</style>
