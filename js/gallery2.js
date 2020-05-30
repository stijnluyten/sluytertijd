var imagesOnPage = [];
var currentImage = undefined;

$('.image-gallery .image img').each(
    function (index, element) {
        imagesOnPage.push(element.attributes.src.value);
    }
);

$('.image-gallery .image').click(
    function (event) {
        currentImage = event.target.attributes.src.value;

        $('.image-detail .image img').attr('src', largeImageFor(currentImage));
        $('.image-detail').show();
    }
);

$('.image-detail .image').click(
    function () {
        console.log('clicked detail!');
        $('.image-detail').hide();
    }
);

$('.image-detail .next').click(function () {
    var indexOfCurrentImage = imagesOnPage.indexOf(currentImage);
    if (imagesOnPage[indexOfCurrentImage + 1]) {
        currentImage = imagesOnPage[indexOfCurrentImage + 1];
    }
    $('.image-detail .image img').attr('src', largeImageFor(currentImage));
});

$('.image-detail .previous').click(function () {
    var indexOfCurrentImage = imagesOnPage.indexOf(currentImage);
    if (imagesOnPage[indexOfCurrentImage - 1]) {
        currentImage = imagesOnPage[indexOfCurrentImage - 1];
    }
    $('.image-detail .image img').attr('src', largeImageFor(currentImage));
});

function largeImageFor(currentImage) {
	return currentImage.replace('small/', '');
}
