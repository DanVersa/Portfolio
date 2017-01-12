$(document).ready(function(){
    $(window).scroll(function() {
    if ($(document).scrollTop() > 10) {
      $("nav").addClass("navcolor");
    } else {
      $("nav").removeClass("navcolor");
    }
  });
    $(window).scroll(function() {
    if ($(document).scrollTop() > 20) {
      $(".fade").fadeOut("slow");
    } else {
      $(".fade").fadeIn("slow");
    }
  });
    $(".scroll").click(function() {
        $('html,body').animate({
            scrollTop: $(".page2").offset().top - 30}, 1500);
    });
    
});