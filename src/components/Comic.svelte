<script lang="ts">
	import { onMount } from 'svelte';

	export let comicAPIAddress : string;

	interface comicIDRequest {
		email: string;
	}

	const fetchComicID = async (comicIDRequestObj: comicIDRequest): Promise<number> => {
		const params = new URLSearchParams(Object.entries(comicIDRequestObj));

		return fetch('https://fwd.innopolis.app/api/hw2?' + params.toString()).then((r) => r.json());
	};

	interface comicObject {
		alt: string;
		day: string;
		img: string;
		link: string;
		month: string;
		news: string;
		num: number;
		safe_title: string;
		title: string;
		transcript: string;
		year: string;
	}

	const fetchComic = async (id: number): Promise<comicObject> => {
		const paramsObj = { num: id.toString() };
		const params = new URLSearchParams(paramsObj);

		return fetch(comicAPIAddress + params.toString()).then((r) => r.json());
	};

	let imgSrc: string = 'https://via.placeholder.com/400x300/FFFFFF/000000';
	let imgTitle: string = 'Loading Title...';
	let imgAlt: string = 'Placeholder';
	let imgDateStr: string = 'Upload Date: ';

	onMount(async () => {
		const emailRequest = {
			email: 'j.totanji@innopolis.university'
		};

		const comicID = await fetchComicID(emailRequest);

		const comicObj = await fetchComic(comicID);

		imgSrc = comicObj.img;

		// Title
		imgTitle = comicObj.title;

		// Alt text
		imgAlt = comicObj.alt;

		// Date
		const day = parseInt(comicObj.day);
		const month = parseInt(comicObj.month) - 1;
		const year = parseInt(comicObj.year);

		const imgDate = new Date(year, month, day);

		imgDateStr = imgDateStr + imgDate.toLocaleDateString('en-GB');
	});
</script>

<div class="comic-stuff">
	<div id="comic-title">{imgTitle}</div>
	<img id="comic" src={imgSrc} alt={imgAlt} />
	<div id="upload-date">{imgDateStr}</div>
</div>

<style>
	.comic-stuff {
		display: flex;
		flex-direction: column;
		gap: 10px;
		justify-content: center;
		align-items: center;
		flex: 1;
		padding: 1em;
	}

	#comic-title {
		align-self: center;
	}
</style>
