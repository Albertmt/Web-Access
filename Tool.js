// mylLib.js

var nodnum = new Array();
var qanak = 1;
var p
function Stugum(s,y){

if(s != 0){
var g = 0
for(var e = 0;e < y.value.length;e++){

if((y.value.charCodeAt(e) >= 65) && (y.value.charCodeAt(e) <= 87))
g++

if((y.value.charCodeAt(e) <= 119) && (y.value.charCodeAt(e) >= 97))
g++

}

if(g != y.value.length){
//y.value = ""
//alert('nermuceq text')
}
}
else{
if(y.value.charCodeAt(1) != 48){
for(var e = 1;e < y.value.length;e++){
if((y.value.charCodeAt(e) < 48) || (y.value.charCodeAt(e) > 57)){
//alert('nermuceq tiv')
y.value=""
break;
}
}
}else{
//y.value=""
//alert('nermuceq tiv')
}
}
}

var temp = new Array();


function XMLdemo(l) {
//alert('l' + l)
var demo = ""   
var u
//alert(l)
var elem=GetNodeById(root, l)
//var elem = xmlDoc.getElementsByTagName('table'+l)[0]; 
//alert('stex em')
var s = elem.childNodes.length
var q = (elem.childNodes.length)*145+5
var pah = document.getElementById("Q" + l)
//alert(elem.tagName)
if(pah == null){
var out1 = '<div style="position:absolute;left:0;top:350;width:'+(q+27)+';float:down;background-color:rgb(212,208,200);border:outset 2px white;" id="Q' + l + '" >';
out1 += '<span id="a3" style="background-image:url(fon2.bmp);width:'+(q+25)+'">' + elem.attributes.item(1).nodeValue + '</span>'
out1 += '<input type="button" style="aline:right;" value="Add" onclick="Add(this,'+s+','+ l +')">'
out1 += '<input type="button" style="aline:right;" value="Delete" onclick="End(' + l + ')">'
out1 += '<input type="button" style="aline:right;" value="Save" onclick="XMLwritter(this,' + l + ')">'
//var f = 40


out1 +='<span style="float:left;" id="">'

for(var d = 0;d < elem.childNodes.length ;d++){
var tempvi = ""
if(elem.childNodes[d].firstChild.firstChild)
tempvi +=elem.childNodes[d].firstChild.firstChild.data
out1 +='<span title="'+ tempvi + '" style="cursor:default;width:146;border:solid 1px black;">' + elem.childNodes[d].attributes.item(1).nodeValue +'('+ elem.childNodes[d].attributes.item(0).nodeValue + ')' + '</span>'

}
out1 +='</span>'

for(var s = 1;s < elem.childNodes[0].childNodes.length;s++){

demo ='<span style="float:left;" id="">'
nodnum[l] += 1;
var q = 0
for(var d = 0;d < elem.childNodes.length ;d++){

var m = ""
if(elem.childNodes[d].childNodes[s].firstChild)
m += elem.childNodes[d].childNodes[s].firstChild.data
//var pop = 0;
//while(m.charAt(pop) ==' ' ){
//pop = pop + 1
//}
//var pi = m.substring(pop,m.length)

//pop = 0
//alert(pi)
if(elem.childNodes[d].attributes.item(0).nodeValue != 0)
q = 1
alert(q)
demo +='<input type="text" value="'+ m + '" onchange="Stugum('+q+',this)">'
q = 0
}
if(s == 1){
out1 += demo
}else{
alert('norn a')
//if(elem.childNodes[d].attributes.item(0).nodeValue != 0)
//q = 1
//alert('nornn a1')
out1 += demo + '<input type="button" value=" X " onclick="Jnjel1(this)"  >'
//onchange="Stugum('+ q +',this)"
q = 0
}
out1 +='</span>'

}
//out += '<span ><input type="button" style="aline:right;" value="Add" onclick="Add(this)"</span>'
 out1 +='</div>'

root =  xmlDoc.documentElement;

//alert(out1)
var div=document.getElementById("divId")
div.innerHTML+=out1;
//document.body.innerHTML+=out1;
out1 = ""
}
}
function Jnjel1(i){
var e = i.parentElement
i.parentElement.parentElement.removeChild(i.parentElement)

}
function End(g){
var b=GetNodeById(root, g);
//var b = xmlDoc.getElementsByTagName("table" + g)[0]
var e = document.getElementById("Q" + g )
root.removeChild(b)
e.parentElement.removeChild(e)
var d = document.getElementById("t" + g )
d.parentElement.removeChild(d)

out = ""
indent = 0
SaveToFile(filename,xmlToString(root))
Load1()

}

function Add(el,d,i){

var x=GetNodeById(root,i)
//var x = xmlDoc.getElementsByTagName("table" + i)[0]
var m = d*145
var q = 0
 var y = '<span style="width:'+(m+27)+';">'
for(var a = 0;a < d;a++){
if(x.childNodes[a].attributes.item(0).nodeValue != 0)
q = 1
y += '<input type="text" value="" onchange="Stugum(' + q +',this)">'
alert(q)
//alert(x.childNodes[a].attributes.item(0).nodeValue)
q = 0
}
y += '<input type="button" value=" X " onclick="Jnjel1(this)" ></span>'
el.parentElement.innerHTML+=y;
}





function XMLwritter(root1,k){
//alert(k)
alert(root1.parentElement.childNodes.length)
alert(nodnum[k])
var vichak=GetNodeById(root,k);
//var vichak = xmlDoc.getElementsByTagName("table" + k)[0] 
var z = root1.parentElement.childNodes.length - (nodnum[k])
alert('z' + z)
if(root1.parentElement.childNodes.length > nodnum[k]){
for(var i = 0;i < vichak.childNodes.length;i++){

for(var j = 1;j <= z;j++){

var oldNode=xmlDoc.createTextNode(''); 
var newNode=xmlDoc.createElement('value');	
newNode.appendChild(oldNode)
vichak.childNodes[i].appendChild(newNode)
}
}
}else{
for(var i = 0;i < vichak.childNodes.length;i++){

for(var j = 1;j <= (-z);j++){
vichak.childNodes[i].removeChild(vichak.childNodes[i].lastChild)

}
}
}


for(var i = 0;i < vichak.childNodes.length ;i++){

for(var j = 0;j < vichak.childNodes[0].childNodes.length ;j++){
var d = ""
alert('sss')
//alert(root1.parentElement.childNodes[j + 4].childNodes[i].value)
if((j + 1) != vichak.childNodes[0].childNodes.length){
if(vichak.childNodes[i].childNodes[j + 1].firstChild){
alert('Child Node@ ka')
d += root1.parentElement.childNodes[j + 5].childNodes[i].value
//alert(root1.parentElement.childNodes[j + 5].childNodes[i].value)
vichak.childNodes[i].childNodes[j + 1].firstChild.data = d
}else{
alert('Child Node@ chka')
var newtext=xmlDoc.createTextNode(''); 
	//alert('descript')
	//newvalue.appendChild(newtext); 
	vichak.childNodes[i].childNodes[j + 1].appendChild(newtext)
	vichak.childNodes[i].childNodes[j + 1].firstChild.data = root1.parentElement.childNodes[j + 5].childNodes[i].value
alert(vichak.childNodes[i].childNodes[j + 1].firstChild.data)
}
out = ""
alert(xmlToString(root))



}
}
}
//alert('prtz')
alert('qqqqqqqq')
nodnum[k] = 5
out = ""
indent = 0
SaveToFile(filename,xmlToString(root))
Load1()
root1.parentElement.parentElement.removeChild(root1.parentElement)

//document.body.innerHTML+=f(temp)

}
