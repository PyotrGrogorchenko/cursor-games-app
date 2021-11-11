import { GameCard } from './types'

const gamesList: GameCard[] = [{
  id: 'snake',
  title: 'Snake'
},
{
  id: '2048',
  title: '2048'
}
]

export const getGamesList = () => gamesList
export const getGameCard = (id: string) => gamesList.filter(card => card.id === id)[0]
