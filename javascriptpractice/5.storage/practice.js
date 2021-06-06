console.log("practice")
/*
web Storage:クライアントアプリケーション（PC内に内蔵されているwebを動かすプログラムを指す）内にある、
    |       ユーザエージェント単位のデータ格納領域の事。容量はオリジン事に５M持つ
    |
    -Local Storage:ウィンドウ単位のデータで、セッションが切れても（この場合、ブラウザを閉じる）データは残る
    -Session Storage:オリジン単位のデータで、セッションが切れる（この場合、ブラウザを閉じる）とデータは削除される

ユーザエージェント：例）iPhone、googlechromeなど
オリジン：スキーム、ホスト、ポートの組み合わせの事
        例）http://yahoo.co.jp:80
        　　スキーム　ホスト　　　ポート
*/


window.localStorage.setItem("set1","apple")
//データの保存
//key:value

console.log(window.localStorage.getItem("set1"))
//データの参照
//apple
console.log(window.localStorage.getItem("set2"))
//null
window.localStorage.removeItem("set1")
//データの削除
//key:value
console.log(window.localStorage.getItem("set1"))
//null

console.log("hello")

window.addEventListener("storage",function(e){
    window.alert(e.oldValue)
    window.alert(e.newValue)
})
//別のウインドウを開いた時、発火する

console.log(window.localStorage.length)
//1
//set1のデータ数が出る（キーを増やす/減らすとデータ数は変化する）
//lengthはイベントオブジェクトではないので注意

sessionStorage.p=document.createElement("p")
sessionStorage.name=document.createElement("video")
console.log(sessionStorage.p)
//p: "[object HTMLParagraphElement]"
console.log(sessionStorage)
//Storage 
//{name: "[object HTMLVideoElement]", 
//p: "[object HTMLParagraphElement]", 
//length: 2}

//Indexed Database API:web Storageの上位互換で、DB的なもの（但し、RDBではない）
//プリミティブ、オブジェクト以外にBLOB（Binary Large OBject）なども保存できる
//参考：https://www.atmarkit.co.jp/ait/articles/1202/14/news138.html
//参考：https://qiita.com/butakoma/items/2c1c956b63fcf956a137
//参考：https://www.sky-limit-future.com/entry/indexedDB

if(window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB){
    console.log("IndexedDB exist!")
    // IndexedDBに関する処理を記述
  }else{
    window.alert("本ブラウザではIndexedDBが使えません");
  }
//IndexedDBがブラウザにあるか否か確認している（googlechromeにはついている）

var db_name= 'test_DB';

var db_use= indexedDB.open(db_name,1);
                //DB名,バージョン指定
//DB名を指定して接続。DBがなければ新規作成される。
//indexedDBにはIDBfactoryインターフェース（DBへのアクセスを行う）が存在する

var data1={ID:"1",name:"orange"}
var data2={ID:"2",name:"meron"}


db_use.onupgradeneeded = function(event){
  //onupgradeneededは、DBのバージョン更新(DBの新規作成も含む)時のみ実行
    console.log('db upgrade');
    console.log("make table")
    var db = event.target.result;
    var list=db.createObjectStore("fruit_list",
    {keypath:"ID"})
    //テーブルの作成
    list.createIndex("name","name",{unique:false})
    //列の作成
    list.transaction.oncomplete=function(event){
        var list_data=db.transaction("fruit_list","readwrite").objectStore("fruit_list");
        list_data.add(data1)
        list_data.add(data2)
        //データ挿入（insert）
    }
  }
  db_use.onsuccess = function(event){
  //onupgradeneededの後に実行。更新がない場合はこれだけ実行
    console.log('db open success');
    var db = event.target.result;
    // 接続を解除する
    db.close();
  }
  db_use.onerror = function(event){
  // 接続に失敗
    console.log('db open error');
  }

  //File API:ローカルPCに存在するファイルをJavaScriptから操作すること
  //参考：https://www.codegrid.net/articles/fileapi-1/

var takeimage=function(){
  var input_file=document.getElementById("files")
  //idがfilesのものを選択(ローカルスコープ)
  var list=input_file.files
  //ファイルの取得
  var reader =new FileReader()
  reader.onload=function(){
  var datauri=this.result
  //FileReader()の結果（読み込んだファイル）を出力
  //今回は読み込んだファイルのパスを表示
  document.body.innerHTML +='<a href="' + datauri 
                            + '"target="_blank"><img src="'
                            +datauri+'"></a>'
  //HTML内に結果を挿入
  }
  //読み込みが成功した時、HTML内にURL先の画像を表示する
  reader.readAsDataURL(list[0])
  //fileのパスを取得する
}

//var input=document.getElementById("files")
//idがfilesのものを選択（グローバルスコープ）
//window.input.addEventListener("change",takeimage)
//ファイルが選択された時（正確には空の領域にファイルを挿入した時）、画像表示の関数を実行する

var buffer=new ArrayBuffer(10)
//バッファ（画像・音声データのバイナリデータの保存領域）の確保
console.log(buffer.byteLength)
//今回の場合,変数bufferに10バイトのバッファを確保している
//Unit,Int,Floatで符号なし、符号あり、浮動小数によるバッファの操作が可能
//例：Uint8Array – ArrayBuffer にある各1バイトを、 0 から 255 (1バイト＝8ビット)で取り扱う
