import {
	createContext,
	useState,
	useCallback,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';
import { IGif } from '../@types';
import { useContext } from 'react';
import { validTextSearch } from '../utils/validTextSearch';

interface IGifContext {
	textSearch: string;
	reset: () => void;
	setAllGifs: Dispatch<SetStateAction<IGif[]>>;
	setGifShowing: Dispatch<SetStateAction<boolean>>;
	setTextSearch: Dispatch<SetStateAction<string>>;
	gifShowing: boolean;
	allGifs: IGif[];
	fetchGifs: () => Promise<void>;
}

interface GifProviderProps {
	children: ReactNode;
}

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
