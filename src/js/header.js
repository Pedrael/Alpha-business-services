import jQuery from 'jquery';

export default function Header() {

  jQuery(document).ready(function() {

    if(jQuery(document).width() <= 768) jQuery(".menu").hide();

    if( jQuery(window).scrollTop() == 0) {
      jQuery("header").addClass("trans");
    }
    else {
      jQuery(".header").addClass("blue");
    }

    jQuery("body").on("click","#list", function (event) { //scroll
      event.preventDefault();
      var idhref  = jQuery(this).attr('href'),
      scrollto = jQuery(idhref).offset().top - 100;
      jQuery('body,html').animate({scrollTop: scrollto}, 1500);
    });

    jQuery(window).scroll(function(event) { // header swap

      if( jQuery(window).scrollTop() == 0) {
        jQuery(".header").removeClass("blue");
        jQuery(".header").addClass("trans");
      }
      else {
        jQuery(".header").removeClass("trans");
        jQuery(".header").addClass("blue");
      }
    });

    jQuery("ul").on("click", "a", function (event) {
      if(jQuery(document).width() <= 768) jQuery(".menu").hide();
    });

    jQuery(".hamburger").on("click", function (event) {
      jQuery(".menu").toggle();
    });

  });

}
