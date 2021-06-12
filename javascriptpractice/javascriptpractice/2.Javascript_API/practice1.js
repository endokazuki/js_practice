console.log("practice1")

//javascriptはイベントドリブンモデル（イベントに沿ってコードを記述する）と言われる
//イベント：ユーザの動作（例：ボタンをおす、クリックするなど）よりその内容を実行する
//基本的なオブジェクトの配置
/*
window--document--images[]
       |         |
       -history  -links[]
       -screen   -forms[]
       -...      -...
window,documentオブジェクトは
onloadイベントハンドラ（１つのHTML要素に１つのみイベントをつける）を持つ
*/

function btn_onclick(){
    window.alert("Hello world!");
    console.log("hello")
}

function input_Change(){
    console.log('Change');
}
//イベントハンドラの例

const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
});
//要素をクリックすると、背景がピンク色になる（フォーカスされる）

password.addEventListener('blur', (event) => {
  event.target.style.background = '';
});
//要素外をクリックすると、背景がデフォルト（白色）になる

//イベントリスナー（１つのHTML要素に２つ以上のイベントをつける）の例
//今回の場合、input要素（正確にはinput要素のtype属性）に２つ以上のイベントを付与している

var b1=document.getElementById("b1")

b1.addEventListener("click",foo,true)

function foo(){
    window.alert("click_event!")
}
//イベントリスナの書き方
//addEventListener(イベント名,関数名,true)

var first=document.getElementById("first")
first.onclick=function(){
    console.log("first is clicked")
}
var second=document.getElementById("second")
second.onclick=function(){
    console.log("second is clicked")
}
//イベントハンドラはバブリングフェーズ（子[ターゲットフェーズ]から親の順で処理を実行する）で実行を行う
//second is clicked →first is clicked（p[子]→div[親]）

var third=document.getElementById("third")
third.addEventListener("click",function(){
    //document.writeln("third is clicked")
    console.log("third is clicked")
},true)

var forth=document.getElementById("forth")
forth.addEventListener("click",function(){
    //document.writeln("forth is clicked")
    console.log("forth is clicked")
},true)

//イベントリスナの第３引数が「true」の時、キャプチャフェーズ（親から子[ターゲットフェーズ]の順で処理を実行する）で実行を行う
//third is clicked→forth is clicked（div[親]→p[子]）

var fifth=document.getElementById("fifth")
fifth.addEventListener("click",function(){
    //document.writeln("fifth is clicked")
    console.log("fifth is clicked")
},false)

var sixth=document.getElementById("sixth")
sixth.addEventListener("click",function(){
    //document.writeln("sixth is clicked")
    console.log("sixth is clicked")
},false)
//イベントリスナの第３引数が「false」の時、バブリングフェーズ（子[ターゲットフェーズ]から親の順で処理を実行する）で実行を行う
//sixth is clicked→fifth is clicked（p[子]→div[親]）

document.getElementById("write").addEventListener("blur",
function(event){
    if(event.target.value ===""){
        alert("no input")
        console.log(event.timeStamp)
        //生成時間
        console.log(event.type)
        //イベント
    }
}
//イベントを引き渡して関数を実行している
,false)

function submitfunc(){
    document.getElementById("form1").submit()
}
//テキストの内容を提出する（要素内にテキストの内容はなくなる）


function submitfunc2(){
    document.getElementById("form2").reset()
}
//テキストの内容をリセットする

//window.addEventListener("keydown",function(event){
//    alert(event.code + ":" + event.key)},false)
//code:key
//例：A：a
document.getElementById("btn1").addEventListener("click",
function(e){
    if(document.getElementById("text1").value === ""){
        e.preventDefault()
        //サーバへのリクエストを拒否する
        alert("no input")
        //ポップアップの表示
    }
},true)


var img=document.getElementById("img")

document.addEventListener("DOMContentLoaded",function(){
    console.log("DOMtreemake")
})
//DOM(Document Object Model)ツリーの構築時に発火
img.onload=function(){
    console.log("image")
}
//DOM内のノード（HTMLの要素）の発火
window.onload=function(){
    console.log("page")
}
//windowオブジェクトを発火

//DOM→ノード→windowの順番で発火（設計図→部品⇨全体スイッチ）
//windowオブジェクト内のdocumentオブジェクト内部に位置する

console.log(document.forms[1])
//form要素の１番目のインデックスにアクセスしている

console.log(document.forms.reset)
console.log(document.forms["reset"])
//form要素でname属性がresetであるものにアクセスしている

console.log(document.forms.reset.write2_name)
///form要素でname属性がresetであるものから、更にその内部のname属性（今回の場合だとwrite2_name）にアクセスする
console.log(document.getElementById("write2"))
//id属性でアクセスした場合

var update_ulelement=document.getElementById("list1")
update_ulelement.innerHTML="<li>case1</li>"
update_ulelement.innerHTML="<li>case2</li>"
//ul要素の中身を「更新」している
//null→<li>case1</li>→<li>case2</li>

var add_ulelement=document.getElementById("list2")
add_ulelement.innerHTML+="<li>case1</li>"
add_ulelement.innerHTML+="<li>case2</li>"
//ul要素の中身を「追加」している
//<li>case1</li>
//<li>case2</li>

var create_pelement=document.createElement("p")
//p要素の作成
create_pelement.setAttribute("id","p1")
//Attribute：属性
//属性と属性値の追加
create_pelement.textContent="make paragrah"
//テキストの内容の追加
document.getElementById("make_p").appendChild(create_pelement)
//作成したp要素を指定のdiv要素の子要素として挿入している

var create_pelement2=document.createElement("p")
//p要素の作成
var attr=document.createAttribute("id")
attr.value="p2"
//属性と属性値の作成
create_pelement2.textContent="make paragrah2"
//テキストの内容の追加
create_pelement2.setAttributeNode(attr)
//node:結び目
//指定の要素と属性をひもづけている
document.getElementById("make_p2").appendChild(create_pelement2)
//作成したp要素を指定のdiv要素の子要素として挿入している

var create_pelement3=document.createElement("p")
create_pelement3.setAttribute("id","p_before")
//Attribute：属性
//属性と属性値の追加
create_pelement3.textContent="before"
//テキストの内容の追加
var divelement=document.getElementById("make_p3")
var pelement=document.getElementById("p_after")
divelement.insertBefore(create_pelement3,pelement)
