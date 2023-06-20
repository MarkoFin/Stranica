

(function($) {

    "use strict"; 
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: (target.offset().top - 60)
            }, 1000, "easeInOutExpo");
            return false;
        }
    });


    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });


    $('body').scrollspy({
        target: '#mainNav',
        offset: 82
    });

    var toggleAffix = function(affixElement, scrollElement, wrapper) {

        var height = affixElement.outerHeight(),
            top = wrapper.offset().top;

        if (scrollElement.scrollTop() >= top) {
            wrapper.height(height);
            affixElement.addClass("affix");
        } else {
            affixElement.removeClass("affix");
            wrapper.height('auto');
        }

    };

    $('[data-toggle="affix"]').each(function() {
        var ele = $(this),
            wrapper = $('<div></div>');

        ele.before(wrapper);
        $(window).on('scroll resize', function() {
            toggleAffix(ele, $(this), wrapper);
        });

        // init
        toggleAffix(ele, $(window), wrapper);
    });


})(jQuery);


$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 2,
        smartSpeed: 700,
        autoplay: true,
        loop: true,
        pagination: true,
        slideSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });
});

  $(function() {

      $("#portfolio").magnificPopup({
          delegate: 'a', 
          type: 'image',
          gallery: {
              enabled: true
          }

      });
  });


  (function($) {

      $(window).scroll(function() {

          if ($(this).scrollTop() < 50) {
              $("nav").removeClass("ss-top-nav");
              $("#back-to-top").fadeOut();

          } else {
              $("nav").addClass("ss-top-nav");
              $("#back-to-top").fadeIn();
          }
      });
  })(jQuery); 