$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset:0 });
    return false;
});

$('.btn-up').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset:0 });
    return false;
});

$(function() {
    $(".btn-up").hide();
    $(window).scroll(function() {
        if($(this).scrollTop() > 200) {
            $('.btn-up').fadeIn();
        } else {
            $('.btn-up').fadeOut();
        }
    });
});


//  Slider

$('.office ul').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.header__nav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset:-115});
    return false;
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


//  Modal

$(".btn-modal").fancybox({
    'padding'    : 0,
    'tpl'        : {
        closeBtn : '<a title="Close" class="btn_close" href="javascript:;"></a>'
    }
});

$(".product a").fancybox({
    'padding' : 0,
    'tpl'        : {
        closeBtn : '<a title="Close" class="btn_close" href="javascript:;"></a>'
    }
});

$(".reply a").fancybox({
    'maxWidth'   : 600,
    'padding'    : 0,
    'tpl'        : {
        closeBtn : '<a title="Close" class="btn_close" href="javascript:;"></a>'
    }
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


// ----- Маска ----------
jQuery(function($){
    $("input[name='phone']").mask("+7(999) 999-9999");
});


$(document).ready(function() {

    $('.btn-submit').click(function() {

        $('body').find('form:not(this)').children('div').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).closest('form').get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).closest('form'),
                name    =     $('input[name="name"]', $form).val(),
                type    =     $('input[name="type"]', $form).val(),
                phone   =     $('input[name="phone"]', $form).val(),
                email   =     $('input[name="email"]', $form).val(),
                form    =     $('input[name="form"]', $form).val(),
                message =     $('textarea[name="message"]', $form).val();
            console.log(name, phone, email, form, type, message);
            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone, email:email, form:form, type:type, message:message}
            }).done(function(msg) {
                $('form').find('input[type=text], textarea').val('');
                console.log('удачно');
                document.location.href = "http://xn--90ahbyb1c7c.xn--p1ai/done.html";
            });
        }
    });

});