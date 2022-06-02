import { ReactNode, Dispatch, SetStateAction } from 'react';
export interface IGif {
	src: string;
}

export interface IGifContext {
	textSearch: string;
	reset: () => void;
	setAllGifs: Dispatch<SetStateAction<IGif[]>>;
	setGifShowing: Dispatch<SetStateAction<boolean>>;
	setTextSearch: Dispatch<SetStateAction<string>>;
	gifShowing: boolean;
	allGifs: IGif[];
	fetchGifs: () => Promise<void>;
}

export interface GifProviderProps {
	children: ReactNode;
}
