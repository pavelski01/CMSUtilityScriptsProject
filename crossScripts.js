"use strict";

/*
 * In code use:
	<script src="./resources/crossScripts.js" type="text/javascript"></script>
	<script type="text/javascript">
		document.getElementsByClassName("page")[0].setAttribute("onload", 
			"anchoredAddress();anchoredAudio('./resources/audio/', 'audio');
			anchoredCuriosity();anchoredDetailedMap();
			anchoredFacebookBox();anchoredPricing();"
		);
	</script>
*/

function anchoredAddress() {
	var divElement = document.createElement("div");
	divElement.id = "custom_address";
	divElement.className = "custom_address";
	var tableElement = document.createElement("table");
	var trElement0 = document.createElement("tr");
	var tdElement0 = document.createElement("td");
	tdElement0.className = "center";
	tdElement0.innerHTML = "<i class=\"icon-phone icon-large\"></i>";
	var tdElement1 = document.createElement("td");
	tdElement1.innerHTML = "(12) 000 00 00";
	var trElement1 = document.createElement("tr");
	var tdElement2 = document.createElement("td");
	tdElement2.className = "center";
	tdElement2.innerHTML = "<i class=\"icon-mobile-phone icon-2x\"></i>";
	var tdElement3 = document.createElement("td");
	tdElement3.innerHTML = "000 000 000";
	var trElement2 = document.createElement("tr");
	var tdElement4 = document.createElement("td");
	tdElement4.className = "center";
	tdElement4.innerHTML = "<i class=\"icon-envelope icon-large\"></i>";
	var tdElement5 = document.createElement("td");
	tdElement5.innerHTML = "office@domain.pl";
	var trElement3 = document.createElement("tr");
	var tdElement6 = document.createElement("td");
	tdElement6.style.verticalAlign= "middle";
	tdElement6.className = "center";
	tdElement6.innerHTML = "<i class=\"icon-home icon-2x\"></i>";
	var tdElement7 = document.createElement("td");
	tdElement7.innerHTML = "ul. Example 1,<br />00-000 Kraków";
	var trElement4 = document.createElement("tr");
	var tdElement8 = document.createElement("td");
	tdElement8.id = "addressTitle";
	tdElement8.className = "bggray center";
	tdElement8.colSpan = "2";
	tdElement8.innerHTML = "Godziny otwarcia";
	var trElement5 = document.createElement("tr");
	var tdElement9 = document.createElement("td");
	tdElement9.innerHTML = "pn-pt";
	var tdElement10 = document.createElement("td");
	tdElement10.innerHTML = "0:00 - 23:59";
	var trElement6 = document.createElement("tr");
	var tdElement11 = document.createElement("td");
	tdElement11.innerHTML = "sobota";
	var tdElement12 = document.createElement("td");
	tdElement12.innerHTML = "0:00 - 23:59";	
	divElement.appendChild( tableElement );
	tableElement.appendChild( trElement0 );
	trElement0.appendChild( tdElement0 );
	trElement0.appendChild( tdElement1 );
	tableElement.appendChild( trElement1 );
	trElement1.appendChild( tdElement2 );
	trElement1.appendChild( tdElement3 );
	tableElement.appendChild( trElement2 );
	trElement2.appendChild( tdElement4 );
	trElement2.appendChild( tdElement5 );
	tableElement.appendChild( trElement3 );
	trElement3.appendChild( tdElement6 );
	trElement3.appendChild( tdElement7 );
	tableElement.appendChild( trElement4 );
	trElement4.appendChild( tdElement8 );
	tableElement.appendChild( trElement5 );
	trElement5.appendChild( tdElement9 );
	trElement5.appendChild( tdElement10 );
	tableElement.appendChild( trElement6 );
	trElement6.appendChild( tdElement11 );
	trElement6.appendChild( tdElement12 );
	document.getElementById("sidebar").insertBefore(divElement, document.getElementById("sidebar").childNodes[2]);
}

function anchoredAudio(path, name) {
	var audioElement = document.createElement("audio");
	audioElement.setAttribute("controls", "");
	var sourceElement = document.createElement("source");
	sourceElement.src = path.toString() + name.toString() + ".ogg";
	sourceElement.setAttribute("type", "audio/ogg");
	audioElement.appendChild( sourceElement );
	audioElement.appendChild( document.createTextNode("Twoja przeglądarka nie obsługuje elementu audio.") );
	audioElement.style.margin = "135px 20px 0 70px";
	document.getElementById("audio").appendChild( audioElement );
}

function anchoredCuriosity(index) {
	var multiArray = curiosityElementsArray();
	if ( index === undefined ) {
		var index = Math.floor( Math.random() * multiArray.length );
		showIndexedCuriosity(multiArray, index);
	}
	else if ( index >= multiArray.length ) index = 0;
	document.getElementById("srcCurosity").src = multiArray[index][2];
	document.getElementById("titleCurosity").innerHTML = multiArray[index][0];
	document.getElementById("contentCurosity").innerHTML = multiArray[index][1];
	index++
	document.getElementById("nextCurosity").setAttribute("onclick", "anchoredCuriosity(" + index + ")");
}

