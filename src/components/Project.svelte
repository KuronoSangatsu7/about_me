<script lang="ts">
    export let projectName: string;
    export let projectLink: string;
</script>


<li><a href={projectLink}>{projectName}</a></li>

<style>
	a:link,
	a:visited,
	a:active {
		text-decoration: none;
		color: black;
	}

	a:hover {
		color: burlywood;
	}
</style>
