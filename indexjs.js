
var typed2 = new Typed('.hero_text', {
    strings: ['Data Scientist--', 'Esports Event Manager--', 'UI/UX Designer--'],
    typeSpeed: 100,
    backSpeed: 100,
    cursorChar: '',
    loop: true
});
var swiper = new Swiper('.serviceSwiper', {
    slidesPerView:3,
    spaceBetween:30,
    loop:true,
    autoplay:true,
    breakpoints:{
    1200:{
        slidesPerView:3,
        spaceBetween:30,
    },
    900:{
        slidesPerView:2,
        spaceBetween:30,
    },
    500:{
        slidesPerView:3,
        spaceBetween:30,
    },
},
});
var swiper = new Swiper('.testimonialSwiper', {
    slidesPerView:2,
    spaceBetween:10,
    loop:true,
    autoplay:true,
    breakpoints:{
    1200:{
        slidesPerView:2,
        spaceBetween:10,
    },
    900:{
        slidesPerView:2,
        spaceBetween:10,
    },
    500:{
        slidesPerView:1,
        spaceBetween:10,
    },
},
});

