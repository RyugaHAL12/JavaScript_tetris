let StageCanvas = document.getElementById('stage');

//	Canvasの大きさ定義
StageCanvas.width = 1000;
StageCanvas.height = 1000;

//	コンテキスト=文脈
//	対象となっているCanvasオブジェクトに対する処理を行った時に参照される
//	様々な設定値の現在の状態を保持しているオブジェクトを取得している。
//	コンテキストが管理しているおかげで、色の設定を変更したら、その色で描画されるといった
//	設定状態を管理してくれている。
let StageContext = StageCanvas.getContext("2d");

//	四角形の色を設定
StageContext.fillStyle = "#ff00ff";

//	Canvasに四角形を描画
StageContext.fillRect(25,25,100,100);	//	四角形の中心x座標,y座標,横幅,高さ

//	円を書いてみる
//	1つ目の円
StageContext.beginPath();				//	図形を書き始める宣言
StageContext.strokeStyle="#000000";		//	図形・線の色を設定。初期設定は黒
StageContext.fillStyle="#ff0000";		//	図形の面にあたる部分の色の設定。初期設定は黒
StageContext.arc(300,75,50,0,180*Math.PI,false);	//	円や円弧を描くarc(x,y,半径,円を書き始める角度,円を書き終わる角度,円を描く方向)
													//	360°ではMath.PI *2 任意角度ならMath.PI/180で指定。円を描く方向は、true:反時計　false:逆。
StageContext.closePath();				//	書いた線を閉じる宣言
StageContext.fill();					//	できた図形の線で囲まれた内側の塗りを描画する

//	2つ目の円
StageContext.beginPath();
StageContext.strokeStyle="#0000ff";
StageContext.fillStyle="#00ff00";
StageContext.arc(600,75,50,0,180*Math.PI,false);
StageContext.closePath();
StageContext.fill();
