import Hero from "./hero";
import ToggleTheme from "../components/ToggleTheme";

import { Rubik } from 'next/font/google'
const rubik = Rubik({
  subsets:['latin'],
  weight: ['400'],
})

export default function Home() {
  return (
    <main className={rubik.className}>
      <ToggleTheme />
      <Hero />
    </main>
  )
}