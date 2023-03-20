<script lang="ts">
	import gitHubLogo from '../public/github.png';
	import telegramLogo from '../public/telegram.png';
	import linkedinLogo from '../public/linkedin.png';
	import mailLogo from '../public/mail.png';
</script>

<div class="contacts">
	<a href="https://github.com/KuronoSangatsu7" target="_blank" id="gh-link">
		<img src={gitHubLogo} alt="Github" class="contact-icon" />
	</a>

	<a href="https://www.linkedin.com/in/jaffar-totanji/" target="_blank" id="li-link">
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
	.contacts {
        position: fixed;
        bottom: 20px;
		display: flex;
		justify-content: center;
		gap: 20px;
        width: 100%;
	}

	.contact-icon {
		height: 60px;
		width: 60px;
	}
</style>
