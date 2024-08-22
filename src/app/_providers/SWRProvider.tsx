'use client'

import { ReactNode } from 'react'
import { SWRConfig } from 'swr'

type SWRProviderProps = {
  children: ReactNode
}

export function SWRProvider({ children }: SWRProviderProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (url: RequestInfo) => fetch(url).then((res) => res.json()),
      }}
    >
      {children}
    </SWRConfig>
  )
}
