var fruits=["banana","apple","lemon"]
console.log(fruits)
var fruits2=fruits.concat(
    ["peach","cherry"]
)
console.log(fruits)
//concatの元の配列は変化しない
console.log(fruits2)
//concatの戻り値は元の配列とは別に作成される