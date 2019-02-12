$(document).ready(function(){
	img_Mo();
	
});

function img_Mo(){
	$("#nohint")
	.animate({marginTop: "30px"},1200,"",function() {
		$(this)
		.animate({ marginTop: "0px" }, 1200, "", function () {
		img_Mo(); });
	});
}