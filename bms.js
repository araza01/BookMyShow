$(document).ready(function() {
    $(".open-search").click(function() {
        $(".search-content").show();
    });
    $(".close-search").click(function() {
        $(".search-content").hide();
    });
    $(".nav-menu").click(function() {
        $(".menu-bar").show();
    });
    $(".menu-bar").click(function() {
        $(".menu-bar").hide();
    });
    $(".nav-city").click(function() {
        $(".city-show").show();
    });
    $(".city-show").click(function() {
        $(".city-show").hide();
    });
    $(".nav-language").click(function() {
        $(".lang-show").show();
    });
    $(".lang-show").click(function() {
        $(".lang-show").hide();
    });

    $("#carousel-slide").mouseenter(function() {
        $(".main-slide").show();
    });
    $("#carousel-slide").mouseleave(function() {
        $(".main-slide").hide();
    });

    $("#discover").mouseenter(function() {
        $(".carousel-control-prev-icon").show();
        $(".carousel-control-next-icon").show();
        $(".icon1").show();
        $(".icon2").show();
        $(".main-slide").hide();
    });
    $("#discover").mouseleave(function() {
        $(".carousel-control-prev-icon").hide();
        $(".carousel-control-next-icon").hide();
        $(".icon1").hide();
        $(".icon2").hide();
        $(".main-slide").hide();
    });

    $("#events").mouseenter(function() {
        $(".carousel-control-prev-icon").show();
        $(".carousel-control-next-icon").show();
        $(".icon1").show();
        $(".icon2").show();
        $(".main-slide").hide();
    });
    $("#events").mouseleave(function() {
        $(".carousel-control-prev-icon").hide();
        $(".carousel-control-next-icon").hide();
        $(".icon1").hide();
        $(".icon2").hide();
        $(".main-slide").hide();
    });

    $("#plays").mouseenter(function() {
        $(".carousel-control-prev-icon").show();
        $(".carousel-control-next-icon").show();
        $(".icon1").show();
        $(".icon2").show();
        $(".main-slide").hide();
    });
    $("#plays").mouseleave(function() {
        $(".carousel-control-prev-icon").hide();
        $(".carousel-control-next-icon").hide();
        $(".icon1").hide();
        $(".icon2").hide();
        $(".main-slide").hide();
    });

    $("#sports").mouseenter(function() {
        $(".carousel-control-prev-icon").show();
        $(".carousel-control-next-icon").show();
        $(".icon1").show();
        $(".icon2").show();
        $(".main-slide").hide();
    });
    $("#sports").mouseleave(function() {
        $(".carousel-control-prev-icon").hide();
        $(".carousel-control-next-icon").hide();
        $(".icon1").hide();
        $(".icon2").hide();
        $(".main-slide").hide();
    });

    $("#activities").mouseenter(function() {
        $(".carousel-control-prev-icon").show();
        $(".carousel-control-next-icon").show();
        $(".icon1").show();
        $(".icon2").show();
        $(".main-slide").hide();
    });
    $("#activities").mouseleave(function() {
        $(".carousel-control-prev-icon").hide();
        $(".carousel-control-next-icon").hide();
        $(".icon1").hide();
        $(".icon2").hide();
        $(".main-slide").hide();
    });

    
});

