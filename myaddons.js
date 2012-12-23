$(document).ready(function() {

    // For top links
    $('.top').click(function() {
        $('.top').removeClass('active');
        $(this).addClass('active');
    });

    // For photos
    $('.hover').mouseenter(function() {
        $(this).fadeTo('fast',0.7);
    });
    $('.hover').mouseleave(function() {
        $(this).fadeTo('fast',0);
    });

});
