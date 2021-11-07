import React, {
  FC, useEffect, useMemo, useRef, useState
} from 'react'
import { isGame } from '@games/common/utils/conditions'
import { cloneDeep } from 'lodash'
import { initialState, Props } from './types'
import { Container, Canvas } from './styles'
import { edge, header } from '../const'
import {
  drawGift, drawHeader, drawScreen, drawSnake
} from './utils'

let ctx: Ctx

const View: FC<Props> = (props: Props) => {
  const [state, setState] = useState(cloneDeep(initialState))
  const { model } = props
  const {
    height, width, gift, snake, condition, score, scoreBest
  } = model
  const ctxWidth = useMemo(() => edge * width, [])
  const ctxHeight = useMemo(() => edge * height + header, [])
  const refCanvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {}, [])

  useEffect(() => {
    if (refCanvas) ctx = refCanvas.current?.getContext('2d') as Ctx
  }, [refCanvas])

  useEffect(() => {
    drawScreen(ctx, model, { state, setState })
  }, [condition])

  useEffect(() => {
    if (!isGame(model)) return
    drawSnake(ctx, model, { state, setState })
  }, [snake])

  useEffect(() => {
    if (!isGame(model)) return
    drawGift(ctx, model)
  }, [gift])

  useEffect(() => {
    drawHeader(ctx, model)
  }, [score, scoreBest, condition])

  return (
    <Container>
      <Canvas
        id='canvas'
        width={ctxWidth}
        height={ctxHeight}
        ref={refCanvas}
      >
        Your browser is not supported canvas
      </Canvas>
    </Container>
  )
}

export const ViewTSX = View
