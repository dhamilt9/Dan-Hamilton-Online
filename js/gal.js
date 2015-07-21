var images = new Array();
function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image();
		images[i].src = preload.arguments[i];
	}
}
preload(
	"/images/shenan/ss2.png",
	"/images/shenan/ss3.png"
);

function imgprev(theID) {
	alert(TheID);
}