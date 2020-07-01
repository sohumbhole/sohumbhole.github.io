var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

document.getElementById('playFrogger').onclick = playPerfectCirclePlayed;


function playPerfectCirclePlayed (){
    if (isMobile) {
        alert("This game is only playable on a computer");
    }
    else {
        window.open("./assets/frogger/index.html");
    }
}
