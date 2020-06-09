$('section .over').addClass('hidden');
$('a.cta').addClass('hidden');

$(window).scroll(function() {
  console.log('scrolling!');
  $('section .over.hidden, a.cta.hidden').each(function() {
    if (elementIsInView(this)) {
      $(this).removeClass('hidden');
    }
  });
});

elementIsInView = function (element) {
  var elementTop = $(element).offset().top;
  var elementBottom = elementTop + $(element).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};
