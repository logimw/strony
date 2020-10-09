gsap.fromTo(".heading__top", { x: "-=500", opacity: 0 }, {x: 0, opacity: 1, duration: 1, ease: "ease"});
gsap.fromTo(".heading__bottom", { x: "+=500", opacity: 0 }, {x: 0, opacity: 1, duration: 1, ease: "ease"});

const featuresList = document.querySelectorAll(".features__list li");

const stepsContentTitle = document.querySelector(".steps__content h2");
const stepsContentContainer = document.querySelectorAll(".steps__video");

const menu = document.querySelector(".toggle");
const menuList = document.querySelector("nav ul");
const menuListItems = document.querySelectorAll(".navigation__link");

menu.addEventListener("click", () => {
  menuList.classList.toggle("active");
});

menuListItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (menuList.classList.contains("active")) {
      menuList.classList.remove("active");
    }
  });
});

// Set current year into footer
const yearSelector = document.querySelector("#year");
const date = new Date();
const currentYear = date.getFullYear();
yearSelector.innerHTML = currentYear;

const bannerTL = gsap.timeline();

const stepsTl = gsap.timeline();

stepsTl
  .from(stepsContentTitle, {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power3.out",
    stagger: {
      amount: 0.2,
    },
  })
  .from(stepsContentContainer, {
    delay: -0.4,
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power3.out",
    stagger: {
      delay: -0.2,
      stagger: {
        delay: 0.4,
        duration: 1.2,
      },
    },
  });

const controllerSteps = new ScrollMagic.Controller();
const sceneSteps = new ScrollMagic.Scene({
  triggerElement: "#stepsTrigger",
  triggerHook: 0,
  reverse: false,
})
  .setTween(stepsTl)
  .addTo(controllerSteps);

// All animations will take exactly 500ms
var scroll = new SmoothScroll("a[data-scroll]", {
  speed: 500,
});
