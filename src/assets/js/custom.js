$(document).ready(function () {

    "use strict";
    /*==============================================================
// toggler js
==============================================================*/

    $("button.navbar-toggler").on('click', function () {
        $(".main-menu-area").addClass("active");
        $(".mm-fullscreen-bg").addClass("active");
        $("body").addClass("hidden");
    });

    $(".close-box").on('click', function () {
        $(".main-menu-area").removeClass("active");
        $(".mm-fullscreen-bg").removeClass("active");
        $("body").removeClass("hidden");
    });

    $(".mm-fullscreen-bg").on('click', function () {
        $(".main-menu-area").removeClass("active");
        $(".mm-fullscreen-bg").removeClass("active");
        $("body").removeClass("hidden");
    });

    /*==============================================================
      Newsletter Popup
    ==============================================================*/

    $('#myModal1').modal('show');

    /*==============================================================
    // cart js
    ==============================================================*/

    $(".shopping-cart a.cart-count").on('click', function () {
        $(".mini-cart").addClass("show");
        $(".mm-fullscreen-bg").addClass("active");
        $("body").addClass("hidden");
    });
    $(".addToCartIcon").on('click', function () {
        $(".mini-cart").addClass("show");
        $(".mm-fullscreen-bg").addClass("active");
        $("body").addClass("hidden");


    });
    $(".quick-view .addToCartIcon").on('click', function () {
        $(".mini-cart").addClass("show");
        $(".mm-fullscreen-bg").addClass("active");

        $('.quick-view .modal').modal('hide');
    });

    $(".shopping-cart-close").on('click', function () {
        $(".mini-cart").removeClass("show");
        $(".mm-fullscreen-bg").removeClass("active");
        $("body").removeClass("hidden");
    });

    $(".mm-fullscreen-bg").on('click', function () {
        $(".mini-cart").removeClass("show");
        $(".mm-fullscreen-bg").removeClass("active");
        $("body").removeClass("hidden");
    });
    $('#menuSideBar').click(function () {
      $('.sideMenu').addClass('active');
      $('.mm-fullscreen-bg').addClass('active')
  })
  $('.sideMenu .close').click(function () {
      $('.sideMenu').removeClass('active');
      $('.mm-fullscreen-bg').removeClass('active')
  })
  $(".mm-fullscreen-bg").on('click', function () {
      $(".sideMenu").removeClass("active");
      $(".mm-fullscreen-bg").removeClass("active");

  });
    /*==============================================================
    // header sticky
    ==============================================================*/
    $(window).scroll(function () {
        var sticky = $('.header-main-area'),
            scroll = $(window).scrollTop();
        if (scroll >= 150) {
            sticky.addClass('is-sticky');
        } else {
            sticky.removeClass('is-sticky');
        }
    });

    /*==============================================================
    // home slider
    ==============================================================*/

    $('.home-slider').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        nav: true,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        fade: true,
        transitionStyle: "fade",
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    $('.home-slider2').owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        nav: true,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        fade: true,
        transitionStyle: "fade",
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    /*==============================================================
    // category image slider
    ==============================================================*/

    $('.home-category').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 3,
                margin: 15
            },
            479: {
                items: 3,
                margin: 15
            },
            768: {
                items: 4
            },
            979: {
                items: 6
            },
            1199: {
                items: 6
            }
        }
    });

    /*==============================================================
    // trending products slider
    ==============================================================*/

    $('.trending-products').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 2,
                margin: 15
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });



    /*==============================================================
    //quick view slider
    ==============================================================*/

    $('.quick-slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        sautoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });


    /*==============================================================
    // deal countdown js
    ==============================================================*/

    if (document.getElementById('days1')) {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
        x = setInterval(function () {
            if (document.querySelectorAll('.contdown_row').length == 1) {
                document.getElementById('days').innerText = Math.floor(distance / (day)),
                    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
            } else {
                var i;
                for (i = 1; i <= document.querySelectorAll('.contdown_row').length; i++) {
                    console.log($('[data-timer=' + i + ']').attr('data-date'));
                    var date_date = $('[data-timer=' + i + ']').attr('data-date');
                    var date_timer = $('.contdown_row').attr('data-timer');
                    var countDown = new Date(date_date).getTime();
                    var now = new Date().getTime();
                    var distance = countDown - now;
                    document.getElementById('days' + [i]).innerText = Math.floor(distance / (day)),
                        document.getElementById('hours' + [i]).innerText = Math.floor((distance % (day)) / (hour)),
                        document.getElementById('minutes' + [i]).innerText = Math.floor((distance % (hour)) / (minute)),
                        document.getElementById('seconds' + [i]).innerText = Math.floor((distance % (minute)) / second);
                }
            }
        }, second)
    }

    /*==============================================================
    // swiper product-tab slider
    ==============================================================*/

    var swiper = new Swiper('.swiper-container.home-pro-tab', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            991: {
                slidesPerView: 3
            },
            1199: {
                slidesPerView: 4
            }
        }
    });

    /*==============================================================
    // testimonials slider
    ==============================================================*/

    $('.testi-m').owlCarousel({
        loop: false,
        rewind: true,
        nav: true,
        margin: 30,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            479: {
                items: 1,
                margin: 15
            },
            768: {
                items: 2
            },
            979: {
                items: 2
            },
            1199: {
                items: 2
            }
        }
    });

    /*==============================================================
    // blog slider
    ==============================================================*/

    $('.home-blog').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            479: {
                items: 2,
                margin: 15
            },
            768: {
                items: 2
            },
            979: {
                items: 2
            },
            1199: {
                items: 3
            }
        }
    });

    /*==============================================================
    // brand-logo slider
    ==============================================================*/

    $('.brand-carousel').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            479: {
                items: 2
            },
            540: {
                items: 3
            },
            768: {
                items: 5
            },
            979: {
                items: 6
            },
            1199: {
                items: 6
            }
        }
    });

    /*==============================================================
    // back to top js
    ==============================================================*/

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('#top').addClass('show');
        } else {
            $('#top').removeClass('show');
        }
    });


    $('#top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // **************************************** home-2********************************************

    /*==============================================================
    // trending products sliders
    ==============================================================*/

    $('.home2-trending').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        sautoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin: 15
            },
            479: {
                items: 2,
                margin: 15
            },
            768: {
                items: 3
            },
            979: {
                items: 4
            },
            1199: {
                items: 5
            }
        }
    });

    /*==============================================================
    //category image
    ==============================================================*/

    $('.home2-cate-image').owlCarousel({
        loop: true,
        rewind: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        sautoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin: 15
            },
            479: {
                items: 2,
                margin: 15
            },
            600: {
                items: 3,
                margin: 15
            },
            768: {
                items: 4,
                margin: 20
            },
            979: {
                items: 5,
                margin: 20
            },
            1199: {
                items: 7,
                margin: 20
            }
        }
    });

    /*==============================================================
    // swiper product-tab slider
    ==============================================================*/

    var swiper = new Swiper('.swiper-container.our-products-tab', {
        slidesPerView: 3,
        slidesPerColumn: 3,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 2,
                slidesPerColumn: 3
            }
        }
    });

    /*==============================================================
    // testimonials slider
    ==============================================================*/

    $('.home2-testi').owlCarousel({
        loop: false,
        rewind: true,
        nav: true,
        margin: 30,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            479: {
                items: 1,
                margin: 15
            },
            768: {
                items: 1
            },
            979: {
                items: 1
            },
            1199: {
                items: 1
            }
        }
    });

    /*==============================================================
    // featured products slider
    ==============================================================*/

    $('.featured').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin: 15
            },
            479: {
                items: 2,
                margin: 15
            },
            768: {
                items: 3
            },
            979: {
                items: 4
            },
            1199: {
                items: 5
            }
        }
    });

    /*==============================================================
    // blog
    ==============================================================*/

    $('.blog2').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            479: {
                items: 2,
                margin: 15
            },
            768: {
                items: 2
            },
            979: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    });

    // **************************************** home-3********************************************

    /*==============================================================
    // home slider
    ==============================================================*/

    $('.home-slider3').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        nav: true,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        fade: true,
        transitionStyle: "fade",
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    /*==============================================================
    // swiper product-tab slider
    ==============================================================*/

    var swiper = new Swiper('.swiper-container.our-pro-tab', {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 3
            },
            1199: {
                slidesPerView: 4
            }
        }
    });

    /*==============================================================
    // special products swiper
    ==============================================================*/

    var swiper = new Swiper('.swiper-container.special-pro', {
        slidesPerView: 1,
        slidesPerColumn: 3,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerColumn: 2,
                slidesPerView: 1,
            },
            640: {
                slidesPerColumn: 2,
                slidesPerView: 1,
            },
            768: {
                slidesPerColumn: 3,
                slidesPerView: 2,
            },
            1024: {
                slidesPerColumn: 2
            }
        }
    });

    /*==============================================================
    // testimonials slider
    ==============================================================*/

    $('.testi-3').owlCarousel({
        loop: false,
        rewind: true,
        nav: false,
        margin: 30,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            479: {
                items: 1,
                margin: 15
            },
            768: {
                items: 1
            },
            979: {
                items: 1
            },
            1199: {
                items: 1
            }
        }
    });

    /*==============================================================
    // deal of the day
    ==============================================================*/

    $('.deal-day').owlCarousel({
        loop: false,
        rewind: true,
        nav: true,
        dots: false,
        margin: 30,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            479: {
                items: 2,
                margin: 15
            },
            768: {
                items: 1
            },
            979: {
                items: 1
            },
            1199: {
                items: 1
            }
        }
    });

    /*==============================================================
    // trending products swiper
    ==============================================================*/

    var swiper = new Swiper('.swiper-container.trening-left-pro', {
        slidesPerView: 1,
        slidesPerColumn: 3,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerColumn: 2,
                slidesPerView: 1,
            },
            640: {
                slidesPerColumn: 2,
                slidesPerView: 1,
            },
            768: {
                slidesPerColumn: 3,
                slidesPerView: 2,
            },
            1024: {
                slidesPerColumn: 2
            }
        }
    });

    /*==============================================================
    // featured products slider
    ==============================================================*/

    $('.featured-products-slider').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        sautoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin: 15
            },
            479: {
                items: 2,
                margin: 15
            },
            768: {
                items: 3
            },
            979: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });

    /*==============================================================
    //brand
    ==============================================================*/

    $('.home3-brand').owlCarousel({
        loop: false,
        rewind: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            479: {
                items: 3
            },
            768: {
                items: 4
            },
            979: {
                items: 2
            },
            1199: {
                items: 2
            }
        }
    });

    /*==============================================================
    //blog
    ==============================================================*/

    $('.home3-blog').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        lazyLoad: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            479: {
                items: 2,
                margin: 15
            },
            768: {
                items: 2
            },
            979: {
                items: 2
            },
            1199: {
                items: 3
            }
        }
    });

    // **************************************** home-4********************************************

    /*==============================================================
    // home slider
    ==============================================================*/

    $('.home4-slider').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        fade: true,
        transitionStyle: "fade",
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    /*==============================================================
    // swiper product-tab slider
    ==============================================================*/

    var swiper = new Swiper('.swiper-container.home4-tab', {
        slidesPerView: 5,
        slidesPerColumn: 2,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 4
            }
        }
    });

    /*==============================================================
    //category image
    ==============================================================*/

    $('.home4-cate').owlCarousel({
        loop: true,
        rewind: true,
        nav: true,
        margin: 20,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        sautoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin: 15
            },
            479: {
                items: 3,
                margin: 15
            },
            768: {
                items: 3,
            },
            979: {
                items: 4,
            },
            1199: {
                items: 5,
            }
        }
    });

    /*==============================================================
    //home featured image
    ==============================================================*/

    $('.home4-featured').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        sautoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin: 15
            },
            479: {
                items: 2,
                margin: 15
            },
            768: {
                items: 3
            },
            979: {
                items: 4
            },
            1199: {
                items: 5
            }
        }
    });

    /*==============================================================
    //brand slider
    ==============================================================*/

    $('.home4-brand').owlCarousel({
        loop: false,
        rewind: true,
        margin: 0,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            479: {
                items: 3
            },
            768: {
                items: 4
            },
            979: {
                items: 4
            },
            1199: {
                items: 5
            }
        }
    });


    // **************************************** home-5********************************************

    /*==============================================================
    //swiper slider
    ==============================================================*/

    var swiper = new Swiper('.home5-slider', {
        slidesPerColumn: 1,
        slidesPerView: 1,
        dots: false,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
            },
        }
    });

    /*==============================================================
    //category image slider
    ==============================================================*/

    $('.home5-cate-image').owlCarousel({
        loop: true,
        rewind: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        sautoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin: 5
            },
            479: {
                items: 3,
                margin: 5
            },
            768: {
                items: 4,
                margin: 20
            },
            979: {
                items: 5,
                margin: 20
            },
            1199: {
                items: 6,
                margin: 20
            }
        }
    });

    /*==============================================================
    // swiper product-tab slider
    ==============================================================*/

    var swiper = new Swiper('.swiper-container.home5-tab', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 4
            }
        }
    });

    /*==============================================================
    //featured
    ==============================================================*/

    $('.featured5-pro').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        sautoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin: 15
            },
            479: {
                items: 2,
                margin: 15
            },
            768: {
                items: 3
            },
            979: {
                items: 4
            },
            1199: {
                items: 4
            }
        }
    });

    /*==============================================================
    // blog
    ==============================================================*/

    $('.blog5').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        sautoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            479: {
                items: 2,
                margin: 15
            },
            768: {
                items: 2
            },
            979: {
                items: 3
            },
            1199: {
                items: 3
            }
        }
    });


    // **************************************** home-6********************************************

    /*==============================================================
    // home slider
    ==============================================================*/

    $('.home6-slider').owlCarousel({
        loop: false,
        items: 1,
        rewind: true,
        margin: 0,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        fade: true,
        transitionStyle: "fade",
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    /*==============================================================
    //category
    ==============================================================*/

    $('.cate-6').owlCarousel({
        loop: false,
        rewind: true,
        nav: true,
        margin: 0,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },
            479: {
                items: 2
            },
            768: {
                items: 2
            },
            979: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    });

    /*==============================================================
    // swiper product-tab slider
    ==============================================================*/

    var swiper = new Swiper('.swiper-container.home6-tab', {
        slidesPerView: 5,
        slidesPerColumn: 1,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 4
            }
        }
    });

    /*==============================================================
    // testimonials slider
    ==============================================================*/

    $('.testi-6').owlCarousel({
        loop: false,
        rewind: true,
        nav: false,
        margin: 30,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            479: {
                items: 1,
            },
            768: {
                items: 2
            },
            979: {
                items: 2
            },
            1199: {
                items: 3
            }
        }
    });


    /*==============================================================
    //featured product
    ==============================================================*/

    $('.home6-featured').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: true,
        lazyLoad: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        sautoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin: 15
            },
            479: {
                items: 3,
                margin: 15
            },
            768: {
                items: 3
            },
            979: {
                items: 4
            },
            1199: {
                items: 5
            }
        }
    });

    /*==============================================================
    // blog slider
    ==============================================================*/

    $('.blog-6').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            479: {
                items: 2,
                margin: 15
            },
            768: {
                items: 2
            },
            979: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    });

    // **************************************** home-7********************************************

    /*==============================================================
    // home slider
    ==============================================================*/

    $('.home-slider7').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        fade: true,
        transitionStyle: "fade",
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    /*==============================================================
    //category
    ==============================================================*/

    $('.cate-7').owlCarousel({
        loop: true,
        rewind: true,
        nav: false,
        margin: 60,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },
            479: {
                items: 1
            },
            768: {
                items: 2,
                margin: 30
            },
            979: {
                items: 2,
                margin: 30
            },
            1199: {
                items: 3,
                margin: 30
            }
        }
    });

    /*==============================================================
    // swiper product-tab slider
    ==============================================================*/

    var swiper = new Swiper('.home-7-tab', {
        slidesPerColumn: 2,
        slidesPerView: 4,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        },
    });

    /*==============================================================
    //special
    ==============================================================*/

    $('.special-7').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: true,
        lazyLoad: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        sautoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin: 15
            },
            479: {
                items: 2,
                margin: 15
            },
            768: {
                items: 3
            },
            979: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    });

    /*==============================================================
    //Blog
    ==============================================================*/

    $('.blog-7').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        lazyLoad: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 15,
            },
            479: {
                items: 2,
                margin: 15,
            },
            768: {
                items: 2
            },
            979: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    });

    new WOW().init();

    // **************************************** About page********************************************

    /*==============================================================
    //counter
    ==============================================================*/
    // var counter = 0;
    // $(window).scroll(function () {

    //     var oTop = $('.counter').offset().top - window.innerHeight;
    //     if (counter == 0 && $(window).scrollTop() > oTop) {
    //         $('.counter .count-number').each(function () {
    //             var $this = $(this),
    //                 countTo = $this.attr('data-to');
    //             $({
    //                 countNum: $this.text()
    //             }).animate({
    //                     countNum: countTo
    //                 },

    //                 {

    //                     duration: 7000,
    //                     easing: 'swing',
    //                     step: function () {
    //                         $this.text(Math.floor(this.countNum));
    //                     },
    //                     complete: function () {
    //                         $this.text(this.countNum);
    //                         //alert('finished');
    //                     }

    //                 });
    //         });
    //         counter = 1;
    //     }

    // });
    // (function ($) {
    //     $.fn.countTo = function (options) {
    //         options = options || {};

    //         return $(this).each(function () {
    //             // set options for current element
    //             var settings = $.extend({}, $.fn.countTo.defaults, {
    //                 from: $(this).data('from'),
    //                 to: $(this).data('to'),
    //                 speed: $(this).data('speed'),
    //                 refreshInterval: $(this).data('refresh-interval'),
    //                 decimals: $(this).data('decimals')
    //             }, options);

    //             // how many times to update the value, and how much to increment the value on each update
    //             var loops = Math.ceil(settings.speed / settings.refreshInterval),
    //                 increment = (settings.to - settings.from) / loops;

    //             // references & variables that will change with each update
    //             var self = this,
    //                 $self = $(this),
    //                 loopCount = 0,
    //                 value = settings.from,
    //                 data = $self.data('countTo') || {};

    //             $self.data('countTo', data);

    //             // if an existing interval can be found, clear it first
    //             if (data.interval) {
    //                 clearInterval(data.interval);
    //             }
    //             data.interval = setInterval(updateTimer, settings.refreshInterval);

    //             // initialize the element with the starting value
    //             render(value);

    //             function updateTimer() {
    //                 value += increment;
    //                 loopCount++;

    //                 render(value);

    //                 if (typeof (settings.onUpdate) == 'function') {
    //                     settings.onUpdate.call(self, value);
    //                 }

    //                 if (loopCount >= loops) {
    //                     // remove the interval
    //                     $self.removeData('countTo');
    //                     clearInterval(data.interval);
    //                     value = settings.to;

    //                     if (typeof (settings.onComplete) == 'function') {
    //                         settings.onComplete.call(self, value);
    //                     }
    //                 }
    //             }

    //             function render(value) {
    //                 var formattedValue = settings.formatter.call(self, value, settings);
    //                 $self.html(formattedValue);
    //             }
    //         });
    //     };

    //     $.fn.countTo.defaults = {
    //         from: 0, // the number the element should start at
    //         to: 0, // the number the element should end at
    //         speed: 1000, // how long it should take to count between the target numbers
    //         refreshInterval: 100, // how often the element should be updated
    //         decimals: 0, // the number of decimal places to show
    //         formatter: formatter, // handler for formatting the value before rendering
    //         onUpdate: null, // callback method for every time the element is updated
    //         onComplete: null // callback method for when the element finishes updating
    //     };

    //     function formatter(value, settings) {
    //         return value.toFixed(settings.decimals);
    //     }

    // }(jQuery));

    // jQuery(function ($) {
    //     // custom formatting example
    //     $('.count-number').data('countToOptions', {
    //         formatter: function (value, options) {
    //             return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    //         }
    //     });

    //     // start all the timers
    //     $('.timer').each(count);

    //     function count(options) {
    //         var $this = $(this);
    //         options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    //         $this.countTo(options);
    //     }
    // });


    // **************************************** cart page********************************************

    /* ==========================================
      Minus and Plus Btn Height
      ========================================== */

    $('.minus-btn').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val(), 10);

        if (value > 1) {
            value = value - 1;
        } else {
            value = 1;
        }
        $input.val(value);
    });

    $('.plus-btn').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val(), 10);

        if (value < 100) {
            value = value + 1;
        } else {
            value = 100;
        }
        $input.val(value);
    });

    // **************************************** product page ********************************************


    /* ==========================================
    //additional
    ========================================== */

    $('.pro-page-slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });

    $('.pro-pag-5-slider').owlCarousel({
        loop: false,
        margin: 15,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });


    $('.nav-item .nav-link').on("click", function () {

        $('.nav-item .nav-link').removeClass('active');
        $(this).addClass('active');

    });

    /* ==========================================
     //related product
    ========================================== */


    $('.releted-products').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        sautoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin: 15
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            979: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    /* ==========================================
   // index 7
  ========================================== */

    $('.releted-products-7').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        autoplay: true,
        sautoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin: 15
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            979: {
                items: 3
            }
        }
    });

    // **************************************** coming soon ********************************************


    if (document.getElementById('day')) {
        var deadline = new Date("july 30, 2050 15:37:25").getTime();
        var x = setInterval(function () {
            var currentTime = new Date().getTime();
            var t = deadline - currentTime;
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);

            document.getElementById("day").innerHTML = days;
            document.getElementById("hour").innerHTML = hours;
            document.getElementById("minute").innerHTML = minutes;
            document.getElementById("second").innerHTML = seconds;
            if (t < 0) {
                clearInterval(x);
                document.getElementById("time-up").innerHTML = "TIME UP";
                document.getElementById("day").innerHTML = '0';
                document.getElementById("hour").innerHTML = '0';
                document.getElementById("minute").innerHTML = '0';
                document.getElementById("second").innerHTML = '0';
            }


        }, 1000);

    }

    if (document.getElementById('days')) {
        //alert('sf');
        var deadline = new Date("july 30, 2022 15:37:25").getTime();
        var x = setInterval(function () {
            var currentTime = new Date().getTime();
            var t = deadline - currentTime;
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
            if (t < 0) {
                clearInterval(x);
                document.getElementById("time-up").innerHTML = "TIME UP";
                document.getElementById("days").innerHTML = '0';
                document.getElementById("hours").innerHTML = '0';
                document.getElementById("minutes").innerHTML = '0';
                document.getElementById("seconds").innerHTML = '0';
            }
        }, 1000);
    }

    // **************************************** blog page ********************************************

    $('.single-image-carousel').owlCarousel({
        loop: false,
        rewind: true,
        nav: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            479: {
                items: 1,
                margin: 15
            },
            768: {
                items: 1
            },
            979: {
                items: 1
            },
            1199: {
                items: 1
            }
        }
    });

    /* ==========================================
       //blog
      ========================================== */

    $('.details-blog-carousel').owlCarousel({
        loop: false,
        rewind: true,
        margin: 30,
        lazyLoad: true,
        nav: false,
        dots: false,
        // autoplay: true,
        // autoplayTimeout: 2000,
        // autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            479: {
                items: 2,
                margin: 20
            },
            768: {
                items: 2
            },
            979: {
                items: 3
            },
            1199: {
                items: 3
            }
        }
    });

});
// gallery slider
$('#gallerySlider').owlCarousel({
    dots: false,
    infinite: true,
    speed: 300,
    margin: 10,

    autoplay: true,
    autoplaySpeed: 4000,
    responsive: {
        0: {
            items: 1,
            margin: 15
        },
        479: {
            items: 2,
            margin: 20
        },
        768: {
            items: 2
        },
        979: {
            items: 3
        },
        1199: {
            items: 4
        }
    }
});

