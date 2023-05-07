import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Chrono } from "react-chrono";

const inter = Inter({ subsets: ['latin'] })

export default function Experiences() {
  const expList = [
    {
      title: "Instelar Limited",
      cardTitle: "Full stack developer - Instelar Limited",
      cardSubtitle: "07/2022 - present",
      cardDetailedText: ["paragraph1", "paragraph2"],
      timelineContent: <div>Custom content</div>,
    },
    {
      title: "COD Payment Limited",
      cardTitle: "Software Engineer - COD Payment Limited",
      cardSubtitle: "04/2021 - 07/2022",
      cardDetailedText: ["paragraph1", "paragraph2"],
      timelineContent: <div>Custom content</div>,
    },
    {
      title: "Midas FMS Limited",
      cardTitle: "Full stack developer - Midas FMS Limited",
      cardSubtitle: "10/2020 - 03/2021",
      cardDetailedText: ["paragraph1", "paragraph2"],
      timelineContent: <div>Custom content</div>,
    },
    {
      title: "Big Dipper Studio Limited",
      cardTitle: "Analyst programmer - Big Dipper Studio Limited",
      cardSubtitle: "08/2019 - 07/2020",
      cardDetailedText: ["paragraph1", "paragraph2"],
      timelineContent: <div>Custom content</div>,
    },
    {
      title: "Eastern Color International Limited",
      cardTitle: "Programmer - Eastern Color International Limited",
      cardSubtitle: "02/2017 - 07/2019",
      cardDetailedText: ["paragraph1", "paragraph2"],
      timelineContent: <div>Custom content</div>,
    }
  ];
  return (
    <>
      <main >
      <div className='timeline-div'>

      <Chrono items={expList} mode="VERTICAL" />

          </div>
      </main>
    </>
  )
}
