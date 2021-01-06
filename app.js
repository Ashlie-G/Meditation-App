const app = () => {
    const song = document.querySelector('.song')
    const play = document.querySelector('.play')
    const outline = document.querySelector('.moving-outline circle')
    const video = document.querySelector('.vid-container video')

    // Sounds
    const sounds = document.querySelectorAll('.sound-picker button')
    //time display
    const timeDisplay = document.querySelector('.time-display')
    //get length of outline
    const outlineLength = outline.getTotalLength()
    //duration
    let fakeDuration = 600
}

app()