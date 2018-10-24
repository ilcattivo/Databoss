window.onload = function() {
    var video = document.getElementById("video");
    var playButton = document.getElementById("play-pause");
    function playPause() {
        if (video.paused == true) {
            video.play();
            playButton.style.opacity = "0";
        } else {
            video.pause();
            playButton.style.opacity = "1";
        }
    }
    video.addEventListener("click", playPause);
    playButton.addEventListener("click", playPause);
}