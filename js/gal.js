var big = 0
var justclicked = 0

var images = new Array();

var videos = document.getElementsByTagName('video');

function pauseVideos(){
	for(var i = 0; i < videos.length; i++){
		videos[i].pause();
	}
}


$.fn.exists = function () {
    return this.length !== 0;
}

function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image();
		images[i].src = preload.arguments[i];
	}
}
preload(
	"/images/softsoap1.png",
	"/images/softsoap2.png",
	"/images/softsoap3.png",
	"/images/softsoap4.png",
	"/images/softsoap5.png"
);


$(".nextb").click(function() {
	nextImg($(this).parent().parent().find(".gallery").find(".unhidden"));
});
$(".prevb").click(function() {
	prevImg($(this).parent().parent().find(".gallery").find(".unhidden"));
});
$(".galleryimg").click(function() {
	$(this).next().height(505);
	big=1;
	justclicked=1;
	nextImg($(this));
});




function nextImg(galID){
	if (galID.next().length){
		galID.fadeOut(200, function(){
			galID.next().css("display", "none");
			galID.next().removeClass( "hidden" );
			galID.next().fadeIn(200);
			galID.next().addClass("unhidden").removeClass("hidden");
			galID.addClass("hidden").removeClass("unhidden");
		});
	};
};

function prevImg(galID){
 	if (galID.prev().length){
		galID.fadeOut(200, function(){
			galID.prev().css("display", "none");
			galID.prev().removeClass( "hidden" );
			galID.prev().fadeIn(200);
			galID.prev().addClass("unhidden").removeClass("hidden");
			galID.addClass("hidden").removeClass("unhidden");
		});
	};
};
$(".galleryimg").hover(function(){
	$(this).animate({ height: "505px" }, 100);
	$(this).parent().next().children("#softPrev").css( "color", "#9F111B" );
},function(){
	$(this).animate({ height: "498px" }, 100);
	$(this).parent().next().children("#softPrev").removeAttr('style');
});

// OLD METHOD OF IMAGE CHANGING

/* function nextImg(galID){
	var imagelist=eval(galID);
	imagelist.index=imagelist.index+1;
	if (imagelist.index==imagelist.images.length){
		imagelist.index=0
	}
	var imgsrc = imagelist.images[imagelist.index];
	$('#'+galID).attr('src', imgsrc);
	$('#'+galID).parent().attr('href', imgsrc);
};


function prevImg(galID){
	var imagelist=eval(galID);
	imagelist.index=imagelist.index-1;
	if (imagelist.index<0){
		imagelist.index=imagelist.images.length-1;
	}
	var imgsrc = imagelist.images[imagelist.index];
	$('#'+galID).attr('src', imgsrc);
	$('#'+galID).parent().attr('href', imgsrc);
} */