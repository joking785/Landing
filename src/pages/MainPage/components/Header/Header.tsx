import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

import style from './Header.module.css'

import avatar from '../../../../Images/Avatar.png'

export const Header = () => {
  return (
    <div className={style.container}>
      <Navbar
        expand='lg'
        variant='light'
        bg='light'
        className='bg-white py-4 border-bottom border-dark'
      >
        <Nav className='d-flex gap-3 w-100 justify-content-between'>
          <Nav.Link href='/'>Главная</Nav.Link>
          <Nav.Link href='#about'>Обо мне</Nav.Link>
          <Nav.Link href='#skills'>Навыки</Nav.Link>
          <Nav.Link href='#portfolio'>Портфолио</Nav.Link>
          <Nav.Link href='#contacts'>Контакты</Nav.Link>
        </Nav>
      </Navbar>
      <Container className='py-4 px-0 h-50'>
        <Row>
          <Col className='d-flex align-items-center '>
            <h1 className='m-0'>
              Кирилл
              <br />
              Милохин
            </h1>
          </Col>
          <Col className='d-flex align-items-center justify-content-center'>
            <p className='m-0'>Frontend разработчик</p>
          </Col>
          <Col className='d-flex justify-content-end'>
            <Image src={avatar} fluid roundedCircle className='w-75' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
