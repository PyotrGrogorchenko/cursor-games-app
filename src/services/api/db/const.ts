export const urlRoot = IS_DEV ? `${document.location.protocol}//${document.location.hostname}:8000/api`
  : 'https://cursor-games-api.herokuapp.com/api'

export const url = {
  score: `${urlRoot}/score`,
  user: `${urlRoot}/user`
}
