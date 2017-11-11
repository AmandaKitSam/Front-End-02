$(document).ready(function() {
  $('section#screenshots a').on('click', function() {
    $('div#modal img').attr('src', $(this).attr('data-image-url'));
  });

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

  // ----- Way Point -----
  $('#about .blue-circle').waypoint(function() {
    // console.log("You have entered the section");
      $(this.element).addClass('animated fadeInUp');
    }, {
      offset: '50%'
    });

  $('#large-font-Reg').waypoint(function() {
      $(this.element).addClass('animated tada');
    }, {
      offset: '50%'
    });

  $('#download div.phone img').waypoint(function() {
      $(this.element).addClass('animated fadeInRight');
    }, {
      offset: '50%'
    });

  $('#download .platforms > div').waypoint(function() {
      $(this.element).addClass('animated fadeInUp');
    }, {
      offset: '50%'
    });

}); // END .ready function


// ----- Navbar Smooth Scroll -----
var scroll = new SmoothScroll('a[href*="#about"]');
var scroll = new SmoothScroll('a[href*="#feature"]');
var scroll = new SmoothScroll('a[href*="#video"]');
var scroll = new SmoothScroll('a[href*="#screenshots"]');
var scroll = new SmoothScroll('a[href*="#support"]');


// ----- END Navbar Smooth Scroll -----












// ----- END Navbar Smooth Scroll -----
