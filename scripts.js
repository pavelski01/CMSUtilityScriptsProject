"use strict";
document.onload = start();

function actualization() {
	var DOW = new Array("niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota");
	var MOY = new Array("stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia");
	var lastModDate = new Date(document.lastModified);
	var formatData = "<span style=\"font-weight: bold;\">Aktualizacja:&nbsp;</span>";
	formatData = formatData.concat(DOW[(lastModDate.getDay())]);
	formatData = formatData.concat(",&nbsp;");
	formatData = formatData.concat(lastModDate.getDate());
	formatData = formatData.concat("&nbsp;");
	formatData = formatData.concat(MOY[(lastModDate.getMonth())]);
	formatData = formatData.concat("&nbsp;");
	if (lastModDate.getYear() < 1900) formatData = formatData.concat(lastModDate.getYear() + 1900);
	else formatData = formatData.concat(lastModDate.getYear());
	return formatData;
}

function anchoredActualization() {
	var divElement = document.createElement("div");
	divElement.style.color = "#000";
	divElement.style.position = "absolute";
	divElement.style.top = "15px";
	divElement.style.right = "20px";
	divElement.innerHTML = actualization();
	divElement.style.zIndex = "2";
	document.getElementById("header").appendChild( divElement );
}

function anchoredCarousel(carouselElement) {
	var headerID = document.getElementById("header");
	carouselElement.style.position = "absolute";
	carouselElement.style.margin = "100px 0 0 25px";
	headerID.insertBefore(carouselElement, headerID.firstChild);
	$("#carousel").carousel({interval: 12000});
}

function anchoredCurrentAffairs() {
	var spanElement0 = document.createElement("span");
	spanElement0.style.fontWeight = "bold";
	spanElement0.style.fontSize = "large";
	spanElement0.innerHTML = "Aktualności";
	var imgElement = document.createElement("img");
	imgElement.src = "./resources/galleries/currentAffairs/currentAffairs_pinky.jpg";
	imgElement.style.margin = "10px auto";
	imgElement.style.display = "block";
	imgElement.style.border = "2px solid #808080";
	imgElement.style.borderRadius = "5px";
	var aElement = document.createElement("a");
	aElement.href = "./resources/galleries/currentAffairs/currentAffairs_thumb.jpg";
	aElement.target = "_blank";
	aElement.setAttribute("onmouseover", "this.style.opacity = \"0.5\";" );
	aElement.setAttribute("onmouseout", "this.style.opacity = \"1\";" );
	var spanElement1 = document.createElement("span");
	spanElement1.style.fontWeight = "bold";
	spanElement1.innerHTML = "Kliknij, aby powiększyć";
	var iframeElement = document.createElement("iframe");
	iframeElement.frameborder = "0";
	iframeElement.height = "200px";
	iframeElement.src = "";
	iframeElement.width = "300px";
	iframeElement.style.margin = "20px auto 20px auto";
	aElement.appendChild(imgElement);
	aElement.appendChild(spanElement1);
	var divElement = document.createElement("div");
	divElement.appendChild(spanElement0);
	divElement.appendChild(aElement);
	divElement.appendChild(iframeElement);
	divElement.style.margin = "0 auto 15px auto";
	divElement.style.textAlign = "center";
	divElement.style.margin = "0 0 45px 0";
	document.getElementById("sidebar").appendChild(divElement);
}

function carousel(URLarray) {
	var divElement0 = document.createElement("div");
	divElement0.id = "carousel";
	divElement0.className = "carousel slide";
	var ulElement = document.createElement("ul");
	ulElement.style.display = "none";
	for (var counter = 0; counter < URLarray.length; counter++) {
		var liElement = document.createElement("li");
		liElement.setAttribute("data-target", "#carousel");
		liElement.setAttribute("data-slide-to", counter.toString());
		if (counter == 0) liElement.className = "active";
		ulElement.appendChild(liElement);
	}
	var divElement1 = document.createElement("div");
	divElement1.className = "carousel-inner";
	var randomValue = Math.floor(Math.random() * URLarray.length);
	var pElement;
	var aElement0;
	var imgElement;
	for (var counter = 0; counter < URLarray.length; counter++) {
		var divElement2 = document.createElement("div");
		divElement2.className = "item";
		if (counter == randomValue) divElement2.className += " active";
		pElement = document.createElement("p");
		aElement0 = document.createElement("a");
		aElement0.href = URLarray[1][counter];
		imgElement = document.createElement("img");
		imgElement.src = URLarray[0][counter];
		imgElement.style.height = "280px";
		imgElement.style.width = "700px";
		imgElement.style.borderRadius = "5px";
		aElement0.appendChild(imgElement);
		pElement.appendChild(aElement0);
		divElement2.appendChild(pElement);
		divElement1.appendChild(divElement2);
	}
	var aElement1 = document.createElement("a");
	var aElement2 = document.createElement("a");
	aElement1.href = "#carousel";
	aElement2.href = "#carousel";
	aElement1.className = "carousel-control left";
	aElement2.className = "carousel-control right";
	aElement1.setAttribute("data-slide", "prev");
	aElement2.setAttribute("data-slide", "next");
	aElement1.innerHTML = "<i class=\"icon-caret-left icon-small\" style=\"font-size: 40px; font-weight: bold;\"></i>";
	aElement2.innerHTML = "<i class=\"icon-caret-right icon-small\" style=\"font-size: 40px; font-weight: bold;\"></i>";
	divElement0.appendChild(ulElement);
	divElement0.appendChild(divElement1);
	divElement0.appendChild(aElement1);
	divElement0.appendChild(aElement2);
	divElement0.style.zIndex = "3";
	return divElement0;
}

function start() {
	anchoredCarousel(carousel(URLarray()));
	anchoredActualization();
	anchoredCurrentAffairs();
}

function URLarray() {
	var addressArray = new Array(4);
	for (var counter = 0; counter < addressArray.length; counter++) addressArray[counter] = new Array();
	addressArray[0][0] = "banner0.png";
	addressArray[0][1] = "banner1.png";
	addressArray[0][2] = "banner2.png";
	addressArray[0][3] = "banner3.png";
	for (var counter = 0; counter < addressArray.length; counter++)
		addressArray[0][counter] = "./resources/advertisement/".concat( addressArray[0][counter] );
	addressArray[1][0] = "#";
	addressArray[1][1] = "#";
	addressArray[1][2] = "#";
	addressArray[1][3] = "#";
	return addressArray;
}
