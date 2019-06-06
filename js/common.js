$(document).ready(function () {

  $(".owl-1").owlCarousel({
    items: 1,
    smartSpeed: 1000,
  });

  $(".navbar-toggler").on("click", function() {
    $(this).toggleClass("active");
  });

  // $(window).enllax();

});