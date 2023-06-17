import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Chrono, TimelineItem } from "react-chrono";

const inter = Inter({ subsets: ["latin"] });

export default function Experiences() {
    const expList: TimelineItem[] = [
        {
            title: "07/2022",
            cardTitle: "Instelar Limited",
            cardSubtitle: "Full stack developer",
            cardDetailedText: ["paragraph1", "paragraph2"],
            timelineContent: <div>Custom content</div>,
            url: "https://www.instelar.com/en",
            media: {
              name: "instelar",
              source: {
                url: "images/company/instelar.jpg"
              },
              type: "IMAGE"
            }
          },
          {
            title: "04/2021",
            cardTitle: "COD Payment Limited",
            cardSubtitle: "Software Engineer",
            cardDetailedText: ["paragraph1", "paragraph2"],
            timelineContent: <div>Custom content</div>,
            url: "https://www.codpayment.com/en",
            media: {
              name: "cod",
              source: {
                url: "images/company/cod.jpg"
              },
              type: "IMAGE"
            }
          },
          {
            title: "10/2020",
            cardTitle: "Midas FMS Limited",
            cardSubtitle: "Full stack developer",
            cardDetailedText: ["paragraph1", "paragraph2"],
            timelineContent: <div>Custom content</div>,
            url: "https://midas-asia.com/",
            media: {
              name: "midas",
              source: {
                url: "images/company/midas.png"
              },
              type: "IMAGE"
            }
          },
          {
            title: "08/2019",
            cardTitle: "Big Dipper Studio Limited",
            cardSubtitle: "Analyst programmer",
            cardDetailedText: ["paragraph1", "paragraph2"],
            timelineContent: <div>Custom content</div>,
            url: "https://www.bds.hk/",
            media: {
              name: "big dipper",
              source: {
                url: "images/company/bigDipper.jpg"
              },
              type: "IMAGE"
            }
          },
          {
            title: "02/2017",
            cardTitle: "Eastern Color International Limited",
            cardSubtitle: "Programmer",
            cardDetailedText: ["paragraph1", "paragraph2"],
            timelineContent: <div>Custom content</div>,
            url: "https://www.eastern-color.com/home",
            media: {
              name: "eastern color",
              source: {
                url: "images/company/easternColor.png"
              },
              type: "IMAGE"
            }
        },
    ];

    return (
        <>
            <main>
                <div className="timeline-container">
                    <div className="timeline-div">
                        <Chrono
                            items={expList}
                            mediaSettings={{ imageFit: 'contain' }}
                            mode="VERTICAL"
                            theme={{
                                // primary: "red",
                                // secondary: "blue",
                                cardBgColor: "yellow",
                                titleColor: "white",
                                titleColorActive: "blue",
                            }}
                            // classNames={{
                            //   cardMedia: 'my-card-media',
                            // }}
                            scrollable 
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
