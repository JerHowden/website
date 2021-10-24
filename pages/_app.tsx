import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { config, library } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faAddressCard, faBlog, faHome, faProjectDiagram, faFileAlt, faDatabase, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faBars, faAddressCard, faBlog, faHome, faProjectDiagram, faFileAlt, faDatabase, faChevronUp, faChevronDown)

import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
	return <div className='flex flex-col items-center justify-between min-h-screen'>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</div>
}

export default MyApp
