var myvideo = document.querySelector("video");

var buttonPlay = document.querySelector(".buttonPlay")
var buttonPause = document.querySelector(".buttonPause")

var buttonRedirect = document.querySelector(".button")

buttonPlay.style.display = '';


myvideo.addEventListener('click', function(){
    playPause()
})


function playPause(){
    setTimeout(function(){ buttonRedirect.style.display = '';}, 1414800);

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



