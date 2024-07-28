import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { Block } from '../Block'

import { Icon } from '../../../../UI'

export const Skills = () => {
  return (
    <Block isBackground={false}>
      <>
        <h2 className='m-0'>Навыки</h2>
        <p>Использую следующий стек технологии</p>
        <Container className='py-4 px-0 m-0'>
          <Row className='d-flex flex-row' style={{ gap: '108px' }}>
            <Col className='d-flex align-middle justify-content-start gap-3 m-0'>
              <Icon.ReactIcon />
              <h3 className='m-0'>React</h3>
            </Col>
            <Col className='d-flex align-items-center justify-content-center gap-3'>
              <Icon.TSIcon />
              <h3 className='m-0'>TypeScript</h3>
            </Col>
            <Col className='d-flex align-items-center justify-content-center gap-3'>
              <Icon.WebpackIcon />
              <h3 className='m-0'>Webpack</h3>
            </Col>
            <Col className='d-flex align-items-center justify-content-center gap-3'>
              <Icon.ReduxIcon />
              <h3 className='m-0'>Redux</h3>
            </Col>
          </Row>
        </Container>
      </>
    </Block>
  )
}
