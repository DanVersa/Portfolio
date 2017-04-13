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
	$(".scroll").click(function() {
        $('html,body').animate({
            scrollTop: $("#page2").offset().top}, 1500);
    });
  $('.head1').hide();
  $('.linke').hide();
  $('.head1').fadeIn(2000);
  $('.linke').fadeIn(2000);

});
$(window).scroll(function() {
	if ($(this).scrollTop() > 600) {
		$('.hamspan').css("position", "fixed");

	} else { 
		$('.hamspan').css("position", "absolute");
	} 
});