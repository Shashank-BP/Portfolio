/*=========================== MENU SHOW Y HIDDEN =========================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*====MENU SHOW ===== */
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*==== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*======================== REMOVE MENU MOBLIE ===========================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*======================= SKILLS MODAL ===========================*/
const modalViews = document.querySelectorAll('.skills__modal'),
      modalBtns = document.querySelectorAll('.skills__button'),
      modalCloses = document.querySelectorAll('.skills__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})


/*======================== QUALIFICATION TABS ===========================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>[
            tab.classList.remove('qualification__active')
        ])
        tab.classList.add('qualification__active')
    })
})


/*======================== PROJECTS SWIPER ===========================*/
let swiper = new Swiper(".projects__container", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination"
    },
});

/*======================== SCROLL SECTION ACTIVE LINK ===========================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*======================== CHANGE BACKGROUND HEADER ===========================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*======================== SHOW SCROLL UP ===========================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*======================== SCROLL REVEAL ===========================*/
if (window.matchMedia("(min-width: 768px)").matches) {
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 1400,
        delay: 140 
       });
    
    ScrollReveal().reveal('.projects__container, .contact__container, .skills__icon, .skills__title, .skills__button', { origin: 'top' });
    ScrollReveal().reveal('.home__data, .section__title, .section__subtitle, .home__img, .header', { origin: 'bottom' });
    ScrollReveal().reveal('.home__social, .home__title, .about__img', { origin: 'left' });
    ScrollReveal().reveal('.home__subtitle, .about__data, .contact__information', { origin: 'right' });
    ScrollReveal().reveal('#course, #diploma', { origin: 'left' });
    ScrollReveal().reveal('#degree, #school', { origin: 'right' });
}



  