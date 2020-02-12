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
  var elements, bars;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    bars = document.querySelectorAll('.hiddenBar');
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
    for (var i = 0; i < bars.length; i++) {
      var bar = bars[i];
      var positionFromTop = bars[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        bar.classList.add('wipeinleft');
        bar.classList.remove('hiddenBar');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();