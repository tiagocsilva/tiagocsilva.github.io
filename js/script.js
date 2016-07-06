$(document).ready(function() {
	var hg = $(window).height();
	//hg -= parseInt($("aside").css("padding-top"));
	//hg -= parseInt($("aside").css("padding-bottom"));

	

	var wd = $(window).width();

	if(wd > 760) {
		
		wd -= $("aside").width();
		//wd -= wd * 0.1;
		$("section").width(wd);	

	}
	else
	{
		hg -= 100;
	}

	$("aside").height(hg);
	$("section").height(hg);

});

var i = 1;

function contentFadeOut() {
	switch(i) {
		case 1: 
			$("#content-1").hide();
			$("#content-2").fadeIn(1000);
			i++;
		break;

		case 2: 
			$("#content-2").hide();
			$("#content-3").fadeIn(1000);
			i++;
		break;

		case 3: 
			$("#content-3").hide();
			$("#content-4").fadeIn(1000);
			i++;
		break;

		case 4: 
			$("#content-4").hide();
			$("#content-1").fadeIn(1000);
			i = 1;
		break;

	}
}