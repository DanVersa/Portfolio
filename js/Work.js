$(document).ready(function(){
    $(window).scroll(function() {
    if ($(document).scrollTop() > 10) {
      $("nav").addClass("navcolor");
    } else {
      $("nav").removeClass("navcolor");
    }
  });