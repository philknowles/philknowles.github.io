$(document).foundation();

//Smooth Scrolling
$('header nav a, .logo a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});


//Slick Carousel
$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

//$('.featured-projects span').hide();
//$(".featured-projects img").hover(function () {
//    $(this).next("span").slideToggle(500);
//});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

//Slick Buttons
$('.col-tcg').show();
$('.btn-tcg').on('click', function () {
    if ($('.col-tcg').is(':hidden')) {
        $('.col-tcg').slideDown();
        $('.job-description').not('.col-tcg').slideUp();
    } else {
        $('.col-tcg').slideUp();
    }
});

$('.btn-con').on('click', function () {
    if ($('.col-con').is(':hidden')) {
        $('.col-con').slideDown();
        $('.job-description').not('.col-con').slideUp();
    } else {
        $('.col-con').slideUp();
    }
});

$('.btn-col').on('click', function () {
    if ($('.col-col').is(':hidden')) {
        $('.col-col').slideDown();
        $('.job-description').not('.col-col').slideUp();
    } else {
        $('.col-col').slideUp();
    }
});

$('.btn-thr').on('click', function () {
    if ($('.col-thr').is(':hidden')) {
        $('.col-thr').slideDown();
        $('.job-description').not('.col-thr').slideUp();
    } else {
        $('.col-thr').slideUp();
    }
});

$('.btn-fin').on('click', function () {
    if ($('.col-fin').is(':hidden')) {
        $('.col-fin').slideDown();
        $('.job-description').not('.col-fin').slideUp();
    } else {
        $('.col-fin').slideUp();
    }
});
