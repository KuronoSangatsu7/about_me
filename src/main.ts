const comicImg = document.getElementById('comic') as HTMLImageElement
const dateDiv = document.getElementById('upload-date') as HTMLDivElement
const titleDiv = document.getElementById('comic-title') as HTMLDivElement

interface comicIDRequest {
    email: string,
}

const fetchComicID = async (comicIDRequestObj: comicIDRequest) : Promise<number> => {
    const params = new URLSearchParams(Object.entries(comicIDRequestObj))

    return fetch('https://fwd.innopolis.app/api/hw2?' + params.toString())
        .then(r => r.json())
}

interface comicObject {
    alt: string,
    day: string,
    img: string,
    link: string,
    month: string,
    news: string,
    num: number,
    safe_title: string,
    title: string,
    transcript: string,
    year: string,
}

const fetchComic = async (id: number) : Promise<comicObject> => {
    const paramsObj = {num: id.toString()}
    const params = new URLSearchParams(paramsObj)

    return fetch('https://getxkcd.vercel.app/api/comic?' + params.toString())
        .then(r => r.json())
}

const handleComicObj = (comicObj: comicObject) => {
    // Image
    const imgSrc = comicObj['img']

    // Title
    const imgTitle = comicObj['title']

    // Alt text
    const imgAlt = comicObj['alt']

    // Date
    const day = parseInt(comicObj['day'])
    const month = parseInt(comicObj['month']) - 1
    const year = parseInt(comicObj['year'])

    const imgDate = new Date(year, month, day)

    const imgDateStr = imgDate.toLocaleDateString('en-GB')

    comicImg.setAttribute('src', imgSrc)
    comicImg.setAttribute('title', imgTitle)
    comicImg.setAttribute('alt', imgAlt)

    dateDiv.innerText = "Upload Date: " + imgDateStr
    titleDiv.innerText = imgTitle
}

const loadComic = async (): Promise<void> => {
    const emailRequest = {
        email: 'j.totanji@innopolis.university',
    }

    const comicID = await fetchComicID(emailRequest)

    const comicObj = await fetchComic(comicID)

    handleComicObj(comicObj)
}

loadComic()
