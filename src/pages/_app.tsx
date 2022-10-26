import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { ThemeProvider } from '@mui/material';
import theme from '@src/theme/theme';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import '@src/styles/globals.scss';

export const createMuiCache = () => createCache({ key: 'mui', prepend: true });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={createMuiCache()}>
        <Component {...pageProps} />
      </CacheProvider>
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
