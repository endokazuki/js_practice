console.log("practice")

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    //ctx:コンテキスト（文脈）

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
    }
}

draw()

function draw2() {
    var canvas = document.getElementById('canvas2');
    if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.arc(50,50,20,Math.PI*2,Math.PI,true)
    //arc:アーチ（arch）
    //開始x座標、開始y座標、開始角度、終了角度、時計/反時計周り
    //開始角度はおやつの３時を起点
    ctx.fillStyle="green"
    //緑色の指定
    ctx.save()
    //メソッドの保存

    ctx.fillStyle="blue"
    ctx.restore()
    //保存したメソッドのリストア
    //blue→green
    ctx.fill()
    //円の描写
    }
}

draw2()

function draw3() {
    var canvas = document.getElementById('canvas3');
    var img =new Image()
    img.src="test.png"
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
       
        context.fillStyle='red'
        //以降のコードにfillメソッドがないため、fillStyle呼び出されない
        //context.rect(100,100,200,200)
        //長方形（正方形）：開始x座標、開始y座標、幅、高さ
        context.arc(120,120,100,0,Math.PI*2,true)
        //画像の右下部分
        context.clip()
        //指定箇所のくり抜き
        context.drawImage(img,0,0);
        //画像の貼り付け
        //ソース画像、開始x座標、開始y座標（但し向きは逆方向になっている）
      }

}

draw3()

function draw4() {
    var canvas = document.getElementById('canvas4');
    if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    //ctx:コンテキスト（文脈）

    //ctx.globalCompositeOperation = "source-over"
    //用紙を表でみる
    //デフォルト値なので、なくても反映する

    ctx.fillStyle="red"
    //赤鉛筆をとる（１本目の色鉛筆をとる）
    ctx.fillRect(25, 25, 100, 100)
    //赤い四角を描く

    ctx.fillStyle="green"
    //緑鉛筆をとる（２本目の色鉛筆をとる）
    ctx.arc(75,75,60,Math.PI*2,0,true)
    //緑の四角を描く
    //arc:アーチ（arch）
    //開始x座標、開始y座標、開始角度、終了角度、時計/反時計周り
    //開始角度はおやつの３時を起点
    ctx.fill()
    //絵の完成
   
    }
}

draw4()

function draw5() {
    var canvas = document.getElementById('canvas5');
    if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    //ctx:コンテキスト（文脈）
    
    ctx.globalCompositeOperation = "xor"
    //被る部分を透明にする
    //xor:排他的論理和

    ctx.fillStyle="red"
    //赤鉛筆をとる（１本目の色鉛筆をとる）
    ctx.fillRect(25, 25, 100, 100)
    //赤い四角を描く

    ctx.fillStyle="green"
    //緑鉛筆をとる（２本目の色鉛筆をとる）
    ctx.arc(75,75,60,Math.PI*2,0,true)
    //緑の四角を描く
    //arc:アーチ（arch）
    //開始x座標、開始y座標、開始角度、終了角度、時計/反時計周り
    //開始角度はおやつの３時を起点
    ctx.fill()
    //絵の完成
   
    }
}

draw5()

function draw6() {
    var canvas = document.getElementById('canvas6');
    if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    //ctx:コンテキスト（文脈）
    
    ctx.globalCompositeOperation = "destination-over"
    //用紙を裏返しでみる

    ctx.fillStyle="red"
    //赤鉛筆をとる（１本目の色鉛筆をとる）
    ctx.fillRect(25, 25, 100, 100)
    //赤い四角を描く

    ctx.fillStyle="green"
    //緑鉛筆をとる（２本目の色鉛筆をとる）
    ctx.arc(75,75,60,Math.PI*2,0,true)
    //緑の四角を描く
    //arc:アーチ（arch）
    //開始x座標、開始y座標、開始角度、終了角度、時計/反時計周り
    //開始角度はおやつの３時を起点
    ctx.fill()
    //絵の完成
   
    }
}

draw6()