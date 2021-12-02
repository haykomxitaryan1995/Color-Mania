const board = document.querySelector('#board')
const SQUARE_NUMBERS = 1600
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', 'green', 'purple']

for (let i = 0; i < SQUARE_NUMBERS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => remuveColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 20px ${color}, 0 0 30px ${color}`
}

function remuveColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 40px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

