$(document).ready(function() {
  // $('section#screenshots a').on('click', function() {
  //   $('div#modal img').attr('src', $(this).attr('data-image-url'));
  // });

  // ----- Navbar -----
  var nav = $('.navbar-fixed-top');
  // var distance = $('.navbar-fixed-top').offset();
  // // console.log(distance);
  // if (distance.top >= 300) {
  //   nav.addClass('effect');
  // } else {
  //   nav.removeClass('effect');
  // }

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    console.log(scroll); // Call the var
    if (scroll >= 180) {
      nav.addClass('effect');
    } else {
      nav.removeClass('effect');
    }
  });
  // ----- END Navbar -----

});

// ----- Navbar Smooth Scroll -----
var scroll = new SmoothScroll('a[href*="#about"]');
var scroll = new SmoothScroll('a[href*="#video"]');
var scroll = new SmoothScroll('a[href*="#support"]');
