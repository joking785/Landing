import React from 'react'

import { Block } from '../Block'
import { Image } from 'react-bootstrap'

import AIS from '../../../../Images/AIS.png'
import VTB from '../../../../Images/VTB.png'
import Cloud from '../../../../Images/Cloud.png'

export const Portfolio = () => {
  return (
    <Block isBackground={false}>
      <>
        <h2 className='m-0'>Портфолио</h2>
        <Image src={AIS} fluid />
        <p className='text-decoration-underline'>
          АИС - платформа для автоматизации процесса подбора персонала
        </p>
        <Image src={VTB} fluid />
        <p className='text-decoration-underline'>ЛК ВТБ ЭДО</p>
        <Image src={Cloud} fluid />
        <p className='text-decoration-underline'>Облачное хранилище</p>
      </>
    </Block>
  )
}
