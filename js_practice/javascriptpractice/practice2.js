var fruits=["banana","apple","lemon"]
console.log(fruits)
var fruits2=fruits.concat(
    ["peach","cherry"]
)
console.log(fruits)
//concatの元の配列は変化しない
console.log(fruits2)
//concatの戻り値は元の配列とは別に作成される

//ラッパーオブジェクト：変数に特徴（機能）を付与するためのオブジェクト
var num1 = new Number(100)
console.log(num1)
var num2 =200
console.log(num2)

var bool1= new Boolean()
console.log(bool1)
var bool2= true
console.log(bool2)

var str1= new String("hello")
console.log(str1)

var hello="hello,world"
console.log(hello)
console.log(hello.length)
//文字数
console.log(hello.charAt(1))
//引数で指定した数の文字を返す
console.log(hello.substring(1))
//引数で指定した文字数以降の文字を返す
var hellosplite=hello.split(",")
//引数で指定した文字列を区切り文字として扱い、配列として適用する
console.log(hellosplite)
console.log(hellosplite.length)
//配列数

var today=new Date()
console.log(today.getMonth(),today.getDate(),today.getDay(),today.toLocaleString())

var name1="endo-kazuki"
var reg1= /^[a-z]{4}-[a-z]{6}$/
if(reg1.test(name1)){
//regexp（正規表現）が完全一致しているかのテスト    
    console.log("正しい")
}else{
    console.log("正しくない")
}
console.log(reg1.test(name1))

var reg2= /^[a-z]{4}-[a-z]{6}$/
console.log(reg2.exec(name1))
var reg3= /^[a-z]{4}/
console.log(reg3.exec(name1))
//regexp（正規表現）を一致している部分を出力する    

const regex1 = RegExp('foo*', 'g');
const str2 = 'table football, foosball';
let array1;

array1 = regex1.exec(str2)
console.log(array1)

//円の演算
var circle=5*5*Math.PI
//PI:π（Eは底数）
console.log(Math.floor(circle))
//floor：端数処理（小数点切り捨て）
console.log(Math.ceil(circle))
//floor：端数処理（小数点切り上げ）
console.log(Math.round(circle))
//floor：端数処理（四捨五入）

var num10 =1
var num20 =2
console.log(num10+num20)

var num10 =1
var num20 ="2"
console.log(num10 + num20)
//加法の時、オペランド（被演算子）の一方が文字列の場合、文字列連結を行う

var num10 ="1"
var num20 ="2"
console.log(num10 - num20)
//減方の時、オペランド（被演算子）が共に文字列の場合、数値に変換し演算する

var num10 ="1"
var num20 ="a"
console.log(num10 - num20)
//減方の時、オペランド（被演算子）が共に文字列の場合、数値に変換し演算するが数値ではないものがある場合NaNを出力する

var num30 =10
console.log(num30)
console.log(++num30)
//変数に加算（インクリメント）後、出力（減法の場合はデクリメント）
console.log(num30++)
//変数に出力後、加算する
console.log(num30)
//前の処理の結果を出力する

var num40=10
var num50="10"
console.log(num40==num50)
console.log(num40===num50)


