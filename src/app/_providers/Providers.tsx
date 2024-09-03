import { ReactNode } from 'react'
import { ThemeRegistry } from '../_theme'
import { SWRProvider } from './SWRProvider'

type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeRegistry>
      <SWRProvider>{children}</SWRProvider>
    </ThemeRegistry>
  )
}
