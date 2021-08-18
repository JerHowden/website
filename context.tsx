import { createContext, useContext } from 'react';

const SpotifyContext = createContext({
	setCallback: function(state: string | string[] | undefined, code: string | string[] | undefined){},
	accessCode: ''
})

export default function AppWrapper(props: { children: JSX.Element }) {

	let accessCode = ''

	function setCallback(state: string | string[] | undefined, code: string | string[] | undefined) {
		if(!state || !code) return
		if(state !== process.env.SPOTIFY_STATE) {
			console.error('STATES DONT MATCH ON SPOTIFY AUTHORIZATION')
		} else {
			accessCode = code.toString()
		}
	}

	return (
		<SpotifyContext.Provider value={{
			setCallback: setCallback,
			accessCode: accessCode
		}}>
			{props.children}
		</SpotifyContext.Provider>
	);
}

export function useSpotifyContext() {
	return useContext(SpotifyContext)
}
