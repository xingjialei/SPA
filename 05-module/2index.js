$(function(){
//实例化定时器按钮

	var $btn = timerButton({
		'container':'div#main',
		'title':'同意',
		'tlength':9,
		'enable':false
	});
	console.log($btn);
	$btn.bind('timer-button-click',function(){
		alert('同意了');
	});

	var $btn2 = timerButton({
		'container':'div#main',
		'title':'同意',
		'tlength':9,
		'enable':false
	});
	console.log($btn);
	$btn2.bind('timer-button-click',function(){
		alert('同意了');
	});
});