var myvideo = document.querySelector("video");

var buttonPlay = document.querySelector(".buttonPlay")
var buttonPause = document.querySelector(".buttonPause")

var buttonRedirect = document.querySelector(".button")

myvideo.addEventListener('click', function(){
    playPause()
})

function playPause(){
    setTimeout(function(){ buttonRedirect.style.display = '';}, 1326000);

    if(myvideo.currentTime <= 0){
        myvideo.currentTime = 0.55;
    }

    if(myvideo.paused){
        myvideo.play();
        buttonPause.style.display = '';
        buttonPlay.style.display = 'none'
        setTimeout(function(){ buttonPause.style.display = 'none';}, 3000);
    }
    else{
        myvideo.pause();
        buttonPause.style.display = 'none'
        setTimeout(function(){ buttonPlay.style.display = '';}, 0);
    }
}