function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}
/*---background image---*/
function dataBackgroundImage() {
    $('[data-bgimg]').each(function () {
        var bgImgUrl = $(this).data('bgimg');
        $(this).css({
            'background-image': 'url(' + bgImgUrl + ')', // + meaning concat
        });
    });
}

function dataBackgroundImageLayer() {
    $('[data-bgimglayer]').each(function () {
        var bgImgUrlLayer = $(this).data('bgimglayer');
        $(this).css({
            'background-image': 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(' + bgImgUrlLayer + ')', // + meaning concat
        });
    });
}

$(window).on('load', function () {
    dataBackgroundImage();
    dataBackgroundImageLayer();
});


// function RedirectaddAddress(){
//     $("#prevAddress").addClass("d-none");
//     $("#addAddress").removeClass("d-none");
//     $("#prevAddressbtn").prop("checked",false);
// }
// function RedirectprevAddress(){
//     $("#addAddress").addClass("d-none");
//     $("#addAddressbtn").prop("checked",false);
// }
// function RedirectDelivery(){
//     $(".pickup_section").addClass("d-none");
//     $(".delivery_section").removeClass("d-none");
//     $(".pickup").prop("checked",false);
// }
// function RedirectUp(){
//     $(".delivery_section").addClass("d-none");
//     $(".pickup_section").removeClass("d-none");
//     $(".delivery").prop("checked",false);
// }
// function RedirectprevAddress(){
//     $(".pickup_section").addClass("d-none");
//     $(".pickup").prop("checked",false);
// }
// $(document).ready(function(){
//     $(".pickup_section").addClass("d-none");
//     $(".delivery_section").addClass("d-none");
// });



