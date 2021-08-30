export const urlRoot = IS_DEV ? `${document.location.protocol}//${document.location.hostname}:8000/api/v1`
  : 'https://cursor-games-api.herokuapp.com/api/v1'

export const url = {
  score: `${urlRoot}/score`,
  user: `${urlRoot}/user`
}
