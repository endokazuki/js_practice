console.log("practice")

//web socket:httpのように、何回もコネクションを必要としなく、データ量が軽い双方向通信の事
//portはwsとwss
//参考：https://www.atmarkit.co.jp/ait/articles/1603/14/news015.html

var ws=new WebSocket("ws://127.0.0.1:5000/broadcast")
ws.onopen=function(){
    console.log("open")
}
ws.onmessage=function(e){
    console.log(e.data)
}
ws.onclose=function(){
    console.log("close")
}

/*コラム　JavascriptとTypescriptの違い
Javascript：動的型付け（データ型を決める必要がない）
例：x＝１
Typescript：静的型付け（データ型を決める必要がある）で、Javascriptの上位互換的なやつ（Javascript＋便利機能[例：classが使える]）
例：int x=1

参考：https://www.pasonatech.co.jp/workstyle/column/detail.html?p=2762

node.js:JSの実行環境の事（pipenv的なやつ）
npm：Node Package Managerの略称で、node.js(JS)を管理するためのツール（pip的なやつ）

*/