import 'owl.carousel';

$(document).ready(function() {
  var tropheys = $('#tropheys-carousel')
  tropheys.owlCarousel({
    loop: false,
    rewind: true,
    items: 3,
    dots: false,
    autoplay: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        1200: {
            items: 2
        },
        1900: {
            items: 3
        }
    }
  })
});
