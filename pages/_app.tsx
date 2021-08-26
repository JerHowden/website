import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { config, library } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faAddressCard, faBlog, faHome, faProjectDiagram, faFileAlt, faDatabase } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faBars, faAddressCard, faBlog, faHome, faProjectDiagram, faFileAlt, faDatabase)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
