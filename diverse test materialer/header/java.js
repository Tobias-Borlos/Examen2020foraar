function text1(){
var timeleft = 3;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
	clearInterval(downloadTimer);
	document.querySelector('.wrap').style.content = ''
	document.querySelector('.wrap').classList.add('text1')
	document.querySelector('.wrap').classList.remove('textBack')
	console.log('class has been added')
	text2()
  }
  timeleft -= 1;
}, 1000);
}
text1()



function text2(){
	var timeleft = 3;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
	clearInterval(downloadTimer);
    document.querySelector('.wrap').classList.remove('text1')
    document.querySelector('.wrap').classList.add('text2')
	console.log('class has been added')
	textBack()
  }
  timeleft -= 1;
}, 1000);
}




function textBack(){
		var timeleft = 3;
	var downloadTimer = setInterval(function(){
	  if(timeleft <= 0){
		clearInterval(downloadTimer);
		document.querySelector('.wrap').classList.remove('text2')
		document.querySelector('.wrap').classList.add('textBack')
		console.log('class has been added')
		text1()
	
	  }
	  timeleft -= 1;
	}, 1000);
	}
