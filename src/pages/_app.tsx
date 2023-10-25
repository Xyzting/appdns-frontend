import ContextApiProvider from '@/providers/ContextApiProvider';
import MaterialUiProvider from '@/providers/MaterialUiProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  function Header() {
    return (
      <Head>
        <title>DNS | Data Nilai Siswa</title>
        <meta name="description" content="DNS" />
        <link rel="icon" href="/logo/stu.png" />
      </Head>
    );
  }

  return (
    <MaterialUiProvider>
      <ContextApiProvider>
        <ReactQueryProvider>
          <Header />
          {ready ? <Component {...pageProps} /> : ""}
        </ReactQueryProvider>
      </ContextApiProvider>
    </MaterialUiProvider>
  );
}
