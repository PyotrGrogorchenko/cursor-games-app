import React, { FC } from 'react'
import { withStyles } from '@material-ui/core'
import { conditionRequestSelector } from '@store/selectors'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Props } from './types'
import { styles } from './styles'

const LinearLoader: FC<Props> = (props: Props) => {
  const { classes } = props
  const isRequest = conditionRequestSelector()
  return (
    <>
      {isRequest && <LinearProgress className={classes.root} color='secondary'/>}
    </>
  )
}
export const LinearLoaderTSX = withStyles(styles)(LinearLoader)
