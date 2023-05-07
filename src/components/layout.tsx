import React, { useState, useEffect  } from 'react';
import type { AppProps } from 'next/app'
import {useRouter} from 'next/router';
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";

export default function Layout({ children }: {children:  React.ReactElement}) {
    const [path, setPath] = useState("");
    const router = useRouter();

    useEffect(() => {
      if (router.isReady) {
        setPath(router.pathname);
      }
    },[router.isReady]);

  return (
    <>
        <Navbar isBordered variant={'sticky'} maxWidth="fluid" containerCss={{
            flexDirection: "row-reverse",
            color: 'Azure',
            background: 'transparent !important'
        }}>
          <Navbar.Content  variant="underline">
            <Navbar.Link id="about" isActive={(path == "" || path == "/about") ? true : false} color="inherit" href="/about">
              About
            </Navbar.Link>
            <Navbar.Link id="skills" isActive={path == "/skills" ? true : false} color="inherit" href="/skills">
              Skills
            </Navbar.Link>
            <Navbar.Link id="experiences" isActive={path == "/experiences" ? true : false} color="inherit" href="/experiences">
              Experiences
            </Navbar.Link>

          </Navbar.Content>
        </Navbar>
        {children}
    </>
  );
}