import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';
import { theme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
