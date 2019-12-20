var inners = document.querySelector("#slider-pager");
var length = inners.querySelectorAll(".inner").length;
$(function () {
    var max =0;
    $("#slider").responsiveSlides({
        manualControls: "#slider-pager",
        maxwidth:800,
        pager:false,
        nav:true,
        speed:500,
        namespace:"callbacks",
        before: function () {
            var select = document.querySelector("#slider-pager");
            var inner = select.querySelectorAll(".callbacks_here");
            var value = inner[0].classList[1].split("callbacks1_s");
            if (max < parseInt(value[1])){
               right(parseInt(value[1]));
            }else{
                left();
            }
            max = parseInt(value[1]);
        }
    })
});

function right(value) {
    $("#slider-pager").animate({
        scrollLeft: "+=20px"
    },"slow");
    var width = $("#slider-pager").outerWidth();
    var scrollWidth = $("#slider-pager")[0].scrollWidth;
    var scrollLeft = $("#slider-pager").scrollLeft();
    if (scrollWidth-width===scrollLeft){
        if (typeof value === "number" && value=== length){
            $("#slider-pager").animate({
                scrollLeft: "1px"
            },"50");
        }
    }
}
function left() {
    $("#slider-pager").animate({
        scrollLeft: "-=20px"
    },"slow");
    var scrollLeft = $("#slider-pager").scrollLeft();
    var scrollContainer = $("#slider-pager");
    var maxScrollLeft = $(scrollContainer)[0].scrollWidth-$(scrollContainer).width();
    if (scrollLeft===0){
        $("#slider-pager").animate({
            scrollLeft: maxScrollLeft+"px"
        },"50");
    }
}