function anchoredDetailedMap() {
	var spanElement0 = document.createElement("span");
	spanElement0.style.fontWeight = "bold";
	spanElement0.innerHTML = "Jak do nas trafić?";
	var spanElement1 = document.createElement("span");
	spanElement1.innerHTML = "<a href=\"./resources/buildingsMap.gif\"> \
	<img src=\"./resources/buildingsMap.gif\" /></a><br /> \
	Budynek A - Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> \
	Budynek B - Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />";
	var divElement = document.createElement("div");
	divElement.style.margin = "0 0 15px 0";
	divElement.appendChild( spanElement0 );
	divElement.appendChild( spanElement1 );
	document.getElementById("sidebar").insertBefore(divElement, document.getElementById("sidebar").childNodes[3]);
}

function anchoredFacebookBox() {
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/pl_PL/all.js#xfbml=1";
		fjs.parentNode.insertBefore(js, fjs);
	} (document, 'script', 'facebook-jssdk'));
	var divElement = document.createElement("div");
	divElement.className = "fb-like-box";
	divElement.setAttribute("data-href", "https://www.facebook.com/pages/Example_Address");
	divElement.setAttribute("data-width", "350px");
	divElement.setAttribute("data-height", "70px");
	divElement.setAttribute("data-colorscheme", "light");
	divElement.setAttribute("data-show-faces", "false");
	divElement.setAttribute("data-header", "false");
	divElement.setAttribute("data-stream", "false");
	divElement.setAttribute("data-show-border", "false");
	divElement.setAttribute("style", "transform: translate(30px) scale(1.2,1.2)");
	document.getElementById("sidebar").insertBefore(divElement, document.getElementById("sidebar").childNodes[3]);
}

function anchoredPricing() {
	var spanElement0 = document.createElement("span");
	spanElement0.style.fontWeight = "bold";
	spanElement0.innerHTML = "Ceny książek nie zawierają kosztów wysyłki.";
	var brElement0 = document.createElement("br");
	var brElement1 = document.createElement("br");
	var spanElement1 = document.createElement("span");
	spanElement1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
	Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.";
	var brElement2 = document.createElement("br");
	var brElement3 = document.createElement("br");
	var spanElement2 = document.createElement("span");
	spanElement2.style.fontWeight = "bold";
	spanElement2.innerHTML = "Institution name";
	var brElement4 = document.createElement("br");
	var spanElement3 = document.createElement("span");
	spanElement3.innerHTML = "ul. Example 1";
	var brElement5 = document.createElement("br");
	var spanElement4 = document.createElement("span");
	spanElement4.innerHTML = "00-000 KRAKÓW";
	var brElement6 = document.createElement("br");
	var brElement7 = document.createElement("br");
	var spanElement5 = document.createElement("span");
	spanElement5.innerHTML = "<span style=\"font-weight: bold;\">NIP:</span> 0000000000";
	var brElement8 = document.createElement("br");	
	var spanElement6 = document.createElement("span");
	spanElement6.innerHTML = "<span style=\"font-weight: bold;\">REGON:</span> 000000000";
	var brElement9 = document.createElement("br");
	var brElement10 = document.createElement("br");
	var spanElement7 = document.createElement("span");
	spanElement7.innerHTML = "<span style=\"font-weight: bold;\">Nr rachunku B/o KRAKÓW</span>";
	var brElement11 = document.createElement("br");
	var spanElement8 = document.createElement("span");
	spanElement8.innerHTML = "00 0000 0000 0000 0000 0000 0000";
	var divElement = document.createElement("div");
	divElement.style.margin = "0 0 15px 0";
	divElement.style.textAlign = "justify";
	divElement.style.textJustify = "inter-word";
	divElement.style.wordWrap = "break-word";
	divElement.appendChild( spanElement0 );
	divElement.appendChild( brElement0 );
	divElement.appendChild( brElement1 );
	divElement.appendChild( spanElement1 );
	divElement.appendChild( brElement2 );
	divElement.appendChild( brElement3 );
	divElement.appendChild( spanElement2 );
	divElement.appendChild( brElement4 );
	divElement.appendChild( spanElement3 );
	divElement.appendChild( brElement5 );
	divElement.appendChild( spanElement4 );
	divElement.appendChild( brElement6 );
	divElement.appendChild( brElement7 );
	divElement.appendChild( spanElement5 );
	divElement.appendChild( brElement8 );
	divElement.appendChild( spanElement6 );
	divElement.appendChild( brElement9 );
	divElement.appendChild( brElement10 );
	divElement.appendChild( spanElement7 );
	divElement.appendChild( brElement11 );
	divElement.appendChild( spanElement8 );
	document.getElementById("sidebar").insertBefore(divElement, document.getElementById("sidebar").childNodes[3]);
}

