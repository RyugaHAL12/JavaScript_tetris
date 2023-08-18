let stage = document.getElementById('clickdraw');
stage.width = 1000;
stage.height = 1000;

let canvas = stage.getContext("2d");

stage.onclick = function(e){
	let mouseX = e.pageX-this.offsetLeft;
	let mouseY = e.pageY-this.offsetTop;

	canvas.save();
	canvas.translate(-25,-25);
	canvas.fillRect(mouseX,mouseY,50,50);
	canvas.restore();
}
