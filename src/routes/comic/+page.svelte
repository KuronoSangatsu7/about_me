<script lang="ts">
	import Comic from '../../components/Comic.svelte';
	const comicApi = 'https://getxkcd.vercel.app/api/comic?';
</script>

<Comic comicAPIAddress={comicApi} />
