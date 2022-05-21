import './App.css';
import { Gifs, Header, Hint, Search } from './components';
import { useGifContext } from './hooks/useGifContext';
import { useKey } from './hooks/useKey';

function App() {
	const { gifShowing, fetchGifs } = useGifContext();

	useKey('Enter', fetchGifs);

	return (
		<div id='App'>
			<Header />
			{!gifShowing && <Search />}
			{gifShowing && <Gifs />}
			<Hint />
		</div>
	);
}

export default App;
