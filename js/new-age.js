(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top - 48
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 54
  });

  $('[data-toggle="tooltip"]').tooltip();
  // Collapse the navbar when page is scrolled


  $('.product-overlay').find('button').on('click', function () {
    $('.product').removeClass('expanded');
    $(this).parent().parent().addClass('expanded');
  });
  $('.product .description').find('.close-button').on('click', function () {
    $(this).parent().parent().removeClass('expanded');
  });

  $('.responsive').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: '10vw',
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0px',
      }
    }, ]
  });
  $('.slickMobile').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: '0',
  });

})(jQuery); // End of use strict