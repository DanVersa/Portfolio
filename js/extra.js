$(".main").hide();

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

  $(".main").fadeIn(2500);

});

function openNav() {

  document.getElementById("navbarid").style.width = "100%";
  $("nav-link").addClass("slideup-animation");

}

function closeNav() {

  document.getElementById("navbarid").style.width = "0";

}
