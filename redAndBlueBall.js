
var redFreq = [
  4, 5, 4, 5, 5, 8, 8, 5, 5, 2, 5, 5, 4, 7, 3, 3, 7, 9, 4, 5, 6, 2, 6, 4, 3, 8,
  9, 6, 8, 5, 6, 2, 12,
]
var blueFreq = ['4', '2', '1', '1', '1', '4', '0', '3', '2', '1', '2', '0', '1', '2', '4', '2']

function genNum(freq, count) {
  const length = freq.length
  const seq = Array(length)
    .fill(0)
    .map((d, i) => i + 1)

  let result = []
  seq.forEach((s, i) => {
    result = result.concat(
      (s + ' ')
        .repeat(redFreq[i])
        .trim()
        .split(' ')
        .map((d) => parseInt(d))
    )
  })
  let c = count
  let len = result.length
  while (c > 0 && len) {
    const index = Math.floor(Math.random() * len)
    const num = result[index]
    console.log(num)
    result = result.filter((r) => r != num)
    len = result.length
    c--
  }
}

function genBall() {
  console.log('红球')
  genNum(redFreq, 6)
  console.log('篮球')
  genNum(blueFreq, 1)
}

genBall()
