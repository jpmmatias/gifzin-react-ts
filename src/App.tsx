import { useCallback, useState } from 'react';
import { IGif } from './@types';
import './App.css';
import { Gifs, Header, Hint, Search } from './components';

function App() {
	const [textSearch, setTextSearch] = useState('');
	const [gifShowing, setGifShowing] = useState(false);
	const [allGifs, setAllGifs] = useState([] as IGif[]);

	function reset() {
		setAllGifs([]);
		setGifShowing(false);
		setTextSearch('');
		return;
	}

	const fetchGifs = useCallback(async () => {
		try {
			const response = await fetch(
				`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${textSearch}&limit=50&offset=0&rating=PG-13&lang=pt`
			);

			const data = await response.json();
			const gifs = data.data;
			const randomNumber = Math.floor(Math.random() * gifs.length);
			const selectedGif = gifs[randomNumber];
			const currentGif: IGif = { src: selectedGif.images.original.mp4 };

			setAllGifs((oldGifs) => [...oldGifs, currentGif]);
			setGifShowing(true);
		} catch (error) {
			console.log(error);
		}
	}, [textSearch]);

	return (
		<div id='App'>
			<Header gifShowing={gifShowing} reset={reset} />

			{!gifShowing && (
				<Search
					fetchGifs={fetchGifs}
					textSearch={textSearch}
					setTextSearch={setTextSearch}
				/>
			)}

			{gifShowing && <Gifs allGifs={allGifs} fetchGifs={fetchGifs} />}
			<Hint textSearch={textSearch} gifShowing={gifShowing} />
		</div>
	);
}

export default App;
