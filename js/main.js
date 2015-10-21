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
                form   =     $('input[name="form"]', $form).val();
            console.log(name, phone, form, type);
            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone, form:form, type:type}
            }).done(function(msg) {
                console.log(name, phone, form, type);
             //   document.location.replace('http://livebz.ru?check='+type);

                $('form').find('input[type=text], textarea').val('');
                console.log('удачно');
                $.fancybox.open('#done', 'closeBtn : false');
                setTimeout("$.fancybox.close()", 3000);
            });
        }
    });

});