<script lang="ts">
  import { onMount } from "svelte";

  interface comicIDRequest {
    email: string;
  }

  const fetchComicID = async (
    comicIDRequestObj: comicIDRequest
  ): Promise<number> => {
    const params = new URLSearchParams(Object.entries(comicIDRequestObj));

    return fetch("https://fwd.innopolis.app/api/hw2?" + params.toString()).then(
      (r) => r.json()
    );
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

    return fetch(
      "https://getxkcd.vercel.app/api/comic?" + params.toString()
    ).then((r) => r.json());
  };

  let imgSrc: string = "https://via.placeholder.com/400x300/FFFFFF/000000";
  let imgTitle: string = "Loading Title...";
  let imgAlt: string = "Placeholder";
  let imgDateStr: string = "Upload Date: ";

  onMount(async () => {
    const emailRequest = {
      email: "j.totanji@innopolis.university",
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

    imgDateStr = imgDateStr + imgDate.toLocaleDateString("en-GB");
  });
</script>

<div class="hw2">
  <div id="comic-title">{imgTitle}</div>
  <img id="comic" src={imgSrc} alt={imgAlt} />
  <div id="upload-date">{imgDateStr}</div>
</div>

<style>
  .hw2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  #comic-title {
    align-self: center;
  }
</style>
