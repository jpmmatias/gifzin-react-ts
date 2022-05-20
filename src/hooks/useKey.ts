import { useRef, useEffect } from 'react';

function useKey(key: string, fun: () => void) {
	const functionRef = useRef(fun);

	useEffect(() => {
		functionRef.current = fun;
	});

	useEffect(() => {
		function handle(event: KeyboardEvent) {
			if (event.code === key) {
				functionRef.current();
			}
		}

		document.addEventListener('keypress', handle);

		return () => document.removeEventListener('keypress', handle);
	}, [key]);
}

export { useKey };
