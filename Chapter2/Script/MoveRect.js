let stage = document.getElementById('moverect');
stage.width = 1000;
stage.height = 1000;

let canvas = stage.getContext("2d");

//	移動量？
let moveX = 0;

//	移動用関数
function moveRect(){
	canvas.clearRect(0,0,400,400);
	canvas.fillStyle="rgba(255,0,255,1)";
	canvas.fillRect(moveX * 20,100,20,20);
	moveX++;
}

//	setIntervalで設定したmsごとに第1引数で設定した関数を実行
moveTimer = setInterval(moveRect,500);