import React from 'react'
import { Header } from './components/Header'

import style from './MainPage.module.css'
import { Skills } from './components/Skills'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Contacts } from './components/Contacts'

export const MainPage = () => {
  return (
    <div className={style.container}>
      <Header />
      <Skills />
      <About />
      <Portfolio />
      <Contacts />
    </div>
  )
}
