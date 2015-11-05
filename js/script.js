(function () {

    var sliderOptions = {
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300,
        //variableWidth: true,
        prevArrow: '<span class="arrow-left"></span>',
        nextArrow: '<span class="arrow-right"></span>',
        responsive: [
            {
                breakpoint: 767,
                settings: 'unslick'
            }
        ]
    };

    $('.products__list').slick(sliderOptions);

    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        prevArrow: '<span class="arrow-left"></span>',
        nextArrow: '<span class="arrow-right"></span>'
    });

    $('.select-block span').click(function () {
        var $this = $(this),
            dropList = $this.next();

        if (dropList.hasClass('active')) {
            dropList.removeClass('active');
        } else {
            dropList.addClass('active');
        }
    });


    $('.dropdown-select li').click(function () {
        var $this = $(this),
            liParent = $this.parent(),
            liValue = $this.html();

        liParent.removeClass('active');
        liParent.prev().html(liValue);
    });

    $('.popup-call').click(function () {
        var $this = $(this),
            formToCall = $('#' + $this.data('popup'));
        if (!$this.hasClass('active')) {
            $this.addClass('active');
            formToCall.addClass('active');
        } else {
            $this.removeClass('active');
            formToCall.removeClass('active');
        }
    });

    $('.popup-close').click(function () {
        $(this).parent().removeClass('active');
        $(this).parent().prev().removeClass('active');
    });

    $('.header__menu-toggler').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.mobile-nav').addClass('active');
        } else {
            $(this).removeClass('active');
            $('.mobile-nav').removeClass('active');
        }
    });
    $('.header__search--toggle').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.header__search').addClass('active');
        } else {
            $(this).removeClass('active');
            $('.header__search').removeClass('active');
        }
    });

    $('.mobile-nav__item--lv1 .mobile-nav__link').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        if (!$this.parent().hasClass('active')) {
            $('.mobile-nav__item--lv1').removeClass('active');
            $this.parent().addClass('active');
        } else {
            $this.parent().removeClass('active');
        }
    })

})();
