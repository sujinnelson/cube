const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('sticky-header');
    } else {
        header.classList.remove('sticky-header');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".header__hamburger");
    const offcanvas = document.getElementById("mobileMenu");
    const overlay = document.querySelector(".offcanvas-overlay");
    const closeBtn = document.querySelector(".offcanvas__close");

    // Clone menu into offcanvas
    const desktopMenu = document.querySelector(".header__menu");
    const mobileMenu = document.querySelector(".offcanvas__menu");
    mobileMenu.innerHTML = desktopMenu.innerHTML;

    function openMenu() {
        offcanvas.classList.add("active");
        overlay.classList.add("active");
    }

    function closeMenu() {
        offcanvas.classList.remove("active");
        overlay.classList.remove("active");
    }

    hamburger.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    // Submenu toggle
    mobileMenu.addEventListener("click", function (e) {
        const parent = e.target.closest(".header__menu-item--has-submenu");
        if (!parent) return;

        e.preventDefault();
        const submenu = parent.querySelector(".header__submenu");
        submenu.style.display =
            submenu.style.display === "block" ? "none" : "block";
    });
});

$('input[name="subscription"]').on('change', function () {
    $('.product-showcase__subscription-item').removeClass('product-showcase__subscription-item--active');
    $(this).closest('.product-showcase__subscription-item').toggleClass('product-showcase__subscription-item--active');
});
const items = document.querySelectorAll('.accordion__item');

items.forEach(item => {
    const header = item.querySelector('.accordion__header');

    header.addEventListener('click', () => {
        const isActive = item.classList.contains('accordion__item--active');

        items.forEach(i => {
            i.classList.remove('accordion__item--active');
            i.querySelector('.accordion__header');
            i.querySelector('.accordion__icon')
                .classList.replace('accordion__icon--minus', 'accordion__icon--plus');
        });

        if (!isActive) {
            item.classList.add('accordion__item--active');
            item.querySelector('.accordion__icon')
                .classList.replace('accordion__icon--plus', 'accordion__icon--minus');
        }
    });
});

$(document).ready(function () {

    // Main product slider
    const $mainSlider = $('#product-slider-for');

    $mainSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: true, prevArrow: '<button class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
        adaptiveHeight: true
    });

    // Thumbnail click → change main slider
    $('.product-showcase__thumb').on('click', function () {
        const slideIndex = $(this).data('slide');

        $mainSlider.slick('slickGoTo', slideIndex);

        // Active state
        $('.product-showcase__thumb').removeClass('is-active');
        $(this).addClass('is-active');
    });

    // Sync thumbnail when slider changes (swipe / programmatic)
    $mainSlider.on('afterChange', function (event, slick, currentSlide) {
        $('.product-showcase__thumb')
            .removeClass('is-active')
            .eq(currentSlide)
            .addClass('is-active');
    });

    // Set first thumb active on load
    $('.product-showcase__thumb').eq(0).addClass('is-active');

});
