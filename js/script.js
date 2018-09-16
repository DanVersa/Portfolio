
// Main Javascript File For Dan V Design Co.

$(".main").hide();
$(".nav-screen").hide();

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
  });

});

/* Navigation Anaimation */

function openNav() {

  $(".main").fadeOut(500).queue(function(){

    $(this).dequeue();
    $(".nav-screen").fadeIn(200);
    $("nav-link").addClass("slideup-animation");

  });

}

function closeNav() {

  $(".nav-screen").fadeOut(500).queue(function(){

    $(this).dequeue();
    $(".main").fadeIn(1000);

  });

}
