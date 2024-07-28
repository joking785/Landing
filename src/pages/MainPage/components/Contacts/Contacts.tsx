import React from 'react'

import { Block } from '../Block'
import { Col, Container, Row } from 'react-bootstrap'
import { Icon } from '../../../../UI/Icons'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  example: string
  exampleRequired: string
}

export const Contacts = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <Block isBackground={true}>
      <>
        <h2 className='m-0'>Связаться со мной</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Container className='py-4 px-0 h-50'>
            <Row className='d-flex flex-row align-content-center w-50'>
              <Col className='d-flex p-0 gap-3 flex-row align-items-center'>
                <Icon.Telegram />
                <p className='m-0'>@yousno</p>
              </Col>
              <Col className='d-flex p-0 gap-3 flex-row align-items-center'>
                <Icon.Yandex />
                <p className='m-0'>jemholod@yandex.ru</p>
              </Col>
            </Row>
          </Container>
        </form>
      </>
    </Block>
  )
}
