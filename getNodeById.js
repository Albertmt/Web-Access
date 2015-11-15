// getNodeById for XML DOM

function GetNodeById(y,x) 
{
	var node = null;

	function getNode(y,x) {
	   if(!node) {
		if(y.hasChildNodes()) {

			var chl=y.childNodes;
	  		for(var i=0;i<chl.length;i++) {

				if(chl.item(i).nodeType == 1)  {
					var len=chl.item(i).attributes;
					for(var j=0;j<len.length;j++) {
						if(len.item(j).nodeValue==x && len.item(j).nodeName=="id"){
							node = chl.item(i);
							return;
						}
					} 
				}
				if(chl.item(i).hasChildNodes()) {
					getNode(chl.item(i),x);
				}
			}
		}
	    }
	    return;
     }
     getNode(y,x);
     return node;
}