function RedirectaddAddress() {
    $("#prevAddress").addClass("d-none");
    $("#addAddress").removeClass("d-none");
    $("#prevAddressbtn").prop("checked", false);
}

function RedirectprevAddress() {
    $("#addAddress").addClass("d-none");
    $("#addAddressbtn").prop("checked", false);
}
// registerForm();
// function registerForm(){
//     let registerForm = document.getElementById('registerForm');
//     let fullName = document.getElementById('full_name');
//     let phone = document.getElementById('phone');
//     let address = document.getElementById('address');
//     let locationId = document.getElementById('location_id');
//     let email = document.getElementById('email');
//     let password = document.getElementById('password');
//     let confirmPassword = document.getElementById('password_confirmation');



//     let formErrors = [];

//     registerForm.addEventListener('submit', e => {
//         checkInputs();
//         if (formErrors.length) {
//             e.preventDefault();
//         }
//     });

//     function checkInputs() {
//         formErrors = [];
//         // trim to remove the whitespaces

//         let fullNameValue = fullName.value.trim();
//         let phoneValue = phone.value.trim();
//         let addressValue = address.value.trim();
//         let locationIdValue = locationId.value.trim();
//         let emailValue = email.value.trim();
//         let passwordValue = password.value.trim();
//         let confirmPasswordValue = confirmPassword.value.trim();



