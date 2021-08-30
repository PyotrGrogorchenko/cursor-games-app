import React, {
  FC, useCallback, useEffect
} from 'react'
import {
  Box, Container, Grid, withStyles, CardMedia, CardActionArea, CardContent, Typography, Paper
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { useMainContext } from '@components/providers/MainProvider'
import { getGamesList } from '@games/common/data/gamesList'
import { GameCard } from '@games/common/data/types'
import { styles } from './styles'
import { Props } from './types'

const Home: FC<Props> = (props: Props) => {
  const { classes, history } = props
  const { setTitle } = useMainContext()

  useEffect(() => {
    setTitle('Cursor-games')
  }, [])

  const onClickCard = useCallback((e: OnClick, card: GameCard) => {
    e.preventDefault()
    history.push(`/game/${card.id}`)
  }, [history])

  return (
    <main>
      <Box className={classes.root}>
        <Container className={classes.cardGrid} fixed maxWidth='sm'>
          <Grid container spacing={4}>
            {getGamesList().map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={6}>
                <Paper>
                  <CardActionArea className={classes.card} onClick={(e) => onClickCard(e, card)}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={`/static/logo/game-${card.name}.svg`}
                      title={card.title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant='h6'>
                        {card.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  )
}

export const HomeTSX = withStyles(styles)(withRouter(Home))
