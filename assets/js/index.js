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

(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -100) {
        element.classList.add('fadeinbottom');
        element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();