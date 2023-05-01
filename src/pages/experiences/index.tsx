import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Experiences() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        This is working experenices page
      </main>
    </>
  )
}
