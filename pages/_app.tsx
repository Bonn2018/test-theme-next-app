import { ThemeProvider } from '@peculiar/react-components';

import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (<ThemeProvider theme={{ color: { primary: '5EBC54', secondary: '377FF4' }}}><Component {...pageProps} /></ThemeProvider>);
}

export default MyApp
