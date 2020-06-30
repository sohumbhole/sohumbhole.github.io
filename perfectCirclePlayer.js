var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

document.getElementById('playPerfectCircleLink').onclick = playPerfectCirclePlayed;


function playPerfectCirclePlayed (){
    if (isMobile) {
        alert("This game is only playable on a computer");
    }
    else {
        window.open("./assets/perfectCircle/HTML.html");
    }
}
