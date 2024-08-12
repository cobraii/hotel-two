// Основной слайдер
var mainSwiper = new Swiper('.swiper-container.swiper-hotel-number', {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 600,
    navigation: {
        nextEl: '.swiper-button-next-hotel-number',
        prevEl: '.swiper-button-prev-hotel-number',
    },
    pagination: {
        el: '.swiper-hotel-number-pagination',
        clickable: true,
    },
    on: {
        slideChange: function () {
            // Сброс вложенного слайдера на первый слайд
            document.querySelectorAll('.swiper-container.swiper-hotel-number-image').forEach(function(swiperEl) {
                var nestedSwiper = swiperEl.swiper;  // получаем инстанс вложенного слайдера
                if (nestedSwiper) {
                    nestedSwiper.slideTo(0);  // сбрасываем на первый слайд
                }
            });
        }
    }
});

// Вложенный слайдер
new Swiper('.swiper-container.swiper-hotel-number-image', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
    speed: 400,
    autoplay: {
        delay: 4000,
    },
    nested: true,
    pagination: {
        el: '.swiper-image-pagination',
        clickable: true,
    },
    on: {
        slideChange: function () {
            var currentSlide = this.realIndex + 1;
            var totalSlides = this.slides.length;
            document.querySelectorAll('.progress-counter').forEach(item => {
                item.innerText = currentSlide + '/' + totalSlides;
            })
        }
    }
});



new Swiper('.swiper-container.swiper-gallery', {
    slidesPerView: 1,
    speed: 500,
    spaceBetween: 50,
    loop: true,
    navigation: {
        nextEl: '.swiper-gallery-next',
        prevEl: '.swiper-gallery-prev',
    },
    pagination: {
        el: '.swiper-pagination-gallery',
        clickable: true,
    },
});


document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 767) {
        new Swiper('.swiper-container.swiper-advantages-content', {
            slidesPerView: 'auto',
            spaceBetween: 50,
            pagination: {
                el: '.swiper-pagination-advantages',
                clickable: true,
            },
        });
    }
});
