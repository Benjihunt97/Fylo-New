$(document).ready(function () {
    // Show the hero section after 1200ms when the page is loaded
    setTimeout(function () {
        $("#hero-text").removeClass("-translate-x-[200%]");
        $("#hero-img").removeClass("translate-x-[200%]");
    }, 1200);

    // Show the text and images when scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 480) {
            $("#about-text").removeClass("-translate-x-[200%]");
            $("#about-img").removeClass("translate-x-[200%]");
        }
    });

    // Open and close the menu
    $("#open-menu").click(function () {
        $("#menu").addClass("right-0");
    });

    $("#close-menu").click(function () {
        $("#menu").removeClass("right-0");
    });
});
