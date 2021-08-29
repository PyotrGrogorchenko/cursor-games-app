export const encrypt = (x: number, y:number): number => (1000 + x * 100) + y

export const decrypt = (code: number) => {
  const x = Math.trunc(code / 100) - 10
  const y = code - (x + 10) * 100
  return { x, y }
}

export const getRandomInt = (max: number) => Math.floor(Math.random() * max)

export const findRandomFreeCell = (filledCells: number[], width: number, height: number): number => {
  const random = getRandomInt(width * height - filledCells.length)
  let count = 0
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (!filledCells.includes(encrypt(i, j))) {
        count++
        if (count >= random) {
          return encrypt(i, j)
        }
      }
    }
  }
  return -1
}
