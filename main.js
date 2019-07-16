//index.html

//toggle navigation

$(document).ready(function () {
    $('.navHamburger').on("click", function () {
        $('nav ul').toggleClass("showNavigationbar");

    });
    //remove navigation if click on article div

    $('article').on("click", function () {
        $('nav ul').removeClass("showNavigationbar");
    });

    //github page

    $('a[href^="https://github.com/dani3lz0m/jakpodpisac.pl-project-1.git"]').attr('target', '_blank')
});

//resize paragraphs

$(document).ready(function () {
    var resize = new Array('.articleParagraph', '.errorParagraph p');
    resize = resize.join(',');

    var resetFont = $(resize).css('font-size');
    $(".resetText").click(function () {
        $(resize).css('font-size', resetFont);
    });

    $(".bigText").click(function () {
        var originalFontSize = $(resize).css('font-size');
        var originalFontNumber = parseFloat(originalFontSize, 10);
        var newFontSize = originalFontNumber * 1.2;
        $(resize).css('font-size', newFontSize);
        return false;
    });

    $(".smallText").click(function () {
        var originalFontSize = $(resize).css('font-size');
        var originalFontNumber = parseFloat(originalFontSize, 10);
        var newFontSize = originalFontNumber * 0.8;
        $(resize).css('font-size', newFontSize);
        return false;
    });
});

//button up

var btnUp = $('#buttonUp');

$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        btnUp.addClass('show');
    } else {
        btnUp.removeClass('show');
    }
});

btnUp.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});

//errors.html 


$(function () {
    $('.errorParagraph').hide();
    $('.companyName').click(function () {
        $('#div' + $(this).attr('target')).slideToggle('fast');
    });
});