import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Providers } from '@/store/providers'
import { useRouter } from 'next/router'

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// Create an Emotion cache instance
const cache = createCache({ key: 'css', prepend: true });

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const currentPath = router.asPath;

  // Extract the part of the URL you need
  const parts = currentPath.split('/');
  const part = parts[1];
  return (
    <Providers>
      <div className="flex flex-col">
        {part === 'nftmarketplace' ? <div></div> : <Header />}
        <CacheProvider value={cache}>
          {/* <ThemeProvider> */}
            <CssBaseline />
            <Component {...pageProps} />
          {/* </ThemeProvider> */}
        </CacheProvider>
        <Footer />
      </div>
    </Providers>
  )

}
