var images = new Array();
function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image();
		images[i].src = preload.arguments[i];
	}
}
preload(
	"/images/menubg_102.png",
	"/images/menubg_139.png",
	"/images/menubg_82.png",
	"/images/menubg_94.png",
	"/images/icons/facebook.png",
	"/images/icons/twitter.png",
	"/images/icons/instagram.png",
	"/images/icons/linkedin.png"
);