//         if (fullNameValue === '') {
//             formErrors.push('Full Name is required');
//             setErrorFor(fullName, 'Full Name is required');
//         } else {
//             setSuccessFor(fullName);
//         }
//         if (phoneValue === '') {
//             formErrors.push('Phone is required');
//             setErrorFor(phone, 'Phone is required');
//         } else {
//             setSuccessFor(phone);
//         }
//         if (locationIdValue === '') {
//             formErrors.push('Location is required');
//             setErrorFor(locationId, 'Location is required');
//         } else {
//             setSuccessFor(locationId);
//         }
//         if (addressValue === '') {
//             formErrors.push('Address is required');
//             setErrorFor(address, 'Address is required');
//         } else {
//             setSuccessFor(address);
//         }



//         if (emailValue === '') {
//             formErrors.push('Email is required');
//             setErrorFor(email, 'Email is required');
//         } else if (!isEmail(emailValue)) {
//             formErrors.push('Email is invalid');
//             setErrorFor(email, 'Email is invalid');
//         } else {
//             setSuccessFor(email);
//         }
//         if (passwordValue === '') {
//             formErrors.push('Password is required');
//             setErrorFor(password, 'Password is required');
//         } else if (passwordValue.length < 8) {
//             formErrors.push('Password cannot be less than 8');
//             setErrorFor(password, 'Password cannot be less than 8');
//         } else {
//             setSuccessFor(password);
//         }
//         if (confirmPasswordValue === '') {
//             formErrors.push('Password confirmation is required');
//             setErrorFor(confirmPassword, 'Password confirmation is required');
//         } else if (passwordValue !== confirmPasswordValue) {
//             formErrors.push("Password don't match ");
//             setErrorFor(confirmPassword, "Password don't match");
//         } else {
//             setSuccessFor(confirmPassword);
//         }
//     }

