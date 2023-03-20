<script lang="ts">
	import NavBar from '../components/NavBar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="content">
	<NavBar />
	<slot />
	<Footer />
</div>

<style>
	.content {
		background-color: #784b91;
		height: 100%;
		overflow: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.content::-webkit-scrollbar {
		display: none;
	}
</style>
