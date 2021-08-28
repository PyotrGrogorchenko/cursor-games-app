import React, { FC, useEffect, useMemo } from 'react'
import { withStyles, Typography } from '@material-ui/core'
import { useMainContext } from '@components/providers/MainProvider'
import { useParams, withRouter } from 'react-router-dom'
import { Controller as ControllerSnake } from '@games/gameSnake/Controller'
import { Controller as Controller2048 } from '@games/game2048/Controller'
import { getGameCard } from '@games/data/gamesList'
// import { login } from '@apiDb/user/actions'
// import { userDataSelector } from '@store/selectors'
// import { useSnackbar } from 'notistack'
import { styles } from './styles'
import { Props } from './types'

const Game: FC<Props> = (props: Props) => {
  const { classes } = props
  const { setTitle } = useMainContext()
  const { id } = useParams<{ id: string }>()
  // const userData = userDataSelector()
  // const { enqueueSnackbar } = useSnackbar()

  const gameCard = useMemo(() => getGameCard(id), [id])

  useEffect(() => {
    setTitle(`${gameCard.title}`)
    // if (!userData) return
    // login({
    //   userId: userData.id,
    //   avatar: userData.avatar,
    //   displayName: userData.display_name || userData.login
    // }).then(res => {
    //   if (!res.ok) enqueueSnackbar('Authorization failed', { variant: 'error' })
    // })
  }, [])

  const renderGame = () => {
    switch (gameCard.name) {
      case 'snake': return <ControllerSnake/>
      case '2048': return <Controller2048/>
      default: return <Typography variant='h3'>{`${gameCard.title}`}</Typography>
    }
  }

  return (
    <div className={classes.root}>
      {renderGame()}
    </div>
  )
}
export const GameTSX = withStyles(styles)(withRouter(Game))
