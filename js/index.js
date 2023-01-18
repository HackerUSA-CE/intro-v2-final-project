$(document).ready(function () {
  $(".navLinks li a").delay(300).animate({ opacity: "1" }, 600);
  $(".heroContent .logo").delay(300).animate({ opacity: "1" }, 600);
  $(".heroContent button").delay(300).animate({ opacity: "1" }, 600);
  $(window).scroll(function () {
    $(".fade-in").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 500);
      }
    });
  });
});
