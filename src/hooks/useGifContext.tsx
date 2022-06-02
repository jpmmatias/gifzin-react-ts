import { createContext, useState, useCallback, useContext } from 'react';
import { IGif, IGifContext, GifProviderProps } from '../@types';
import { validTextSearch } from '../utils/validTextSearch';
import { fetchGif } from '../services/fetchGif';

const GifContext = createContext<IGifContext>({} as IGifContext);

export function GifContextProvider({ children }: GifProviderProps) {
	const [textSearch, setTextSearch] = useState('');
	const [gifShowing, setGifShowing] = useState(false);
	const [allGifs, setAllGifs] = useState([] as IGif[]);

	function reset() {
		setAllGifs([]);
		setGifShowing(false);
		setTextSearch('');
	}

	const fetchGifs = useCallback(async () => {
		if (!validTextSearch(textSearch)) return;

		const currentGif = await fetchGif(textSearch);

		setAllGifs((oldGifs) => [...oldGifs, currentGif]);
		setGifShowing(true);
	}, [textSearch]);

	return (
		<GifContext.Provider
			value={{
				fetchGifs,
				textSearch,
				gifShowing,
				setAllGifs,
				setGifShowing,
				setTextSearch,
				reset,
				allGifs,
			}}>
			{children}
		</GifContext.Provider>
	);
}

export function useGifContext() {
	return useContext(GifContext);
}
