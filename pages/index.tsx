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

export default function Home() {
  return (
    <main className={`${rubik.className} flex`}>
      <div className='fixed top-0 left-0 hidden lg:block w-[250px] bg-sidebar h-screen'>
        <Sidebar />
      </div>

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