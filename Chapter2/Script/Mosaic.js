let stage = document.getElementById('mosaic');
stage.width = 1000;
stage.height = 1000;

let canvas = stage.getContext("2d");

let roop = 500;

//	縦横に四角形を配置
for(let i = 0; i < roop; i++){
	for(let j = 0; j < roop; j++){
		canvas.fillStyle="rgba(" + rnd(255)+","+rnd(255)+","+rnd(255)+",1)";
		canvas.fillRect(i*20,j*20,20,20);
	}
}

//	ランダム関数
function rnd(num){
	return Math.floor(Math.random()*num);
}