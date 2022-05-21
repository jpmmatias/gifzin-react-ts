import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GifContextProvider } from './hooks/useGifContext';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<GifContextProvider>
			<App />
		</GifContextProvider>
	</React.StrictMode>
);
