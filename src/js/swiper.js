var swiper = new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
        autoplay: {
            delay: 5000,
        },

    },

});


var swipers = new Swiper(".mySwipers", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 2,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});