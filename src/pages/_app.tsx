import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head' // Head 컴포넌트 추가

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" /> {/* favicon 링크 추가 */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}
