console.log("practice")

var box1=1
var box2=new String("1")
var box3=new String("1")

if(box1==box2){
    console.log("true")
}else{console.log("false")}
//文字を数字に変換し（もしくは数字を文字に変換し）比較
//true

if(box1===box2){
    console.log("true")
}else{console.log("false")}
//文字を数字に変換せず（もしくは数字を文字に変換せず）比較
//false

if(box2==box3){
    console.log("true")
}else{console.log("false")}
//オブジェクト同士の比較（メモリの参照先を比較）
//false


// JSON.stringify() のサンプル

// 元のオブジェクト

const to_json = [

    { Name : "JsonData1", Desc : "JavaScript Object Notation1", UseInt :1 , UseString : "String1", UseArray : [11,12,13,14,15]},
    
    { Name : "JsonData2", Desc : "JavaScript Object Notation2", UseInt :2 , UseString : "String2", UseArray : [21,22,23,24,25]},
    
    { Name : "JsonData3", Desc : "JavaScript Object Notation3", UseInt :3 , UseString : "String3", UseArray : [31,32,33,34,35]}
    
    ]
    console.log(to_json); // 確認用
    console.log(to_json[0].Name); // 「JsonData1」が表示される
    
    const json_string = JSON.stringify(to_json);
    // JSONに変換
    console.log(json_string[0].Name); // 参照できない

    const javascript_string=JSON.parse(json_string)
    //javascriptObjectに変換
    console.log(javascript_string[0].Name);
     // 「JsonData1」が表示される
//parse:解析
//stringify:文字列化

var animal_box={name:"cat"}
//グローバル変数
animal_box.name="dog"
//グローバル変数animal_boxのnameキーを変更
console.log(animal_box.name)

function change_box(){
    animal_box.name="panda"
    var animal_box2={name:"monkey"}
    //グローバル変数animal_boxをローカル関数に持っていきnameキーを変更
}

change_box()
console.log(animal_box.name)
//panda
//console.log(animal_box2.name)
//error(グローバルスコープからローカルスコープ内の変数を参照する事は不可)

var box4=1
console.log(box4 instanceof Object)

var box5=document.querySelector("#get_data")
console.log(box5)
//querySelectorを使ってid値get_dataの要素を取得

var box6=document.querySelector("p")
console.log(box6)
//content
//pタグの最初の要素のみを抜き出す

var box7=document.getElementById("get_data")
console.log(box5)
//getElementByIdを使ってid値get_dataの要素を取得

var target=document.getElementById("target")
var a=document.createElement("a")
var attr=document.createAttribute("href")

attr.value="https://yahoo.co.jp"
a.innerHTML="yahoo"
a.setAttributeNode(attr)

target.appendChild(a)
//id=targetのHTML要素に作成した要素・属性を挿入
target.innerHTML="<p>yahoo_text</p>"
//id=targetのHTML要素に<p>yahoo_text</p>を更新（前の要素・属性は上書きされる）

window.onload=function(){
    var canvas=document.getElementById("canvas")
    var ctx=canvas.getContext("2d")

    ctx.arc(180,130,120,Math.PI,Math.PI*2,false)
    //開始x座標、開始y座標、開始角度、終了角度、時計(false)/反時計周り(true)
    ctx.fill()
}

var box8="a";

(function(){
    console.log(box8)
    //変数box8は関数内で宣言しているため、グローバルスコープへの巻き上げを行わない（初期値がundefinedになる）
    var box8="b";
    (function(){
        console.log(box8)
    //変数box8は関数内で宣言していない、スコープチェーンによる巻き上げが行われ、
    //「１つ上」の階層のグローバルスコープ（ここではbox8="b"を指す）の変数を取得する
    box8="c"
    }());
}());
//即時実行関数

console.log(box8)
//グローバルスコープを取得する

function test() {
    console.log(this)
    //thisは上の階層を示す（グローバルスコープの場合だとwindowになる）
}
var obj = {no:1}
obj.test = test
//配列objにtestキーを入れ、そのバリューに関数test(f)を入れる
obj.test()
//{no: 1, test: ƒ}
//関数を実行し、this(今回の場合だとtestの上の階層に当たるobj[配列])を出力する
//thisはWindowsに例えると、ファルダのようなもので
//例）this.name="tanaka"　ファルダ内にnameプロパティを付けそのバリューをtanakaにする

var cheese=function(){
    this.name="yukizirusi"
}
//juice関数（※関数はオブジェクトの１つ）

console.log(typeof cheese.name)
//yukizirusiはStringの一種（そのチーズの名前は雪印というブランドの一種である）
console.log(cheese instanceof Object)
//true
//cheeseはObjectの一種(チーズはミルクが原料であるニュアンス)
console.log(cheese instanceof String)
//false


var element1=document.querySelectorAll("span");
console.log(element1)
element1.innerText="b";
//nodelistにinnerText="b"をいれているが、HTML要素には反映されない。反映されるには
//var element1=document.querySelectorAll("span")[0];
//と書く必要がある
console.log(element1)

var element2=document.querySelector("span");
console.log(element2)
element2.innerText="c";
//２つ以上の同じHTML要素があった場合、一番始めの要素だけが変化される

//var element3=document.getElementById("text");
//console.log(element3)
//element3.innerText="d";

