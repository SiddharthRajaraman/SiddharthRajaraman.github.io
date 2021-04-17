
function togglePlay() {
    var audioElement = document.getElementById("audioPlayer");
    if (document.getElementById("credits")) {
        document.getElementById("credits").innerHTML = 'Credits: "Homework" by David Fesliyan';
        setTimeout(() => {  document.getElementById("credits").innerHTML = ''; }, 10000);
    }
    if (audioElement.paused) {
        audioElement.play();
        document.getElementById("audioButton").innerHTML = "Click to Pause!";
    }
    else {
        audioElement.pause();
        document.getElementById("audioButton").innerHTML = "Click to Play!";
    }
}