function curiosityElementsArray() {
	var textTitle0 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
	var text0 =
"Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. \
Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. \
Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, \
sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, \
vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. \
Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. \
Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, \
in interdum massa nibh nec erat.";
	var text1 =
"Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. \
Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. \
Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, \
sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, \
vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. \
Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. \
Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, \
in interdum massa nibh nec erat.";
	var textTitle2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
	var text2 =
"Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. \
Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. \
Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, \
sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, \
vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. \
Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. \
Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, \
in interdum massa nibh nec erat.";
	var textTitle3 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
	var text3 =
"Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. \
Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. \
Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, \
sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, \
vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. \
Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. \
Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, \
in interdum massa nibh nec erat.";
	var textTitle4 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
	var text4 =
"Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. \
Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. \
Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, \
sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, \
vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. \
Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. \
Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, \
in interdum massa nibh nec erat.";
	var textTitle5 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
	var text5 =
"Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. \
Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. \
Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, \
sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, \
vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. \
Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. \
Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, \
in interdum massa nibh nec erat.";
	var multiArray = new Array(6);
	for (var counter = 0; counter < multiArray.length; counter++) {
		multiArray[counter] = new Array();
		multiArray[counter][0] = eval( "textTitle" + counter.toString() );
		multiArray[counter][1] = eval( "text" + counter.toString() );
		multiArray[counter][2] = "./resources/curosity/".concat( "curosityImg" + counter.toString() + ".gif" );
	}
	return multiArray;
}

function onMouseOverAndOut(condition) {
	var thisStyle = "this.style.";
	var thisStyleArray = new Array();
	if (condition == true) {
		thisStyleArray.push( thisStyle + "backgroundColor = \"#ffffff\";" );
		thisStyleArray.push( thisStyle + "border = \"3px inset #ffffff\";" );
		thisStyleArray.push( thisStyle + "color = \"#000000\";" );
		thisStyleArray.push( thisStyle + "fontWeight = \"bold\";" );
		thisStyleArray.push( thisStyle + "padding = \"10px\";" );
		thisStyleArray.push( thisStyle + "textDecoration = \"none\";" );
		thisStyleArray.push( thisStyle + "borderRadius = \"25px\";" );
		thisStyleArray.push( thisStyle + "borderRadius = \"25px\";" );
	}
	else {
		thisStyleArray.push( thisStyle + "backgroundColor = \"#000000\";" );
		thisStyleArray.push( thisStyle + "border = \"3px outset #ffffff\";" );
		thisStyleArray.push( thisStyle + "color = \"#ffffff\";" );
		thisStyleArray.push( thisStyle + "fontWeight = \"bold\";" );
		thisStyleArray.push( thisStyle + "padding = \"10px\";" );
		thisStyleArray.push( thisStyle + "textDecoration = \"none\";" );
		thisStyleArray.push( thisStyle + "cursor = \"pointer\";" );
	}
	return thisStyleArray.join("");
}

function showIndexedCuriosity(multiArray, number) {
	var imgElement = document.createElement("img");
	imgElement.id = "srcCurosity";
	imgElement.src = multiArray[number][2];
	imgElement.style.cssFloat = "left";
	imgElement.style.margin = "0 5px 0 0";
	imgElement.style.borderRadius = "5px";
	var divElement0 = document.createElement("div");
	divElement0.style.textAlign = "center";
	divElement0.style.margin = "0 0 10px 0";
	var spanElement0 = document.createElement("span");
	spanElement0.style.fontWeight = "bold";
	spanElement0.style.fontSize = "x-large";
	spanElement0.innerHTML = "Czy wiesz, że?";
	var spanElement1 = document.createElement("span");
	spanElement1.id = "titleCurosity";
	spanElement1.style.fontWeight = "bold";
	spanElement1.innerHTML = multiArray[number][0];
	var spanElement2 = document.createElement("span");
	spanElement2.id = "contentCurosity";
	spanElement2.innerHTML = multiArray[number][1];
	var divElement1 = document.createElement("div");
	divElement1.id = "curosity";
	divElement1.style.textAlign = "left";
	var aElement = document.createElement("a");
	aElement.id = "nextCurosity";
	aElement.style.backgroundColor = "#000000";
	aElement.style.border = "3px outset #ffffff";
	aElement.style.color = "#ffffff";
	aElement.style.fontWeight = "bold";
	aElement.style.padding = "10px";
	aElement.style.textDecoration = "none";
	aElement.style.borderRadius = "25px";
	aElement.style.cursor = "pointer";
	aElement.setAttribute("onmouseover", onMouseOverAndOut(true) );
	aElement.setAttribute("onmouseout", onMouseOverAndOut(false) );
	aElement.setAttribute("onclick", "");
	aElement.innerHTML = "Następna ciekawostka";
	divElement0.appendChild( spanElement0 );
	divElement1.appendChild( divElement0 );
	divElement1.appendChild( spanElement1 );
	divElement1.appendChild( document.createElement("br") );
	divElement1.appendChild( imgElement );
	divElement1.appendChild( spanElement2 );
	divElement1.appendChild( document.createElement("br") );
	divElement1.appendChild( document.createElement("br") );
	divElement1.appendChild( aElement );
	document.getElementById("sidebar").appendChild( divElement1 );
}
