const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        // playButton.textContent = 'Поставить на паузу';
    } else {
        video.pause();
        // playButton.textContent = 'Воспроизвести';   
    }
});

