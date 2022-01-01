const btnUp = document.querySelector('button.up-button'),
    btnDown = document.querySelector('button.down-button'),
    sidebar = document.querySelector('.sidebar'),
    mainSlide = document.querySelector('.main-slide'),
    slidesCount = mainSlide.querySelectorAll('div').length,
    container = document.querySelector('.container')

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100 }vh`

btnUp.addEventListener('click', () => {
    changeSlide('up');
})
btnDown.addEventListener('click', () => {
    changeSlide('down');
})

function changeSlide (direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount)
            activeSlideIndex = 0
    } else {
        activeSlideIndex--
        if (activeSlideIndex < 0)
            activeSlideIndex = slidesCount - 1;
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}