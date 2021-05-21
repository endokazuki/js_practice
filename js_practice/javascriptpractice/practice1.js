var box1="hello"
//var：変数定義
box1 = 100
console.log(box1)

/*
 var 2box=100
console.log(2box)
識別子は１文字目に数字を入れるとエラーを発生させる
 */

var _box3=200
console.log(_box3)
//識別子は＿もしくは＄を使用する事が可能

//プリミティブ型（プリミティブ (英語: primitive): 原始的、素朴な、幼稚な、などといった意味。）
var box4="hello"
var box5=300
var box6=null
var box7=true
var box8=false
var box9=undefined

console.log(box4,box5,box6,box7,box8,box9)

//オブジェクト型(メモリの参照先を示す)
var box10=[10,20,30]
console.log(box10[0])
var box11=box10
console.log(box11)

var box12= new Number(100)
console.log(box12)
var box13= new Number(100)

console.log(box12 == box13)
//参照先が一致していないためfalseを返す
console.log(box12 == 100)
//プリミティブ型の変数と対象数値が一致するためtrueを返す


var box14= new String("100")
console.log(box12 == box14)
//参照先が一致していないためfalseを返す
console.log(box14 == "100")
//プリミティブ型の変数と演算文字列が一致するためtrueを返す

var box15 = box12
console.log(box12==box15)
//参照先が一致するためtrueを返す

console.log(0/0)
//NaN(Not a Number)を出力
var box16=NaN
console.log(box16 == box16)
//参照先が一致するが、中身の変数がNaNの比較よりfalseを返す

console.log(Infinity)
//Infinity(無限大)を出力
var box17=Infinity
console.log(box17 == box17)
//参照先が一致し、中身の変数がInfinityの比較よりtrueを返す

var　box18=undefined
//変数を宣言しているが、何を入れるか決まっていない変数（nullとは微妙に異なる）
//null：空っぽの変数
//var　box18のみでも表現可能
console.log(box18)
box18 =100
console.log(box18)

const name={
    endo :undefined,
}
console.log(name)
//プロパティでも同様な処理を行うことが可能
//参考：https://it-biz.online/web-design/object-2/

function hello(){
    console.log("hello")
}
console.log(hello())
box19="world"
console.log(hello(box19))
//戻り値がないためhello,undefinedと返す

function goodbye(a){
    console.log("goodbye"+a)
}
console.log(goodbye(box19))
//戻り値がないためgoodbyeworld(指定文字+引数),undefinedと返す

function next(a){
    return "next"+a
}
console.log(next(box19))
//戻り値があるためnextworldと返す

function sample1(num,num){
    var result =1
    return result
}
console.log(sample1())
//引数の変数部分が重複しているが看過される

/*
function sample2(num,num){
    "use strict"
    var result =1
}
console.log(sample2(2,3))
関数内にuse strictを設定すると引数の変数部分が重複している部分でエラーを出力する
 */

var url1="https://yahoo.co.jp"
var url2=encodeURIComponent(url1)
//特定の文字列がURL使用可能な文字列へとエンコードする
var url3=encodeURI(url1)
//特定の文字列がそのまま（使用不可能な文字列）エンコードする
var url4=decodeURIComponent(url2)
//URL使用可能な文字列を特定の文字列にデコードする
var url5=decodeURI(url2)
//URL使用可能な文字列をそのままデコードする
console.log(url2)
console.log(url3)
console.log(url4)
console.log(url5)

//組み込みオブジェクトの一例(コンストラクタ[プロパティの初期化するための関数]は不要)
console.log(Date())
//Sun May 16 2021 22:39:34 GMT+0900 (日本標準時)
var fruits = new Array()
console.log(fruits)
fruits[0]="apple"
fruits[1]="remon" 
fruits[3]="meron" 
console.log(fruits)
//(4) ["apple", "remon", empty, "meron"]


const json = '{"result":true, "count":42}';
//json(JavaScript Object Notation)の形式
//name:type
//jsonはHTTP通信及び他のプログラミング言語とのデータのやりとりなどに使われる形式
const obj = JSON.parse(json);
//constは再代入が不可能な変数
//parseはjsonをjavascriptオブジェクトに変換する
//parse:解剖する
const js =JSON.stringify(json)
//stringifyはjavascriptオブジェクトをjsonに変換する
//stringify:文字列化

console.log(obj.result);
// expected output: true
console.log(obj.count);
// expected output: 42
console.log(js.result);
// expected output: undefined
console.log(js.count);
// expected output: undefined

var cat={name:"riri"}
/*
var jsobj=JSON.parse(cat)
console.log(jsobj)
元々JavaScriptオブジェクトのためエラーが出る
*/
var jsoncat=JSON.stringify(cat)
console.log(jsoncat)
//stringifyはjavascriptオブジェクトをjsonに変換する

/*
var fruits = new Array()
console.log(fruits)
fruits[0]="apple"
fruits[1]="remon" 
fruits[3]="meron" 
console.log(fruits)
//(4) ["apple", "remon", empty, "meron"]
*/
function resultArray(array){
    var info ="要素数："+array.length
    return info
}
console.log(resultArray(fruits))
//要素数：4