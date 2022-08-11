$(function () {
    $('.box-image').each(function () {

        var parent = $(this).parent('div');
        var mainHeight = parent.find('.box-text').innerHeight();
        var images = $(this).find('a');
        var imagesLength = images.length;
        var staticImages = 0;

        if (imagesLength > 1) {
            staticImages = ($(window).width() > 991 && $(this).hasClass("col-md-6")) ? Math.floor(mainHeight / 600) : 0;

            if (staticImages > 0) {
                for (i = 0; i < staticImages; i++) {
                    images.eq(i).appendTo(parent.find(".staticImages"));
                }
            }

            // append the rest of the images
            for (i = (staticImages); i < imagesLength; i++) {
                cloneImg = images.eq(i).clone();

                cloneImg.clone().appendTo(parent.find(".slider-for"));
                cloneImg.clone().find('img').appendTo(parent.find(".slider-nav"));
            }

            // clear imagesDiv
            parent.find(".imagesDiv").remove();

            parent.find('.box-image').imagesLoaded({},
                function () {
                    // images have loaded
                    parent.find('.slider-for').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true,
                        arrows: false,
                        dots: false,
                        autoplay: true,
                        autoplaySpeed: 6000,
                        responsive: true,
                        asNavFor: '.slider-nav'
                    });
                    if (parent.find('.slider-nav').find('img').length > 1) {
                        parent.find('.slider-nav').slick({
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            asNavFor: '.slider-for',
                            dots: false,
                            centerMode: true,
                            arrows: false,
                            focusOnSelect: true
                        });
                    }
                    else {
                        parent.find('.slider-nav').remove();
                    }
                }
            );
        }
        else {

        }
    });
});