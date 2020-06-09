$("a").on('click', function (event) {

  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;

    var goTo = $(hash);
    var scrollTo = goTo.offset().top;

    $('html, body').animate({
      scrollTop: scrollTo
    }, 400, 'swing', function () {
      window.location.hash = hash;
    });
  }
});
