import Swiper, { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
Swiper.use([Autoplay, EffectFade, Navigation]);

var swiper = slider();
function slider() {
    return new Swiper(".swiper-container", {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        cssMode: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

