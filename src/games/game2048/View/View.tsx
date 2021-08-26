import React, {
  FC, useEffect, useMemo, useRef, useState
} from 'react'
import { Box, withStyles } from '@material-ui/core'
import { cloneDeep } from 'lodash'
import { isGame } from '@games/aux/utils/conditions'
import { styles } from './styles'
import { initialState, Props } from './types'
import { edge, header } from '../const'
import {
  drawHeader, drawScreen
} from './utils'

let ctx: Ctx

const View: FC<Props> = (props: Props) => {
  const [state, setState] = useState(cloneDeep(initialState))
  const { classes, model } = props
  const {
    height, width, condition, score, items
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
    drawHeader(ctx, model)
  }, [score, condition])

  useEffect(() => {
    if (!isGame(model)) return
    drawScreen(ctx, model, { state, setState })
  }, [items])

  return (
    <Box className={classes.root}>
      <canvas
        id='canvas'
        className={classes.canvas}
        width={ctxWidth}
        height={ctxHeight}
        ref={refCanvas}
      >
        Your browser is not supported canvas
      </canvas>
    </Box>
  )
}

export const ViewTSX = withStyles(styles)(View)
