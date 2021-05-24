var animal=["dog","cat","panda"]

console.log(animal)

for(var animal_box in animal){
    console.log(animal_box)
    console.log(animal[animal_box])
    //配列[配列番号]
}
//配列番号を出力する(但し、順番は保証されない)
//配列内の内容を出力する
for(var animal_box of animal){
    console.log(animal_box)
}
//配列内の内容を出力する


var result=0
console.log(result)

for(var i=0;i<10;i++){
    result +=i
    //1+2+3
    if(result>5){
        break
    //合計値が５以上の時、for文を終了させる
    }
}
console.log(result)

var result=0
console.log(result)

for(var i=0;i<10;i++){
    result +=i
    //5+6+7+8+9+10
    if(result>5){
        continue
    //1~4は処理の途中で中断され、なかった事にされる
    //５以上の演算結果が出た時、for文の条件を満たすまで処理を続行する
    
    }
}
console.log(result)

//正しい文
try{
    var say1="hello"
}catch(e){
    console.log(e)
    //e:エラー情報を受け取る変数
}finally{
    console.log(say1)
    //結果の出力
}

//正しくない文（変数をちゃんと定義していない）
try{
     var say2=hello
}catch(err){
    console.log(err)
    //ReferenceError: hello is not defined at practice3.js:55
    console.log(err.stack)
    //ReferenceError: hello is not defined at practice3.js:55
    console.log(err.message)
    //hello is not defined 
    console.log(err.name)
    //ReferenceError

}finally{
    console.log(say2)
    //undifined
}

function str(str1){
    if(str1 ==2){
        throw new Error("この引数に2を入れてはいけません")
        //throw:例外を出力する
    }
    return str1
}
console.log(str(3))
//console.log(str(2))


//関数
function sum1(a,b){
    return a+b
}
console.log(sum1(2,3))
//5

//無名関数
var sum2=function(a,b){
    return a+b
}
console.log(sum2(4,5))
//9

//即時関数
var sum3= (function (a,b){
    var result = a + b;
    return result;
  })(1,2);
  console.log(sum3);
//3

//プリミティブの変換
var str2="default"
//グローバル変数

function change1(a){
    a="chnage"
    //ローカル変数
    return a
}
console.log(change1(str2))
//変数を用いて関数の処理が実行される
console.log(typeof str2)
console.log(str2)
//変数自体は変化しない

//オブジェクトの変換
var scores=[30,20,50,90]

function sort_func(a){
    return a.sort()
}
console.log(scores)
//オブジェクト前の値
console.log(sort_func(scores))
//オブジェクト内のデータ変換
console.log(scores)
//オブジェクト内の値の更新（グローバル変数がローカル変数と同様に変換される）

//var cat.name="もちまる"
//変数宣言前に識別子は付けられない
var cat={name:"もちまる"}
//オブジェクト初期化子：{キー（プロパティ値）:バリュー}
console.log(cat)
cat.kind="cat"
console.log(cat)
var dog={}
//オブジェクトの定義
console.log(dog)
dog.name="スズ"
//オブジェクト初期化子の実装
console.log(dog)
console.log(dog.name)
console.log(dog["name"])

//コンストラクタ関数：擬似的なclassの事（ECMA2015年以降はJavaScriptにclassが導入されたため古い概念になりつつある）
//コンストラクタ：オブジェクトの生成と初期化を行うためのメソッド→classと組み合わせるとインスタンスを作成する
//オブジェクト＋class＝インスタンス
function Cat1(name,color){
    this.name=name
    this.color=color
}

var cat1=new Cat1("moti","white")
//newはオブジェクト（インスタンス）を作成するための演算子
var cat2=new Cat1("mii","brown")

console.log(cat1.name)

//classを用いた場合
class Cat2{
    constructor(name,color){
        this.name=name
        this.color=color
    }
}

var cat3=new Cat2("moti","white")
var cat4=new Cat2("mii","brown")

console.log(cat4.color)

//javascript != オブジェクト指向型言語：class内のインスタンスは同一の特性（メンバ）を持つ（イメージ：日本は日本人だけで形成されている国家）
//javascript == プロトタイプ指向型言語：class内のインスタンスは同一の特性（メンバ）を持つとは限らない（イメージ：アメリカは人種のサラダポール）
//プロトタイプ：オブジェクトの元になるオブジェクト（原料を指す）
//コンストラクタはname,color以外にも、実はtoStringやvalueOfなどが暗黙的に存在する

