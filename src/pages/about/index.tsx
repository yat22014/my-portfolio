import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <main className='p-24'>
        <div className='hero-container'>
            <div className='div-container'>
                <h1>Hi, There! I am Frank Cheung.</h1>
                <h2>I am a Hong Konger and currently living in Hong Kong.</h2>
                <div className="description">
                    As a web developer, I participat different types of projects and learn a lot of skills and experenices from that.
                    Building frontend website based on design from designer, I also help to construct database schema for backend and then pass data back to frontend in different ways.
                </div>
                <div className='flex'>
                  <span className='icon'><a href="https://linkedin.com/in/frank-cheung-bba552186" target='__blank'><FaLinkedin /></a></span>
                  <span className='icon ml-4'><a href="https://github.com/yat22014" target='__blank'><FaGithub /></a></span>
                </div>
                <br />
                <div className='email'><span className='icon'><AiOutlineMail /> </span><span style={{marginLeft: "10px"}}>yat22010@gmail.com</span></div>
            </div>
            <div className='div-container'>
                <img className='profile-icon' src="/me.svg" />
            </div>
        </div>
      </main>
    </>
  )
}
