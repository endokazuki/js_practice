console.log("practice2")

document.getElementById("form1").addEventListener("submit",
function(e){
    for( var ele of e.target.children){
        if(ele.value==""){
        //formの子要素が空の場合    
            e.preventDefault()
            //送信中止イベント
            alert(ele.name+" is empty")
            //子要素のname属性を抽出+" is empty"
        }
    }
})
//form1がsubmitしたら、関数（eventインターフェース）のイベントをバブリングフェーズ（子要素→親要素）で起こす

document.getElementById("form1").setAttribute("class","color_red")
//form要素にclass属性を定義し、その中のCSSを適用
document.getElementById("p2").style="color:aqua"
//p要素にcssを直接入れて適用

/*
window.alert("check!!")
ポップアップが出る
window.prompt("check!!")
入力を促すポップアップが出る

window.confirm("check!!")
確認（OK、キャンセル）を促すポップアップが出る

window.open("https://yahoo.co.jp/")
URLのポップアップが出る
*/

function action() {
    console.log("action!!!!!!")
}

//window.setInterval(action,60000)
//60秒毎にaction関数を駆動させる
//60000m秒＝60秒

function action2() {
    console.log("action2!!!!!!")
}

//window.setInterval(action2,60000)
//60秒後にaction2関数を駆動させる
//60000m秒＝60秒

function action3() {
    console.log("action3!!!!!!")
}
var action3=window.setInterval(action3,100)
//1秒毎にaction3関数を駆動させる
//100m秒＝1秒
clearInterval(action3)
//setIntervalの削除
//clearTimeout(action3)でも可能

let pw = document.getElementById('wsize');
let ph = document.getElementById('hsize');

pw.innerText = 'width:' + window.innerWidth + 'px';
ph.innerText = 'height:' + window.innerHeight + 'px';
//初期値

function resizeWindow(event){
    pw.innerText = 'width:' + window.innerWidth + 'px';
    //window.innerWidth:横幅
    //px:ピクセル
    ph.innerText = 'height:' + window.innerHeight + 'px';
    //window.innerWidth:幅
}

window.addEventListener('resize', resizeWindow);
//resize:windowオブジェクトの一種で、ブラウザサイズが変更されると発火される

let px = document.getElementById('pageXOffset');
let py = document.getElementById('pageYOffset');
let sx = document.getElementById('screenX');
let sy = document.getElementById('screenY');
let oh = document.getElementById('outerHeight');
let ih = document.getElementById('innerHeight');

px.innerText = 'pageXOffset:' + window.pageXOffset + 'px';
py.innerText = 'pageYOffset:' + window.pageYOffset + 'px';
//X,Y座標のスクロール位置（ブラウザをスクロールすると変化する）
sx.innerText = 'screenX:' + window.screenX + 'px';
sy.innerText = 'screenY:' + window.screenY + 'px';
//X,Y座標のブラウザ位置（ブラウザを表示位置移動すると変化する）
oh.innerText = 'outerHeight:' + window.outerHeight + 'px';
ih.innerText = 'innerHeight:' + window.innerHeight + 'px';
//ブラウザ全体の高さ、コンテンツ内のブラウザの高さ

console.log(document.querySelector('#form1'))
//idがform1に一致するHTML要素を返す
console.log(document.querySelector('#form2'))
//存在しない場合はnullを返す
console.log(document.querySelector('.color_red'))
//classがcolor_redに一致するHTML要素を返す
console.log(document.querySelector('input'))
var input_id=document.querySelector('input')
console.log(input_id.id)
//要素がinputに一致する「初めの」HTML要素を返す（複数の値は返さない）

console.log(document.querySelectorAll('input'))
//要素がinputに一致するHTML要素を返す（複数の値を返す）
console.log(document.querySelectorAll('input')[0])
console.log(document.querySelectorAll('input')[1])
//要素がinputに一致するHTML要素を要素番号事に返している

console.log(location.href)
console.log(location.hostname)
console.log(location.pathname)
console.log(location.protocol)
console.log(location.hash)
//例：http://index.html#3
//#3
console.log(location.search)
//例：http://index.html?one
//?one
//location.reload()
//location.replace("practice1.html")

//locationオブジェクト

var box1=true
console.assert(box1,"assert")
//var box2=false
//console.assert(box2,"assert")
//assert:主張
//第一引数がfalseの時、第二引数をコンソールに出力する

var box3="apple"
console.debug(box3)
//console.log(box3)とほぼ同義
//コンソールの設定をverbose(冗長)にすると出力される

var box4=2
var box5={name:"cat"}
console.dir(box4)
console.dir(box5)
//オブジェクトの出力

console.dirxml(document.getElementById("form1"))
//HTML要素のツリー形式の取得

//console.profile("profile")
//プロファイラの作成
//処理の実行時間などを記録するレポートのようなもの