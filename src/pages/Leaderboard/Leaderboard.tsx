import React, { FC, useEffect } from 'react'
import { withStyles, Typography } from '@material-ui/core'
import { useMainContext } from '@components/providers/MainProvider'
import { styles } from './styles'
import { Props } from './types'

const Leaderboard: FC<Props> = (props) => {
  const { classes } = props
  const { setTitle } = useMainContext()

  useEffect(() => {
    setTitle('Leaderboard')
  }, [])

  return (
    <div className={classes.root}>
      <Typography variant='h3'>Leaderboard</Typography>
    </div>
  )
}
export const LeaderboardTSX = withStyles(styles)(Leaderboard)
