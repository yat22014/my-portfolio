import React, { useState, useEffect  } from 'react';
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import Layout from '@/components/layout';
import '@/styles/globals.css';
import '@/styles/about.css';
import '@/styles/skills.css';
import '@/styles/experiences.css';

export default function App({ Component, pageProps }: AppProps) {

    return (
      <>
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </>
    );
}
