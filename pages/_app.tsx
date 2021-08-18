import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faAddressCard, faBlog, faHome, faProjectDiagram, faFileAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faBars, faAddressCard, faBlog, faHome, faProjectDiagram, faFileAlt)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
