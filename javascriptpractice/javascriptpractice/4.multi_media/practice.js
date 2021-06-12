console.log("practice")

var video2=document.getElementById("video2")
var button1=document.getElementById("button1")
var button2=document.getElementById("button2")
var canvas1=document.getElementById("canvas1")

button1.addEventListener("click",function(){
    if(video2.paused){
        //メディアがポーズされている状態の場合
        video2.play()
        //メディアを再生するイベントハンドラ
    }else{
        video2.pause()
        //メディアを一時停止するイベントハンドラ
    }

    if(video2.error != null){
        alert(video1.error.code)
    }
})

button2.onclick=function(){
    video2.playbackRate=3
}

button3.onclick=function(){
    video2.currentTime -=5
}

video2.addEventListener("click",function(){
    var cotent1=canvas1.getContext("2d")
    cotent1.drawImage(video2,0,0)
})
//ビデオの内容をキャプチャする



video2.addEventListener("loadstart",function(){
    console.log("one")
})
video2.addEventListener("progress",function(){
    console.log("two")
})
video2.addEventListener("loadeddata",function(){
    console.log("three")
})
video2.addEventListener("playing",function(){
    console.log("four")
})
//ビデオの再生順序
