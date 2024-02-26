import React, { useState, useEffect, useMemo } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Navbar, NavbarContent, NavbarItem, Button, Card, Radio, Link } from "@nextui-org/react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactElement }) {
    const [path, setPath] = useState("");
    const router = useRouter();
    const [init, setInit] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        console.log(`Route changed to: ${pathname}`);
    }, [pathname]);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "#294573",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    useEffect(() => {
        if (router.isReady) {
            setPath(router.pathname);
        }
    }, [router.isReady]);

    return (
        <>
            {init && <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />}
            <div className="absolute">
                <Navbar
                    classNames={{
                        item: [
                            "flex",
                            "relative",
                            "h-full",
                            "items-center",
                            "font-bold",
                            "data-[active=true]:after:content-['']",
                            "data-[active=true]:after:absolute",
                            "data-[active=true]:after:bottom-0",
                            "data-[active=true]:after:left-0",
                            "data-[active=true]:after:right-0",
                            "data-[active=true]:after:h-[4px]",
                            "data-[active=true]:after:rounded-[4px]",
                            "data-[active=true]:after:bg-primary",
                        ],
                    }}
                    isBordered
                    maxWidth="full"
                    // containerCss={{
                    //     flexDirection: "row-reverse",
                    //     color: "Azure",
                    //     background: "transparent !important",
                    // }}
                >
                    <NavbarContent justify="end">
                        <NavbarItem isActive={pathname == "/" || pathname == "/about"}>
                            <Link id="about" color="foreground" href="/about">
                                About
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive={pathname == "/skills"}>
                            <Link id="skills" color="foreground" href="/skills">
                                Skills
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive={pathname == "/experiences"}>
                            <Link id="experiences" color="foreground" href="/experiences">
                                Experiences
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
                {children}
            </div>
        </>
    );
}
