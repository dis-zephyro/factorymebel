//  Slider

$('.office ul').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.office .nav-prev').click(function(){
    $('.office ul').slick('slickPrev');
});

$('.office .nav-next').click(function(){
    $('.office ul').slick('slickNext');
});

$('.hotel ul').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.hotel .nav-prev').click(function(){
    $('.hotel ul').slick('slickPrev');
});

$('.hotel .nav-next').click(function(){
    $('.hotel ul').slick('slickNext');
});


$(".product a").fancybox({
    'padding' : 0
});



jQuery(document).ready(function () {
    $("#makeMeScrollable").smoothDivScroll({
        autoScrollingDirection: "endlessLoopRight",
        autoScrollingStep: 2,
        autoScrollingInterval: 25
    });

    // Logo parade
    $("#makeMeScrollable").bind("mouseover", function () {
        $(this).smoothDivScroll("stopAutoScrolling");
    }).bind("mouseout", function () {
        $(this).smoothDivScroll("startAutoScrolling");
    });

});


// Map

ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.9433,37.2611],
        zoom: 13,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark([55.9433,37.2611], {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [47, 69],
        iconImageOffset: [-23, -70]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');
    myMap.geoObjects.add(myPlacemark);
}
