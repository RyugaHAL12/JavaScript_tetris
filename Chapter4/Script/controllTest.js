function controllTest(event){
	let inputKey = event.keyCode;
	const leftArrow = 37;
	const upArrow = 38;
	const rightArrow = 39;
	const downArrow = 40;

	switch(inputKey){
		case leftArrow:
			event.preventDefault();
			console.log('左が押された')
			ux = ux -1;
			break;
		case rightArrow:
			event.preventDefault();
			console.log('右が押された')
			ux = ux + 1;
			break;
		case upArrow:
			event.preventDefault();
			console.log('上が押された')
			uy = uy - 1;
			break;
		case downArrow:
			event.preventDefault();
			console.log('下が押された')
			uy = uy + 1;
			break;
	}
	
}

//	HTML文書から要素を取得
let stageCanvas = document.getElementById('stage');

//	Canvasの大きさ定義
stageCanvas.width = 1000;
stageCanvas.heigth = 1000;

//	2dでコンテキストを取得
let stageContext = stageCanvas.getContext("2d");

//	色設定
stageContext.fillStyle = "#0000ff";

//	描画
stageContext.fillRect(100,100,100,100);

$(function(){
	$(document).keydown(controllTest);
})