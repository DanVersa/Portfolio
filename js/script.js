
$(window).on("load", function() {
    $(".loadertext").fadeOut(1000);
    $(".loader").fadeOut(2000);
});

$(document).ready(function(){
   
    $('.heading').hide().delay(800);
    $('.hamspan').hide().delay(800);
    $('.heading').fadeIn(1500);
    $('.hamspan').delay(200).fadeIn(1500);
    $(".navbarbtn").mouseenter(function(){

        $("#btn-bar-2").css("transform", "translate(3px, 0px)");

    });
    
    $(".navbarbtn").mouseleave(function(){
        
        $("#btn-bar-2").css("transform", "translate(0px, 0px)");
        
    });

});
function openNav() {

    document.getElementById("navbarid").style.width = "100%";

}

function closeNav() {
    
    document.getElementById("navbarid").style.width = "0%";
    
}
