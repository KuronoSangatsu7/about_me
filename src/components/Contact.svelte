<script lang="ts">
	export let contactLink: string;
	export let contactIcon: string;
	export let contactID: string;
	export let contactAlt: string;
</script>

<a href={contactLink} target="_blank" id={contactID}>
	<img src={contactIcon} alt={contactAlt} class="contact-icon" />
</a>

<style>
	.contact-icon {
		height: 60px;
		width: 60px;
	}
</style>
