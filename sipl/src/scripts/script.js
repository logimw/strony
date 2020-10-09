const header = document.querySelector(".header");
const sectionBar = document.querySelector(".bar");
const sectionSimple = document.querySelector(".simple");
const sectionSbyS = document.querySelector(".step-by-step");
const sectionMustHave = document.querySelector(".must-have");

document.addEventListener("scroll", () => {
  const headerHeight = parseInt(getComputedStyle(header).height);
  const sectionBarHeight = parseInt(getComputedStyle(sectionBar).height);
  const sectionSimpleHeight = parseInt(getComputedStyle(sectionSimple).height);
  const sectionSbySHeight = parseInt(getComputedStyle(sectionSbyS).height);
  const sectionMustHaveHeight = parseInt(
    getComputedStyle(sectionMustHave).height
  );

  if (window.pageYOffset > headerHeight - 200) {
    document.getElementById("text0").classList.remove("motion-right");
  }
  if (
    window.pageYOffset >
    headerHeight + sectionBarHeight + sectionSimpleHeight - 500
  ) {
    document.getElementById("text1").classList.remove("motion-left");
  }
  if (
    window.pageYOffset >
    headerHeight + sectionBarHeight + sectionSimpleHeight
  ) {
    document.getElementById("text2").classList.remove("motion-right");
  }
  /* if (
    window.pageYOffset >
    headerHeight +
      sectionBarHeight +
      sectionSimpleHeight +
      sectionSbySHeight +
      500
  ) {
     document.getElementById("text3").classList.remove("motion-right");
  }
  if (
    window.pageYOffset >
    headerHeight +
      sectionBarHeight +
      sectionSimpleHeight +
      sectionSbySHeight +
      sectionMustHaveHeight / 2
  ) {
    document.getElementById("text4").classList.remove("motion-left");
  }*/
});

(function() {
  var d = document,
    accordionToggles = d.querySelectorAll(".js-accordionTrigger"),
    setAria,
    setAccordionAria,
    switchAccordion,
    touchSupported = "ontouchstart" in window,
    pointerSupported = "pointerdown" in window;

  skipClickDelay = function(e) {
    e.preventDefault();
    e.target.click();
  };

  setAriaAttr = function(el, ariaType, newProperty) {
    el.setAttribute(ariaType, newProperty);
  };
  setAccordionAria = function(el1, el2, expanded) {
    switch (expanded) {
      case "true":
        setAriaAttr(el1, "aria-expanded", "true");
        setAriaAttr(el2, "aria-hidden", "false");
        break;
      case "false":
        setAriaAttr(el1, "aria-expanded", "false");
        setAriaAttr(el2, "aria-hidden", "true");
        break;
      default:
        break;
    }
  };
  //function
  switchAccordion = function(e) {
    // console.log("triggered");
    e.preventDefault();
    var thisAnswer = e.target.parentNode.nextElementSibling;
    var thisQuestion = e.target;
    if (thisAnswer.classList.contains("is-collapsed")) {
      setAccordionAria(thisQuestion, thisAnswer, "true");
    } else {
      setAccordionAria(thisQuestion, thisAnswer, "false");
    }
    thisQuestion.classList.toggle("is-collapsed");
    thisQuestion.classList.toggle("is-expanded");
    thisAnswer.classList.toggle("is-collapsed");
    thisAnswer.classList.toggle("is-expanded");

    thisAnswer.classList.toggle("animateIn");
  };
  for (var i = 0, len = accordionToggles.length; i < len; i++) {
    if (touchSupported) {
      accordionToggles[i].addEventListener("touchstart", skipClickDelay, false);
    }
    if (pointerSupported) {
      accordionToggles[i].addEventListener(
        "pointerdown",
        skipClickDelay,
        false
      );
    }
    accordionToggles[i].addEventListener("click", switchAccordion, false);
  }
})();

const textDiv = document.querySelector(".bar__copy");
const icons = document.querySelectorAll(".simple__icons li");

gsap.registerPlugin(ScrollTrigger);

gsap.to(textDiv, {
  scrollTrigger: {
    trigger: textDiv,
    start: "top center",
    markers: false,
    toggleActions: "play none none none"
  },
  x: -1000,
  duration: 1
});

const menuSwitcher = document.querySelector(".toggle");
const menu = document.querySelector(".mobile-menu");
let links = document.querySelectorAll(".menu__link");


menuSwitcher.addEventListener("click", ()=> {
  menu.classList.toggle("active-menu");
})

links = Array.from(links)

links.forEach(link => {
  link.addEventListener("click", () => {
    if(menu.classList.contains("active-menu")){
      menu.classList.remove("active-menu");
    }
  })
});




