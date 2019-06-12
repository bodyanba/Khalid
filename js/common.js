$(document).ready(function () {

  $(".owl-1").owlCarousel({
    items: 1,
    smartSpeed: 1000,
  });

  $(".owl-2").owlCarousel({
    items: 1,
    margin: 20,
    smartSpeed: 1000,
  });

  var owl3 = $('.owl-3'),
      owlIndex = $('.section-5 .slider');
  owl3.owlCarousel({
    items: 1,
    smartSpeed: 1000,
    margin: 20,
    dots: false,
    autoplay: true,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    onInitialized: function(e) {
      var index = e.item.index - 1;
      owlIndex.attr("data-index", index);
    },
  });
  owl3.on('changed.owl.carousel', function(e) {
    var index = e.item.index - 1;
    if (index == 4) {
      index = 1
    } else if (index == 5) {
      index = 2
    } else if (index == 6 || index == 0) {
      index = 3
    };
    owlIndex.attr("data-index", index);
  });

  $(".owl-4").owlCarousel({
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1500: {
        items: 6,
      },
    },
    smartSpeed: 1000,
    margin: 12,
    dots: false,
  });

  $(".sandwich").on("click", function() {
    $("body").toggleClass("menubar-in");
  });

  $(window).on("scroll", function() {
  	if ($(this).scrollTop() >= 100) {
      $('.fixed-top').addClass("navbar-bg");
    } else {
      $('.fixed-top').removeClass("navbar-bg");
    }
  });

  $('#icon-scroll').on('click', function () {
    $('html, body').animate({
      scrollTop: $('main').offset().top
    }, 500);
  });

  $(window).enllax();

  var a = 0;
  $(window).scroll(function() {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
          {
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });
      });
      a = 1;
    }
  });

});