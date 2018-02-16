
$(".main").hide();
$(".nav-screen").hide();

$(document).on("click", "a", function () {

    // get the href attribute
    var newUrl = $(this).attr("href");

    // veryfy if the new url exists or is a hash
    if (!newUrl || newUrl[0] === "#") {
        // set that hash
        location.hash = newUrl;
        return;
    }

    // now, fadeout the html (whole page)
    $("html").fadeOut(function () {
        // when the animation is complete, set the new location
        location = newUrl;
    });

    // prevent the default browser behavior.
    return false;
});

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

/*$(window).scroll(function() {

  if ($(document).scrollTop() > 800) {

    $(".dept-sec").addClass("slideup-animation");

  }

});*/

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

function emailCopy() {

  var copy = "dan.versalov@gmail.com";
  var copytext = $('<input>').val(copy).appendTo('body').select();

  document.execCommand('Copy');

}
