$(document).ready(function() {
  $('section#screenshots a').on('click', function() {
    $('div#modal img').attr('src', $(this).attr('data-image-url'));
  });


  // ----- Navbar -----
  var nav = $('.navbar-fixed-top');
  var distance = $('.navbar-fixed-top').offset();
  // console.log(distance);
  if (distance.top >= 180) {
    nav.addClass('effect');
  } else {
    nav.removeClass('effect');
  }

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    // console.log(scroll); // Call the var
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

  $('#feature .blue-circle').waypoint(function() {
      $(this.element).addClass('animated fadeInUp');
    }, {
      offset: '50%'
    });

  $('.features-image img').waypoint(function() {
      $(this.element).addClass('animated rubberBand');
    }, {
      offset: '50%'
    });

  $('#screenshots .col-sm-4').waypoint(function() {
      $(this.element).addClass('animated zoomIn');
      $(this.element).css({'opacity':1});
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
var scroll = new SmoothScroll('a[href*="#about"]', {
  speed: 1000,
  easing: 'easeInOutCubic',
  offset: 0 // Speac on the top
});
var scroll = new SmoothScroll('a[href*="#feature"]', {
  speed: 1000,
  easing: 'easeInOutCubic',
  offset: 0
});
var scroll = new SmoothScroll('a[href*="#video"]', {
  speed: 1000,
  easing: 'easeInOutCubic',
  offset: 50
});
var scroll = new SmoothScroll('a[href*="#screenshots"]', {
  speed: 1000,
  easing: 'easeInOutCubic',
  offset: 0
});
var scroll = new SmoothScroll('a[href*="#support"]', {
  speed: 1000,
  easing: 'easeInOutCubic'
});


// ----- END Navbar Smooth Scroll -----