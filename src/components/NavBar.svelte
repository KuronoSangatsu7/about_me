<script lang="ts">
	import gameLogo from '../public/game.svg';
</script>

<nav class="nav-bar">
	<div class="nav-item nav-logo">
		<img src={gameLogo} alt="Game Icon" class="icon" />
	</div>
	<a class="nav-item" href="/">Home</a>
	<a class="nav-item" href="/projects">Projects</a>
	<a class="nav-item" href="/comic">Comic?</a>
</nav>

<style>
	.icon {
		height: 60px;
		width: 60px;
	}

	.nav-bar {
		height: 50px;
		display: flex;
		background-color: burlywood;
		gap: 2em;
		padding: 5px;
		box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.23);
		z-index: 10;
		position: relative;
	}

	.nav-item {
		display: flex;
		align-items: center;
		color: black;
	}

	a:link,
	a:visited,
	a:active {
		text-decoration: none;
	}

	a:hover {
		color: #784b91;
	}

	.nav-logo {
		margin-bottom: 10px;
	}
</style>
