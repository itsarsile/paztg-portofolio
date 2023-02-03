import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
      <Analytics />
    </MantineProvider>
  )
}

export default MyApp
