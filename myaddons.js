$(document).ready(function() {

    $('#comp').click(function() {
        $('#comp').addClass('active');
        $('#maths').removeClass('active');
        $('#photos').removeClass('active');
    });

    $('#maths').click(function() {
        $('#comp').removeClass('active');
        $('#maths').addClass('active');
        $('#photos').removeClass('active');
    });

    $('#photos').click(function() {
        $('#comp').removeClass('active');
        $('#maths').removeClass('active');
        $('#photos').addClass('active');
    });

    $('#test').click(function() {
        $('#comp').removeClass('active');
        $('#maths').removeClass('active');
        $('#photos').removeClass('active');
    });
    // For photos
    $('.hover').mouseenter(function() {
        $(this).fadeTo('fast',0.7);
    });
    $('.hover').mouseleave(function() {
        $(this).fadeTo('fast',0);
    });



});
