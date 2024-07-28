import React from 'react'
import cn from 'classnames'

import style from './Block.module.css'

type Props = {
  children: JSX.Element
  isBackground: boolean
}

export const Block = ({ children, isBackground }: Props) => {
  const optionsBlockStyles = cn({
    [style.blockContainerGray]: isBackground,
    [style.blockContainerWhite]: !isBackground,
  })

  return (
    <div className={optionsBlockStyles}>
      <div>{children}</div>
    </div>
  )
}
