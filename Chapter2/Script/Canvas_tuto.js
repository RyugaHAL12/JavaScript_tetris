let StageCanvas = document.getElementById('stage');

//	Canvasの大きさ定義
StageCanvas.width = 500;
StageCanvas.height = 500;

//	Canvasに四角形を描画
let StageContext = StageCanvas.getContext("2d");
StageContext.fillRect(50,50,150,150);