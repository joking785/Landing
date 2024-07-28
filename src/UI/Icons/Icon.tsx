import React from 'react'
import { Suspense, lazy, FC, PropsWithChildren } from 'react'
import { LoaderDots } from '../LoaderDots'

const ReactIcon = lazy(() => import('./Components/React'))
const TSIcon = lazy(() => import('./Components/TSIcon'))
const WebpackIcon = lazy(() => import('./Components/Webpack'))
const DockerIcon = lazy(() => import('./Components/Docker'))
const Telegram = lazy(() => import('./Components/Telegram'))
const Yandex = lazy(() => import('./Components/Yandex'))

const IconWrapper: FC<PropsWithChildren<unknown>> = (props) => (
  <Suspense fallback={<LoaderDots />}>{props.children}</Suspense>
)

const Icon = {
  ReactIcon: () => (
    <IconWrapper>
      <ReactIcon />
    </IconWrapper>
  ),
  TSIcon: () => (
    <IconWrapper>
      <TSIcon />
    </IconWrapper>
  ),
  WebpackIcon: () => (
    <IconWrapper>
      <WebpackIcon />
    </IconWrapper>
  ),
  DockerIcon: () => (
    <IconWrapper>
      <DockerIcon />
    </IconWrapper>
  ),
  Telegram: () => (
    <IconWrapper>
      <Telegram />
    </IconWrapper>
  ),
  Yandex: () => (
    <IconWrapper>
      <Yandex />
    </IconWrapper>
  ),
}

export default Icon