//     function setErrorFor(input, message) {
//         let formControl = input.parentElement;
//         let small = formControl.querySelector('small');
//         formControl.className = 'form-group form-control-validation error';
//         small.innerText = message;
//     }

//     function setSuccessFor(input) {
//         let formControl = input.parentElement;
//         formControl.className = 'form-group  form-control-validation success';
//     }

//     function isEmail(email) {
//         return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
//     }
// }
// loginForm();
// function loginForm() {
//     let loginForm = document.getElementById('loginForm');
//     let email = document.getElementById('email');
//     let password = document.getElementById('password');

//     var formErrors = [];

//     loginForm.addEventListener('submit', e => {
//         checkInputs();
//         if(formErrors.length) {
//             e.preventDefault();
//         }
//     });

//     function checkInputs()
//     {
//         formErrors = [];
//         // trim to remove the whitespaces
//         let emailValue = email.value.trim();
//         let passwordValue = password.value.trim();





//         if(emailValue === '') {
//             formErrors.push('Email is required');
//             setErrorFor(email, 'Email is required');
//         } else if (!isEmail(emailValue)) {
//             formErrors.push('Email is invalid');
//             setErrorFor(email, 'Email is invalid');
//         } else {
//             setSuccessFor(email);
//         }
//         if(passwordValue === '') {
//             formErrors.push('Password is required');
//             setErrorFor(password, 'Password is required');
//         }else {
//             setSuccessFor(password);
//         }



//     }

//     function setErrorFor(input, message) {
//         let formControl = input.parentElement;
//         let small = formControl.querySelector('small');
//         formControl.className = 'form-group form-control-validation error col-12';
//         small.innerText = message;
//     }

//     function setSuccessFor(input) {
//         let formControl = input.parentElement;
//         formControl.className = 'form-group  form-control-validation success col-12';
//     }

//     function isEmail(email) {
//         return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
//     }
// }
$(document).ready(function(){
    $("input[type='number']").attr("min","1")
})
