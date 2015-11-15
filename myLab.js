

var w = 0
function xmltox(){
y = '<acces>' + "\n"
for(var e = 0;e < root.childNodes.length;e++){
y  += "<" + root.childNodes[e].tagName + ">" + "\n"
for(var a = 0;a < root.childNodes[e].childNodes.length; a++){
y += '<' + root.childNodes[e].childNodes[a].tagName + '>' + "\n"
for(var g = 0;g < root.childNodes[e].childNodes[a].childNodes.length; g++){
y += '<' + root.childNodes[e].childNodes[a].childNodes[g].tagName + '>' + "\n" 
y += root.childNodes[e].childNodes[a].childNodes[g].firstChild.data 
y +=  "\n" + '</' + root.childNodes[e].childNodes[a].childNodes[g].tagName +  '>' + "\n"  	
	}
//y += "\n"
y += '</' + root.childNodes[e].childNodes[a].tagName + '>' + "\n"
   }
y  += "</" + root.childNodes[e].tagName + ">" + "\n"
}
y += '</acces>'

return y
}
/*////////////////       im spanov sarqvox XML-@      ///////////////////////////*/

function XMLcreator1(anun){

	var y = ""
	var sp = document.getElementById("Aspan");
	var newNode=xmlDoc.createElement('table');
	var idattr=xmlDoc.createAttribute("id");
	idattr.value=w;
	
	var noratt=xmlDoc.createAttribute("name");
	noratt.value = anun;
	newNode.setAttributeNode(idattr);
	newNode.setAttributeNode(noratt);
	root.appendChild(newNode);
	//alert(Aimn.length)
	for(var a=0;a<Aimn.length;a++){
		var newNode1=xmlDoc.createElement('item');
		
		var newatt=xmlDoc.createAttribute("type");
		var newname=xmlDoc.createAttribute("anvanum");
		
		newNode.appendChild(newNode1);
		newatt.value="Text";
		newname.value=Aimn[a];
	
		newNode1.setAttributeNode(newatt);
		newNode1.setAttributeNode(newname)
		var newValue=xmlDoc.createElement('value')

		var description=xmlDoc.createElement("Description")
		newNode1.appendChild(description)

		var newval = xmlDoc.createTextNode('')
		newValue.appendChild(newval)
		newNode1.appendChild(newValue);
	}
		alert(xmlToString(root))
		var h = document.getElementById("u");
		w++;
		//u.innerHTML+='<input type="button" id="t' + (w - 1) +'" value="' + anun + '" onclick="XMLdemo(' + (w - 1)  +')">'
		u.innerHTML+='<span id="t' + (w - 1) +'"><img src="access.bmp"  onclick="XMLdemo(' + (w - 1)  +')"> '+ anun +'<br></span>';
}

/*////////////////       Davoyi spanov sarqvox XML-@      ///////////////////////////*/

function XMLcreator(anun){

//alert("W " + w)
var y = ""
var sp = document.getElementById("SP1")

var newNode=xmlDoc.createElement('table');
var idattr=xmlDoc.createAttribute("id");
idattr.value=w+"";
newNode.setAttributeNode(idattr);
var noratt=xmlDoc.createAttribute("name")
noratt.value = anun;
newNode.setAttributeNode(noratt)

//var newId =xmlDoc.createAttribute("Id")
//newId.value = "T" + w

root.appendChild(newNode)
//newNode.setAttributeNode(newId)

for(var t = 0;t< anunneriq;t++){
if(Array[t] != -1){
//alert('1.5hhh')
var s = document.getElementById("I" + Array[t])
 
var y = "" + s.value
if(y != ""){
//stexcel nor itemner(text,number)
var description=xmlDoc.createElement("Description")
//description.value = s.nextSibling.nextSibling.value
var newtext=xmlDoc.createTextNode("" + s.nextSibling.nextSibling.value); 

description.appendChild(newtext)



var newNode1=xmlDoc.createElement('item'); 
//stexcel nor attribute
var newatt=xmlDoc.createAttribute("type")

var newname=xmlDoc.createAttribute("anvanum"  )




newname.value =  s.value
newNode.appendChild(newNode1)

newNode1.appendChild(description)


newatt.value = s.nextSibling.value
newNode1.setAttributeNode(newatt)

newNode1.setAttributeNode(newname)

//newNode1.setAttributeNode(newId)
//newNode1.setAttributeNode(description)
//newname.value = y
//newNode1.attributes.item(0).nodeValue = s.nextSibling.value

//var newvalue=newval.cloneNode(true);
var newValue=xmlDoc.createElement('value')

var newval = xmlDoc.createTextNode('')
newValue.appendChild(newval)
newNode1.appendChild(newValue);
}
}
}

sp.parentElement.removeChild(sp)
alert(xmlToString(root))
var h = document.getElementById("u")
w++

u.innerHTML+='<span id="t' + (w - 1) +'"><img src="access.bmp"  onclick="XMLdemo(' + (w - 1)  +')"> '+ anun +'<br></span>';
for(var x = 0;x <= anunneriq;x++)
Array[x]=-1

anunneriq = 0;
}
