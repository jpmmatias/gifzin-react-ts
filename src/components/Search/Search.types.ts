import { Dispatch, SetStateAction } from 'react';

type SearchProps = {
	textSearch: string;
	fetchGifs: () => void;
	setTextSearch: Dispatch<SetStateAction<string>>;
};

export type { SearchProps };
