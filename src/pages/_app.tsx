import React, { useState, useEffect  } from 'react';
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import Layout from '@/components/layout';
import '@/styles/globals.css';
import '@/styles/about.css';
import '@/styles/skills.css';
import '@/styles/experiences.css';
import {useRouter} from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

    return (
      <>
        <NextUIProvider navigate={router.push}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </>
    );
}
