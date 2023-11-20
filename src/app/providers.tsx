// app/providers.tsx
'use client'

import extendTheme from '@/config/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({
    children
  }: {
  children: React.ReactNode
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={extendTheme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}