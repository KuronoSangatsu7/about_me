<script lang="ts">
	import gitHubLogo from '../public/github.png';
	import telegramLogo from '../public/telegram.png';
	import linkedinLogo from '../public/linkedin.png';
	import mailLogo from '../public/mail.png';
	import Contact from './Contact.svelte';
	import { each } from 'svelte/internal';

	const contactsList = [
		{
			contactLink: 'https://github.com/KuronoSangatsu7',
			contactIcon: gitHubLogo,
			contactID: 'gh-link',
			contactAlt: 'Github'
		},
		{
			contactLink: 'https://www.linkedin.com/in/jaffar-totanji/',
			contactIcon: linkedinLogo,
			contactID: 'li-link',
			contactAlt: 'LinkedIn'
		},
		{
			contactLink: 'https://t.me/KuroHata7',
			contactIcon: telegramLogo,
			contactID: 'tg-link',
			contactAlt: 'Telegram'
		},
		{
			contactLink: 'mailto:jaafarti@gmail.com',
			contactIcon: mailLogo,
			contactID: 'email',
			contactAlt: 'Mail'
		}
	];
</script>

<div class="contacts">
	{#each contactsList as contactItem}
		<Contact
			contactLink={contactItem.contactLink}
			contactIcon={contactItem.contactIcon}
			contactAlt={contactItem.contactAlt}
			contactID={contactItem.contactID}
		/>
	{/each}
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
</style>
