import ContextProvider from '@/providers/ContextProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app' 
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}