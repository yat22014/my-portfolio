import React, { useState, useEffect  } from 'react';
import type { AppProps } from 'next/app'
import {useRouter} from 'next/router';
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import Layout from '@/components/layout';
import '@/styles/globals.css';
import '@/styles/about.css';
import '@/styles/skills.css';
import '@/styles/experiences.css';
import { NextUIProvider } from '@nextui-org/react';

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
