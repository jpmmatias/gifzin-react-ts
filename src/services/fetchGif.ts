import { IGif } from '../@types';

export async function fetchGif(search: string) {
	try {
		const response = await fetch(
			`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${search}&limit=50&offset=0&rating=PG-13&lang=pt`
		);

		const data = await response.json();
		const gifs = data.data;
		const randomNumber = Math.floor(Math.random() * gifs.length);
		const selectedGif = gifs[randomNumber];
		const currentGif: IGif = { src: selectedGif.images.original.mp4 };

		return currentGif;
	} catch (err) {
		throw err;
	}
}
