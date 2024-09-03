'use client'

import { useLocalStorage } from '@/lib'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@mui/material'

export function ToggleTheme() {
  const [palette, setPalette] = useLocalStorage('palette')

  console.log({ palette })

  return (
    <IconButton
      size="small"
      onClick={() => {
        if (palette === 'dark') {
          setPalette('light')
        } else {
          setPalette('dark')
        }
      }}
    >
      <FontAwesomeIcon
        size="1x"
        width="1em"
        icon={palette === 'dark' ? faMoon : faSun}
      />
    </IconButton>
  )
}
