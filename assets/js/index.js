$(document).ready(function(){
	$(".myNavbarTogglerOpen").click(function(){
		$(".myNavbarTogglerOpen").hide(200);
		$(".myNavbarTogglerClose").show(200);
		$(".navbarOverlay").show(200);
	});
	$(".myNavbarTogglerClose").click(function(){
		$(".myNavbarTogglerClose").hide(200);
		$(".myNavbarTogglerOpen").show(200);
		$(".navbarOverlay").hide(200);
	});
});