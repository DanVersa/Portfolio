
// Main Javascript File For Dan V Design Co.

$(".main").hide();
// $(".nav-screen").hide();

/* Link Animation */

$(document).on("click", "a", function () {

    var newUrl = $(this).attr("href");

    if (!newUrl || newUrl[0] === "#") {

        location.hash = newUrl;
        return;
    }

    $("html").fadeOut(function () {

        location = newUrl;

    });

    return false;

});

/* Load In The Page */

$(window).on("load", function() {

  $(".load-screen").delay(1600).fadeOut(500).queue(function(){

    $(this).dequeue();
    $(".main").fadeIn(400);
    $(".intro-img").addClass("slideup-animation");
    $(".intro-heading").addClass("slideup-animation");
    $(".intro-p").addClass("slideup-animation");
    $(".intro-link").addClass("slideup-animation");
    $(".link-hover").addClass("slideup-animation");
  });

});

/* Navigation Anaimation */

/* function openNav() {

  $(".main").fadeOut(500).queue(function(){

    $(this).dequeue();
    //$(".nav-screen").fadeIn(200);
    $(".nav-screen").addClass("slidein-nav");
    $("nav-link").addClass("slideup-animation");

  });

}

function closeNav() {

  $(".nav-screen").fadeOut(500).queue(function(){

    $(this).dequeue();
    //$(".main").fadeIn(1000);

  });

} */

function openNav() {

      document.getElementById("navbarid").style.width = "100%";
      $("nav-link").addClass("slideup-animation");

}

function closeNav() {

  document.getElementById("navbarid").style.width = "0";

}

/* Header Logo Hover */



function hover(element) {
  element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
}

function unhover(element) {
  element.setAttribute('src', 'http://dummyimage.com/100x100/000/fff');
}
