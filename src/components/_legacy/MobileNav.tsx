import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faAddressCard,
  faBlog,
  faHome,
  faProjectDiagram,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons'

// pokemon go navigation

function MobileNav(): JSX.Element {
  function Button(btn: { href: string; icon: IconProp }): JSX.Element {
    return (
      <Link href={btn.href}>
        <a>
          <div>
            <FontAwesomeIcon icon={btn.icon} />
          </div>
        </a>
      </Link>
    )
  }

  return (
    <div className="fixed z-50 w-10 h-10 bg-red-700 rounded-md left-1/2 mobile-nav md:hidden bottom-1/2">
      {/* <div className='text-white' onClick={() => setOpen(prevOpen => !prevOpen)}>
                <FontAwesomeIcon icon='bars'/>
            </div> */}
      <div>
        <Button
          href="/about"
          icon={faAddressCard}
        />
      </div>
      <div>
        <Button
          href="/blog"
          icon={faBlog}
        />
      </div>
      <div>
        <Button
          href=""
          icon={faHome}
        />
      </div>
      <div>
        <Button
          href="/projects"
          icon={faProjectDiagram}
        />
      </div>
      <div>
        <Button
          href="/resume"
          icon={faFileAlt}
        />
      </div>
    </div>
  )
}

export default MobileNav
