import { FC } from 'react'

import s from './homePage.module.scss'
import { Hero } from './components/Hero/Hero'
import { Info } from './components/Info/Info'

export const HomePage: FC = () => {
  return (
    <main className={s.homePage}>
      <Hero />
      <Info />
    </main>
  )
}
