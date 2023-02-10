import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/components/Header/header.component";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <Header />
          <Component {...pageProps} />
      </>
  )
}
