var ld = new Date();
var cd = new Date();
var cm = window.outerWidth;
var lm = window.outerWidth;

window.onresize = function(event) {
    ld = new Date();
    ld.setTime(ld.getTime()+500);
    cm = window.outerWidth;
};
function execAction(){
	if(lm != cm){
   if(ld.getTime() < cd.getTime()){
    lm = window.outerWidth;
    cm = window.outerWidth;
		console.log('execute');
   }
  }

}

setInterval(function(){ 
  cd.setTime(new Date());
  execAction();
}, 1);

