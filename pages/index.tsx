import { Rubik } from 'next/font/google'
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400'],
})

import Hero from "@/containers/Hero";
import ToggleTheme from "@/components/ToggleTheme";
import AboutMe from "@/containers/AboutMe";
import Services from "@/containers/Services";
import Layout from "@/containers/Layout";
import ToggleColorTheme from "@/components/ToggleColorTheme";
import Sidebar from '@/containers/Sidebar';
import Navbar from '@/containers/Navbar';

export default function Home() {
  return (
    <main className={`${rubik.className} flex`}>
      <Navbar />
      <Sidebar />

      <ToggleTheme />
      <ToggleColorTheme />
      <div className='flex flex-col w-full lg:w-[calc(100vw-250px)] lg:ml-auto'>
        <Hero />

        <Layout id='ABOUT_ME'>
          <AboutMe />
        </Layout>

        <Layout id='SERVICES'>
          <Services />
        </Layout>

      </div>
    </main>
  )
}