/*
全体概要

    constructor(class)      　          →           インスタンス1（オブジェクト）
    |                                               |
    -プロパティ1(例：name)                             -プロパティ1(例：taro)
    -プロパティ2                                      -プロパティ2
    -メソッド１(例：function(name){...})               -※メソッド１(例：function(name){...})

                                                    インスタンス2（オブジェクト）
                                                    |
                                                    -プロパティ1(例：hanako)
                                                    -プロパティ2
                                                    -※メソッド１(例：function(name){...}) 

                                                    インスタンス3（オブジェクト）
                                                    |
                                                    -プロパティ1(例：tanaka)
                                                    -プロパティ2
                                                    -※メソッド１(例：function(name){...}) 
                                                    -メソッド2(constructorには存在しないメソッド)←メソッドの追加
                                                    

    ※インスタンスのメソッドはコンストラクタのメソッドを参照している（コンストラクタのメソッドをインスタンスのメソッドに書き込んでいるわけではない）
    →こうする事よりインスタンス全体のメソッドの総数を減らし、メモリを節約する事が可能となる
    →このようなコンストラクタのメソッドをプロトタイプ（prototype）プロパティとも呼んだりする
    →ちなみに、JavaScript規定（標準）のプロトタイプはObject.prototypeと呼ぶ

    コンストラクタ                         インスタンス
    -メソッド（prototype）         ←      -メソッド
                                参照
*/

var human_country=function(name,country){
    this.name=name
    this.country=country
}

human_country.prototype.getName=function(){
    return this.name + " is from " + this.country
}
//getNameというプロトタイプの拡張を行っている

var date1=new human_country("tanaka","japan")
console.log(date1.getName())

console.log(this)
//window：グローバルオブジェクトを出力する

var box="a"
//グローバルスコープ

function print(){
    console.log(box)
    //グローバルスコープと同名のローカルスコープが定義された場合ローカルスコープを優先する（今回の場合、変数の初期値は空[undifined]になる）
    var box="b"
    //ローカルスコープ
    return box
}

console.log(print())
console.log(box)

var out_box="out"

function inside(){
    console.log(out_box)
    //内側のスコープ（この場合だと関数内）に変数がないため外側のスコープ（この場合グローバル変数）に検索をかけている

    //console.log(inside_box)
    //内側のスコープにも外側のスコープにも存在しないためエラーを出力する
}

inside()

var score=100

if(score > 90){
    var result1="pass"
    //ブロックスコープ内でグローバル変数を宣言
}

console.log(result1)
//pass

if(score > 90){
    let result2="pass"
    //let:局所変数。ブロックスコープ内のみに適用する変数の宣言の時使用する
}

//console.log(result2)
//error

function closure(n){
    var count_all =n
    //クロージャに参照される変数（プロパティみたいな物）
    return function(){
        return ++count_all
        //最終的な出力値（インスタンスみたいな）
    }
    //クロージャ（閉鎖）：処理が終了しても変数（count_all）を参照し続ける
}
//クロージャ関数：コンストラクタのような物で、クロージャと呼ばれるメソッドぽい物を持つ
//n

var sum_result1=closure(1)
//インスタンス的な操作
console.log(sum_result1())
//１回目の処理が行われる。この時、クロージャは値を破棄せず、プロパティを参照し続ける
//2
console.log(sum_result1())
//２回目の処理が行われる。この時、１回目の処理の結果と２回目の処理の結果をクロージャ内で合算している
//3

var sum_result2=closure(4)
console.log(sum_result2())
//5
console.log(sum_result2())
//6

var box_a ="global"

function func1(){
    console.log(box_a)
}

function func2(){
    var box_a="local"
    func1()
}

func2()
//global

/*
box_a(global)   func2()
　↓              -box_a(local)                 
　↓in                ↓
func1()　　　　❌←←←←←←
　　　　　　　　func1()内で先にグローバル変数を取得しているため（func1()側からみるとfunc2()内の変数は外側にあると認識する）
*/

//with文
document.writeln(Math.pow(2,3))
//2の３乗
document.writeln(Math.ceil(1.24))
//2に切り上げ
//documentを２回かく

with(document){
    writeln(Math.pow(2,3))
    writeln(Math.ceil(1.24))
}
//documentを１回のみで良い

//但し、with文は可読性の問題点から一般的に非推奨である

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    //Product.call:Product(親オブジェクト）を呼び出す
    //call:第１引数にthisに相当する物を指定し、第２引数はそこから継承先（今回の場合、Food関数）に引き渡す引数を選定する
    
    this.category = 'food';
  }
  //Food関数はProduct関数を継承した関数
  
  console.log(new Food('cheese', 5).name,new Food('cheese', 5).price,new Food('cheese', 5).category);
  // expected output: "cheese"

  var box_b="hello"

  function func3(){
      console.log(box_b)
      //一番外側のグローバルスコープを参照している
      return box_b
      function func4(){
          console.log(box_b)
          //func3内の戻り値をグローバルスコープとして参照している
      }
      
  }

  console.log(func3())
  //console.log(func4())
  //外側から見た時（グローバル側）から見た時、func4()は見えないため未定義の扱いとなりエラーが発生する

  console.log(parseInt(0xe))
  //１６進数の「e」を１０進数に変換する（因みに２進数で表記すると1110）→14