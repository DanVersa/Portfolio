function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
(function(){

  var parallax = document.querySelectorAll("#page1"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (-(windowYOffset * speed)) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();



$(document).ready(function(){
    
    $('.heading').hide().delay(800);
    $('.hamspan').hide().delay(800);
    $('.heading').fadeIn(1500);
    $('.hamspan').delay(200).fadeIn(1500);

});
$(window).scroll(function() {
	/*if ($(this).scrollTop() > 750) {
		$('.hamspan').css("position", "fixed");
        $('.hamspan').css("z-index", "10");
        $('.heading').fadeOut(1000);

	} else { 
		$('.hamspan').css("position", "absolute");
        $('.heading').fadeIn(1000);
	}*/ 
});
