
export default function Header() {

  jQuery(document).ready(function() {

    jQuery("body").on("click","#list", function (event) { //scroll
      event.preventDefault();
      var idhref  = jQuery(this).attr('href'),
      scrollto = jQuery(idhref).offset().top - 100;
      jQuery('body,html').animate({scrollTop: scrollto}, 1500);
    });

  });

}
