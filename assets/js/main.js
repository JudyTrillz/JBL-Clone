/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navOpen = document.getElementById("nav-open");

navOpen.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

/*=============== REMOVE MENU MOBILE ===============*/
const links = document.querySelectorAll(".nav__link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

/*=============== REMOVE MENU MOBILE WHEN WE CLICK ON BODY ===============*/
document.addEventListener("click", (e) => {
  if (e.target !== navClose && e.target !== navMenu && e.target !== navOpen) {
    navMenu.classList.remove("show-menu");
  }
});

/*=============== ADD BLUR HEADER ===============*/
const header = document.getElementById("header");
const headerAction = () => {
  window.scrollY > 50
    ? header.classList.add("bg__header")
    : header.classList.remove("bg__header");
};
window.addEventListener("scroll", headerAction);

/*=============== SWIPER FAVORITES ===============*/
let swiperFavorite = new Swiper(".favorite__swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  grabCursor: "true",

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollBtn = document.getElementById("scroll-up");
const scrollAction = () => {
  window.scrollY > 300
    ? scrollBtn.classList.add("show-scroll")
    : scrollBtn.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollAction);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__item a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.home__social, .favorite__container, .sponsor__container, .footer`);
sr.reveal(`.home__title span:nth-child(1)`, { origin: "left", opacity: 0 });
sr.reveal(`.home__title span:nth-child(3)`, { origin: "right", opacity: 0 });
sr.reveal(`.home__tooltip, .home__button, .model__button`, {
  origin: "bottom",
});
sr.reveal(`.about__data`, { origin: "left" });
sr.reveal(`.about__img, .model__tooltip`, { origin: "right" });
