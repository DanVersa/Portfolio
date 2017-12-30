
/* Dan Versalov Scripts */

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

$(window).scroll(function() {

    if ($(document).scrollTop() > 100) {

      $(".intro-content").fadeOut("slow");

    } else {

      $(".intro-content").fadeIn("slow");

    }

});

$(".scroll").click(function() {

    $('html,body').animate({
        scrollTop: $(".freelance-info").offset().top - 100}, 1000);

});

$(".typeLoad").addClass("typeInOut");

$(window).on("load", function() {

    $(".typeLoad").removeClass("typeInOut").delay(200).queue(function(){

        $(this).dequeue();

        $(".typeLoad").addClass("typeFullHeight").delay(250).queue(function(){

            $(this).dequeue();

            $(".typeFullHeight").css("height", "100%");

            $(".typeLoad").removeClass("typeFullHeight").queue(function(){

                $(this).dequeue();

                $(".typeLoad").addClass("typeFullWidth").delay(250).queue(function(){

                    $(this).dequeue();

                    $(".loader").fadeOut(1200);

                });

            });

        });

    });

});

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #495867}";
    document.body.appendChild(css);
};

function openNav() {

    document.getElementById("navbarid").style.width = "100%";

}

function closeNav() {
    
    document.getElementById("navbarid").style.width = "0%";
    
}