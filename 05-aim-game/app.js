const startBtn = document.querySelector('.start'),
    screens = document.querySelectorAll('.screen'),
    timeList = document.querySelector('#time-list'),
    timeEl = document.querySelector('#time'),
    board = document.querySelector('.board')

let time = 0,
    score = 0


startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.dataset.time)
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', e => {
    if (e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

function decreaseTime() {
    if ( time === 0) {
        finishGame()
    } else {
        let current = --time

        if (time < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(val) {
    timeEl.innerHTML = `00:${val}`
}

function createRandomCircle() {
    const size = getRandomNumber(10, 60),
        circle = document.createElement('div'),
        {height, width} = board.getBoundingClientRect(),
        x = getRandomNumber(0, width - size),
        y = getRandomNumber(0, height - size)


    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.backgroundColor = getRandomColor()

    board.append(circle)
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    let r = getRandomNumber(0, 255),
        g = getRandomNumber(0, 255),
        b = getRandomNumber(0, 255)

    return `rgb(${r},${g},${b})`
}