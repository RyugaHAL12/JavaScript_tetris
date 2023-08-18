$(function(){
	$(document).keydown(function(event){
		let keycode = event.keyCode;
		$('#result').html(keycode);
	})
})

// let test = document.getElementById('result');

// window.addEventListener('mousedown',function(){
// 	this.alert('マウスが押された');
// })