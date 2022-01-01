const board = document.querySelector('#board'),
    SQUARES_NUMBER = 600,
    colors = ['#142f48', '#1e8cb0', '#f5c1f0', '#e953da', '#4c44cf']


function setColor(elem) {
    const color = getRandomColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}