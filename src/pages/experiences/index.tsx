import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Chrono, TimelineItem } from "react-chrono";

const inter = Inter({ subsets: ["latin"] });

export default function Experiences() {
    const expList: TimelineItem[] = [
        {
            title: "06/2023",
            cardTitle: "Marvelconnect Technology Limited",
            cardSubtitle: "Senior developer",
            cardDetailedText: ["paragraph1", "paragraph2"],
            timelineContent: <div>
              Develop and maintain CMS for different companies while sometimes need to create mobile apps for that.
              Beside CMS, I also revamp self corporate website with a new design.
              Moreover, I finish a shopping platform for crawling Rakuten and Yahoo Acution website products.
            </div>,
            url: "https://www.marvelconnect.com/",
            media: {
              name: "marvelconnect",
              source: {
                url: "images/company/marvelconnect.svg"
              },
              type: "IMAGE"
            }
          },
        {
            title: "07/2022",
            cardTitle: "Instelar Limited",
            cardSubtitle: "Full stack developer",
            cardDetailedText: ["paragraph1", "paragraph2"],
            timelineContent: <div>
              Develop a system for solor energy company. The system can grab and collect data and bills from electricity company.
              Based on these data, system can form a bill and email to customers to ask money from them.
              Moreover, the admin staff can check different statistics based on the site where is installed the solar panel.
            </div>,
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
            timelineContent: <div>
              Maintain and develop shopping cart system to provide apis for miniapp of AlipayHK.
              Integrate business ideas and different teams features to shopping cart platform.
            </div>,
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
            timelineContent: <div>Develop online exhibition platform</div>,
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
            timelineContent: <div>
              Develop management system for a primary school. Teacher and school staff can use this system to manage school and student information.
              Also, develop and maintain different school websites and school systems
            </div>,
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
            timelineContent: <div>
              Assist to develop to 360° image software. Customer can upload images to it to form a 360° gif or video.
              Also help to develop online shopping cart webiste and a catalog app for it.
            </div>,
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
                                cardBgColor: "#E4F0FF",
                                titleColor: "white",
                                titleColorActive: "#70313E",
                            }}
                            // classNames={{
                            //   cardMedia: 'my-card-media',
                            // }}
                            scrollable 
                        />
                    </div>
                    <div className="flex justify-center mt-6">
                      <div className="">
                        <h2 className="text-2xl font-bold text-white">Participated Public Projects</h2>
                        <ul className="list-disc">
                          <li className="my-1 text-[#F9F871]"><a href="https://www.marvelconnect.com/" target="_blank" className="text-xl text-[#F9F871]">MarvelConnect Website</a></li>
                          <li className="my-1 text-[#F9F871]"><a href="https://rewardbuy.shop/en" target="_blank" className="text-xl text-[#F9F871]">Rewardbuy shopping platform</a></li>
                          <li className="my-1 text-[#F9F871]"><a href="https://www.mckln.edu.hk/" target="_blank" className="text-xl text-[#F9F871]">Methodist College school website</a></li>
                          <li className="my-1 text-[#F9F871]"><a href="https://swhps.edu.hk/" target="_blank" className="text-xl text-[#F9F871]">SWH public school website</a></li>
                          <li className="my-1 text-[#F9F871]"><a href="https://www.360img.net/en/" target="_blank" className="text-xl text-[#F9F871]">360 image system</a></li>
                        </ul>
                      </div>
                    </div>
                </div>
            </main>
        </>
    );
}
