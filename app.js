const app = () => {
    const song = document.querySelector('.song')
    const play = document.querySelector('.play')
    const outline = document.querySelector('.moving-outline circle')
    const video = document.querySelector('.vid-container video')

    // Sounds
    const sounds = document.querySelectorAll('.sound-picker button')
    //time display
    const timeDisplay = document.querySelector('.time-display')
    const timeSelect = document.querySelectorAll('.time-select button')
    //get length of outline
    const outlineLength = outline.getTotalLength()
    //duration
    let fakeDuration = 600

    outline.style.strokeDasharray = outlineLength
    outline.style.strokeDashoffset = outlineLength

    //play sounds
        play.addEventListener('click', () => {
            checkPaying(song)
        })

    //function to stop and play sounds
    const checkPaying = song => {
    if(song.paused){
        song.play()
        video.play()
        play.src = './svg/pause.svg'
    }else {
        song.pause()
        video.pause()
        play.src = './svg/play.svg'
    }

    //select sound
    timeSelect.forEach(option => {
        option.addEventListener('click', function() {
            fakeDuration = this.getAttribute('data-time')
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)} : ${Math.floor(fakeDuration % 60)}`
        })
    })

}
//animate circle and check time
song.ontimeupdate = () => {
    let currentTime = song.currentTime
    let elapsed = fakeDuration - currentTime
    let seconds = Math.floor(elapsed % 60)
    let minutes = Math.floor(elapsed / 60)

    //progress bar animation
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength
    outline.style.strokeDashoffset = progress
    //animate text
    timeDisplay.textContent = `${minutes}: ${seconds}`
}
}

app()