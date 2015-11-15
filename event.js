var startX;
var startY;
var dragger=null;

function docMouseMove() {
		if(dragger){
		var dx = event.clientX - startX;
		var dy = event.clientY - startY;
		
		startX = event.clientX;
		startY = event.clientY;
		
		move(dx, dy);
		}

}


function docMouseDown() {
	var srcNode = event.srcElement;
	if(srcNode.id == "spanikId" || srcNode.id=="a1" || srcNode.id=="a2" || srcNode.id=="a3") {
			srcNode.parentElement.parentElement.appendChild(srcNode.parentElement)
			startX = event.clientX;
			startY = event.clientY;
			dragger = srcNode;
		}
		
}


function docMouseUp() {
	dragger = null;
}

function move(dx,dy){
		var b=dragger.parentElement;
		b.style.left = parseInt(b.style.left) +  dx;
		b.style.top = parseInt(b.style.top) + dy;
	}