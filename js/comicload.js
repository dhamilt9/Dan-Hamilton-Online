var xmlhttp = new XMLHttpRequest();
var url = "/images/comics/comics.txt";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
	console.log(document.cookie);
        getComicName(myArr);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function getComicName(arr) {
	var getPath = window.location.pathname;
	var splitPath=getPath.split("/");
	comicName=splitPath[2];
	if (comicName==undefined){
		displayRecent(arr);
	}
	
	if (comicName==""){
		displayRecent(arr);
	}
	else{
		displayComic(comicName, arr);
	}
};

function displayRecent(arr){
	document.getElementById("nextb").style.pointerEvents = "none";
	document.getElementById("nextb").style.color = "grey";
	document.getElementById("currentb").style.pointerEvents = "none";
	document.getElementById("currentb").style.color = "grey";
	comicNumber=(Object.keys(arr).length);
	var i;
	for(i=0; i < arr.length; i++) {
		if(arr[i].number==comicNumber){
			document.getElementById("comic").src = "/images/comics/"+arr[i].file;
			document.getElementById("comic").title = arr[i].alt;
		}
	}
	for(i=0; i < arr.length; i++) {
		if(arr[i].number==1){
			document.getElementById("firstb").href = "/comics/" + arr[i].file.split(".")[0];
		}
		if(arr[i].number==comicNumber-1){
			document.getElementById("prevb").href = "/comics/" + arr[i].file.split(".")[0];
		}
	}
}

function displayComic(name, arr){
	var comicTitle;
	var comicName;
	var comicNumber;
	var i;
	for(i=0; i < arr.length; i++) {
		name2=arr[i].file.split(".")[0];
		if (name==name2){
			comicTitle=arr[i].name;
			comicAlt=arr[i].alt;
			comicNumber=arr[i].number;
			if (comicNumber==arr.length){
				document.getElementById("nextb").style.pointerEvents = "none";
				document.getElementById("nextb").style.color = "grey";
				document.getElementById("currentb").style.pointerEvents = "none";
				document.getElementById("currentb").style.color = "grey";
			}
			comicName=name;
			document.getElementById("comic").title = comicAlt;
			document.getElementById("comic").src = "/images/comics/"+arr[i].file;
		}
	}
	for(i=0; i < arr.length; i++) {
		if(arr[i].number==1){
			document.getElementById("firstb").href = "/comics/" + arr[i].file.split(".")[0];
		}
		if(arr[i].number==comicNumber-1){
			document.getElementById("prevb").href = "/comics/" + arr[i].file.split(".")[0];
		}
		var nextComic = parseInt(comicNumber)+1;
		if(arr[i].number==nextComic){
			document.getElementById("nextb").href = "/comics/" + arr[i].file.split(".")[0];
		}
		if (comicNumber=="1"){
			document.getElementById("prevb").style.pointerEvents = "none";
			document.getElementById("prevb").style.color = "grey";
			document.getElementById("firstb").style.pointerEvents= "none";
			document.getElementById("firstb").style.color= "grey";
		}
	}
}

function navclick(){
	if(document.cookie=="" || document.cookie=="NaN"){
		document.cookie="value=1;";
	}
	else{
		var name="value=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0){
			       	console.log(c.substring(name.length,c.length));
			}
		}			
	}
}

function myFunction(arr) {
	var out;
    var i;
    for(i = 0; i < arr.length; i++) {
        alert(arr[i].file + arr[i].number)
    }
}

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
		if (document.getElementById("prevb").style.pointerEvents != "none"){
			window.location.href = document.getElementById("prevb").href;
			document.cookie="10"
		}
    }
    else if (e.keyCode == '39') {
		if (document.getElementById("nextb").style.pointerEvents != "none"){
			window.location.href = document.getElementById("nextb").href;
			document.cookie="10"
		}
    }
}
