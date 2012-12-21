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
    $('#africa').mouseenter(function() {
        $('#africa').fadeTo('fast',0.7);
    });
    $('#africa').mouseleave(function() {
        $('#africa').fadeTo('fast',0);
    });
    $('#belize').mouseenter(function() {
        $('#belize').fadeTo('fast',0.7);
    });
    $('#belize').mouseleave(function() {
        $('#belize').fadeTo('fast',0);
    });
    $('#aruba').mouseenter(function() {
        $('#aruba').fadeTo('fast',0.7);
    });
    $('#aruba').mouseleave(function() {
        $('#aruba').fadeTo('fast',0);
    });
    $('#home').mouseenter(function() {
        $('#home').fadeTo('fast',0.7);
    });
    $('#home').mouseleave(function() {
        $('#home').fadeTo('fast',0);
    });
    $('#bvi').mouseenter(function() {
        $('#bvi').fadeTo('fast',0.7);
    });
    $('#bvi').mouseleave(function() {
        $('#bvi').fadeTo('fast',0);
    });
    $('#galapagos').mouseenter(function() {
        $('#galapagos').fadeTo('fast',0.7);
    });
    $('#galapagos').mouseleave(function() {
        $('#galapagos').fadeTo('fast',0);
    });



});
