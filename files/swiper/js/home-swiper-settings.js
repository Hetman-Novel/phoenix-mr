new Swiper('.inspired-style-comfort__slider', {
    slidesPerGroup: 3,
    slidesPerView: 3,
    autoHeight: true,
    watchOverflow: true,
    spaceBetween: 20,
    speed: 800,
    effect: 'slide',
    navigation: {
        prevEl: '.js-inspired-style-comfort-btn-prev',
        nextEl: '.js-inspired-style-comfort-btn-next',
    },
    breakpoints: {
        0: {
            slidesPerGroup: 1,
            spaceBetween: 20.7,
            slidesPerView: 1.22,
            autoHeight: true,
        },
        576: {
            slidesPerGroup: 1,
            spaceBetween: 20.7,
            slidesPerView: 1.2,
            autoHeight: false,
        },
        800: {
            slidesPerGroup: 2,
            spaceBetween: 20,
            slidesPerView: 2.2,
            autoHeight: false,
        },
        992: {
            slidesPerGroup: 2,
            spaceBetween: 20,
            slidesPerView: 2,
            autoHeight: false,
        },
        1100: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 10,
            autoHeight: false,
        }
    }
})

new Swiper('.weekday-routine__gallery-slider', {
    slidesPerGroup: 3,
    slidesPerView: 3,
    autoHeight: true,
    watchOverflow: true,
    spaceBetween: 10,
    speed: 800,
    effect: 'slide',
    navigation: {
        prevEl: '.js-weekday-routine-btn-prev',
        nextEl: '.js-weekday-routine-btn-next',
    },
    breakpoints: {
        0: {
            slidesPerGroup: 1,
            spaceBetween: 20.7,
            slidesPerView: 1.22,
            autoHeight: true,
        },
        576: {
            slidesPerGroup: 1,
            spaceBetween: 20.7,
            slidesPerView: 1.2,
            autoHeight: false,
        },
        800: {
            slidesPerGroup: 2,
            spaceBetween: 20.7,
            slidesPerView: 2.2,
            autoHeight: false,
        },
        992: {
            slidesPerGroup: 2,
            spaceBetween: 20.7,
            slidesPerView: 2,
            autoHeight: false,
        },
        1100: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 10,
            autoHeight: false,
        }
    }
})

new Swiper('.permissible-documents__slider', {
    slidesPerGroup: 3,
    slidesPerView: 3,
    autoHeight: true,
    watchOverflow: true,
    spaceBetween: 20,
    speed: 800,
    effect: 'slide',
    navigation: {
        prevEl: '.js-permissible-documents-btn-prev',
        nextEl: '.js-permissible-documents-btn-next',
    },
    breakpoints: {
        0: {
            slidesPerGroup: 1,
            spaceBetween: 20,
            slidesPerView: 1.22,
            autoHeight: true,
        },
        576: {
            slidesPerGroup: 1,
            spaceBetween: 20,
            slidesPerView: 1.5,
            autoHeight: false,
        },
        800: {
            slidesPerGroup: 1,
            spaceBetween: 20,
            slidesPerView: 2.2,
            autoHeight: false,
        },
        1100: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 20,
            autoHeight: false,
        }
    }
})