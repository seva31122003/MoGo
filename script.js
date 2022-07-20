$(function() {
    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

        // Header 

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){
        if(scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed")
        }        
    }

    // smothScroll 

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
       
        $("html, body").animate({
            scrollTop: blockOffset
        },500);

        introH -=10;
    });


    // nav toggle 
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $("#nav").toggleClass("active")

        $(this).toggleClass("active")
    });

    // collapse 

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
        blockId = $this.data('collapse');

        $(blockId).slideToggle();

        $this.toggleClass("active");
    });


    // slider 

    $("[data-slider]").slick({
        infinity: true,
        fade: true,
        slidesToShow:1,
        slidesToScroll : 1
    })
});