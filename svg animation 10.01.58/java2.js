var timeleft = 3;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.querySelector('.animation').classList.add('coinFlip')
    console.log('class has been added')

    

  }
  timeleft -= 1;
}, 1000);