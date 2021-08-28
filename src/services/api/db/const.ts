export const urlRoot = IS_DEV ? `${document.location.protocol}//${document.location.hostname}:8000/api`
  : process.env.API_URL
console.log('urlRoot', urlRoot, 'IS_DEV', IS_DEV)

export const url = {
  score: `${urlRoot}/score`,
  user: `${urlRoot}/users`
}
