$(document).ready(function() {

  "use strict";

  // WOW ANIMATE
  new WOW().init();

  // NAVBAR SMOOTH SCROLLING
  // ================================
  $('.navbar-nav').localScroll();

  // OWL-CAROUSEL SETTING
  // ================================
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    autoplayHoverPause:true,
    smartSpeed:2000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });

  $(window).on({

    // WINDOW SCROLL
    // ==========================
    'scroll' : function(){

      // CHANGE NAVBAR BACKGROUND WHEN SCROLL
      // ====================================
      var wScroll = $(window).scrollTop();
      var navbar = $('.navbar');
      var bgColor = "#1c568f"

      if (wScroll >= 60) {
        navbar.css('background', bgColor);
      } else {
        navbar.css('background', 'inherit');
      }

    },

    // WINDOW LOAD
    // =============================
    'load' : function() {

      // HIDE PRELOADERS
      // ================================
      $('.preloader').hide();

    }

  });

});
