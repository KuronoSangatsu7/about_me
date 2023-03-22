<script lang="ts">
	import Project from '../../components/Project.svelte';
	const projectsList = [
		{ projectName: 'TechOps', projectLink: 'https://github.com/KuronoSangatsu7/IT_Ticketing' },
		{ projectName: 'Game of Life', projectLink: 'https://github.com/KuronoSangatsu7/Game_of_Life' },
		{
			projectName: 'Expense Tracker',
			projectLink: 'https://github.com/KuronoSangatsu7/React_Expense_Tracker'
		}
	];
</script>

<div class="projects">
	<ul>
		{#each projectsList as projectItem}
			<Project projectName={projectItem.projectName} projectLink={projectItem.projectLink} />
		{/each}
	</ul>
</div>

<style>
	.projects > ul {
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 2em;
		align-items: center;
		justify-content: center;
		height: 500px;
	}
</style>
