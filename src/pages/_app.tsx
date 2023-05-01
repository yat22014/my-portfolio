import '@/styles/globals.css'
import '@/styles/about.css'
import type { AppProps } from 'next/app'
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
    return (
      <>
        <Navbar isBordered variant={'sticky'} maxWidth="fluid" containerCss={{
          flexDirection: "row-reverse",
          color: 'Azure',
          background: 'transparent !important'
        }}>

          <Navbar.Content enableCursorHighlight variant="underline">
            <Navbar.Link color="inherit" href="#">
              About
            </Navbar.Link>
            <Navbar.Link color="inherit" href="#">
              Skills
            </Navbar.Link>
            <Navbar.Link color="inherit" href="#">
              Experiences
            </Navbar.Link>

          </Navbar.Content>
        </Navbar>
        <Component {...pageProps} />
      </>
    );
}
