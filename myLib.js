//myLib.js
	function AFirst(){
		var AxmlDoc=document.getElementById("AxmlDoc");
		AxmlDoc.load("first.xml");
		Aroot=AxmlDoc.documentElement;
	}
	
	
	function ASecond(){
		var ar=document.getElementById("arajin");
		var tables=Aroot.firstChild.childNodes;
		for(var i=0;i<tables.length;i++){
		var op=document.createElement("option");
		
		//op.innerHTML=tables(i).nodeName;
		op.innerHTML=tables(i).attributes(0).nodeValue;
		ar.appendChild(op);
		}
	}
	
	
	function SampleTables(){

	
		var i=0,k=0;
		var op=document.getElementById("arajin");
		var op2=document.getElementById("erkrord");
		//var op=document.form1.elements["arajin"];alert(654)
		//var op2=document.form1.elements["erkrord"];
		//var erk=document.getElementById("erkrord");
		var tables;
		var rad=document.getElementById("55")
		if(rad.checked) {tables=Aroot.lastChild.childNodes;}
		else {tables=Aroot.firstChild.childNodes;}
		
		for(var i=0;i<op.length;i++){
			if(op[i].selected){
			while(k<op2.length){op2.removeChild(op2[k])};
			
			for(var j=0;j<tables(i).childNodes.length;j++){
			var c=document.createElement("option");
			if(j==0) c.selected="true";
			c.innerHTML=tables(i).childNodes(j).firstChild.nodeValue;
			
			op2.appendChild(c);
			}
		}
	}
	}
	
	function Achoose(){
		var rad=document.getElementById("55");
		if(rad.checked)
		{
		var k=0;
		var ar=document.getElementById("arajin");
		//var or=document.form1.elements["arajin"];
		var tables=Aroot.lastChild.childNodes;
		while(k<ar.length){ar.removeChild(ar[k])};
		
		for(var i=0;i<tables.length;i++){
			var op=document.createElement("option");
		
			//op.innerHTML=tables(i).nodeName;
			op.innerHTML=tables(i).attributes(0).nodeValue;
			ar.appendChild(op);
		}
		}
		else
		{
		var k=0;
		//var op=document.form1.elements["arajin"];
		var ar=document.getElementById("arajin");
		while(k<ar.length){ar.removeChild(ar[k])};
		ASecond();
		}
	}
	
	function lrivjnjel(){
		var op=document.getElementById("errord");
		var i=0;
		while(i<op.length)
		op[0].parentElement.removeChild(op[0]);
		i++;
	}
	function Ajnjel(){
		var op=document.getElementById("errord");
		for(var i=0;i<op.length;i++)
		{
		if(op[i].selected)
		op[i].parentElement.removeChild(op[i]);
		}
	}
	function lrivgcel(){
		var op=document.getElementById("erkrord");
		var err=document.getElementById("errord");
		var i=0;
		while(i<op.length){
		var c=document.createElement("option");
		c.innerHTML=op[i].innerHTML;
		err.appendChild(c);
		i++;
		}
	}
	function Agcel(){
		var err=document.getElementById("errord");
		var op=document.getElementById("erkrord")
		//var op=document.form1.elements["erkrord"];
		for(var i=0;i<op.length;i++){
			if(op[i].selected)
			var c=op[i].innerHTML;//alert(err[i].innerHTML)
		}
		var a=document.createElement("option");
		a.innerHTML=c;
		err.appendChild(a);
	}
	function rename(){
		
		var op=document.getElementById("errord");
		for(var i=0;i<op.length;i++)
		{
		
		if(op[i].selected)
		{var newname=prompt("rename","");
		op[i].innerHTML=newname;}
		}
	}