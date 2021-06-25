console.log("helloworld")
document.writeln("helloworld")

var box1="hello"
//変数box1にプリミティブ型の文字列を入れた
console.log(box1)

var func1=function(){
    console.log("goodbye")
}

console.log(func1())

var box2=document.getElementById("test")
//HTML要素のID属性がtestであるものを取ってくる
console.log(box2)

var box3=document.querySelector("#test")
//HTML要素のID属性がtestであるものを取ってくる
console.log(box3)

var target=document.querySelector("#main_title")
console.log(target)
target.innerHTML="today"
//HTMLに挿入

var target2=document.getElementById("sub_title")

var author=function(firstname,lastname){
    this.firstname=firstname
    //this=author
    this.lastname=lastname
    //this=author
    this.get_name=function(){
        return this.firstname+" "+this.lastname
        //this.firstname this.lastname
    }
}
//javascriptのプロトタイプの作成（コンストラクタ）

var webname=new author("suzuki","itiro")
//インスタンス（成果物の事）
console.log(webname)

var sub_title="これは"+webname.get_name()+"のサイトである"

target2.innerHTML=sub_title

var target3=document.getElementById("sub_title2")
var webname2=new author("tanaka","taro")
var sub_title2="これは"+webname2.get_name()+"のサイトである"
target3.innerHTML=sub_title2

var target4=document.getElementById("sub_title3")
var webname3=new author("suzuki","ziro")
webname3.get_name=function(){
    return "hello"
}
var sub_title3="これは"+webname3.get_name()+"のサイトである"
target4.innerHTML=sub_title3

/*
(牛乳)　　　（チーズ）
author-----webname
get_name()|get_name()[old]
[old]     |
          |
          ---webname2
          |get_name()[old]
          |
          |
          --webname3
          get_name()[new]
*/