const board = document.querySelector('#board')
const message = document.querySelector('#message')
const start = document.querySelector('#start')
const check = document.querySelector('#check')
const cells = new Map()

for (let number = 1; number <= 9; number++) {
  const button = document.createElement('button')
  button.type = 'button'
  button.textContent = number
  button.className = 'cell'
  button.setAttribute('aria-pressed', 'false')
  cells.set(number, button)
  board.append(button)
}

let pattern = [1, 5, 9]
let phase = 'ready'
const guesses = new Set()

function makePattern() {
  const options = [...cells.keys()]
  const picks = []

  for (let count = 0; count < 3; count++) {
    const index = Math.floor(Math.random() * options.length)
    const [number] = options.splice(index, 1)
    picks.push(number)
  }

  return picks
}

function startRound() {
    guesses.clear()
    phase = 'showing'
    start.disabled = true
    check.disabled = true
    message.textContent = 'Remember the highlighted squares.'

    for (const [number, button] of cells) {
        button.className = 'cell'
        button.textContent = number
        button.setAttribute('aria-pressed', 'false')
        button. classList.toggle('lit', pattern.includes(number))
    }

    setTimeout(() => {
        for (const button of cells.values()) button.classList.remove('lit')
        phase = 'guessing'
        message.textContent = 'Select the three squares you remember.'
    }, 2000)
}


start.addEventListener('click', startRound)

board.addEventListener('click', event => {
  const button = event.target.closest('.cell')
  if (!button || phase !== 'guessing') return

  const number = Number(button.textContent)
  if (guesses.has(number)) {
    guesses.delete(number)
  } else {
    if (guesses.size === pattern.length) return
    guesses.add(number)
  }

  const selected = guesses.has(number)
  button.classList.toggle('chosen', selected)
  button.setAttribute('aria-pressed', String(selected))
  check.disabled = guesses.size !== pattern.length
  message.textContent = `${guesses.size} of ${pattern.length} selected.`
})

check.addEventListenex ('click', () => {
    if (phase !== 'guessing' || guesses.size !== pattern.length) return
    phase = 'finished'
    const correct = pattern.filter(number => guesses.has(number)).length

    for (const [number, button] of cells) {
        const inPattern = pattern.includes(number)
        const selected = guesses.has(number)
        button.classList.remove('chosen')
        button.classList.toggle('correct', inPattern && selected)
        button.classList.toggle('missed', inPattern && !selected)
        button.classList.toggle('wrong', selected && !inPattern)
        if (inPattern || selected) {
            const result = inPattern ? (selected ? 'correct' : 'missed') : 'wrong'
            button.textContent = `${number} · ${result}`
        }
    }

    message.textContent = `You found ${correct} of ${pattern.length} squares.`
    check.disabled = true
    start.disabled = false
    start.textContent = 'Play again'
    start.focus()
})