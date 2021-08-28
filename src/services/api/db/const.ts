export const urlRoot = IS_DEV ? `${document.location.protocol}//${document.location.hostname}:8000/api`
  : process.env.API_URL
console.log('urlRoot', urlRoot, 'IS_DEV', IS_DEV, 'process.env.API_URL', process.env.API_URL)
console.log('process.env', process.env)

export const url = {
  score: `${urlRoot}/score`,
  user: `${urlRoot}/users`
}
