/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    "use strict";

    var controlaMenu = function () {
        $('.hamburger').toggleClass('is-active');
        $('.nav-toggle').toggleClass('is-active');
    };

    $('.hamburger').on('click', function (event) {
        controlaMenu();
    });

    $('.nav-toggle').on('click', function (event) {
        controlaMenu();
    });
    $('body').smoothScroll({
        delegateSelector: '.nav-toggle a',
        offset: -105
    });
    $('body').smoothScroll({
        delegateSelector: '.cd-top',
        offset: -105
    });
    
    $(window).scroll(function() {
       if($(this).scrollTop() > 10) {
           $('.cd-top').slideDown();
           
       } else {
           $('.cd-top').slideUp();
       }
    });

    $('[data-remodal-id=modal2]').remodal({
        modifier: 'with-red-theme'
    });

    $('.regular').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

})();

function init() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 300,
                header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header, "smaller");
        } else {
            if (classie.has(header, "smaller")) {
                classie.remove(header, "smaller");
            }
        }
    });
}
window.onload = init();

