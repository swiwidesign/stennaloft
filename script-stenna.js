window.addEventListener("DOMContentLoaded", (event) => {
  // LENIS Code
  "use strict";

  if (Webflow.env("editor") === undefined) {
    const lenis = new Lenis({
      duration: 1.2,
      //easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
      wheelMultiplier: 0.7,
      infinite: false,
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    $("[data-lenis-start]").on("click", function () {
      lenis.start();
    });
    $("[data-lenis-stop]").on("click", function () {
      lenis.stop();
    });
    $("[data-lenis-toggle]").on("click", function () {
      $(this).toggleClass("stop-scroll");
      if ($(this).hasClass("stop-scroll")) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });

    function connectToScrollTrigger() {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      })
        gsap.ticker.lagSmoothing(0);
    }
    // Uncomment this if using GSAP ScrollTrigger
    connectToScrollTrigger();
  }

  gsap.registerPlugin(ScrollTrigger);

  //MATCHMEDIA
  gsap.matchMediaRefresh();

  // TEXT SPLIT ANIMATION
  let typeSplit;

  // Split the text up
  function runSplit() {
    typeSplit = new SplitType("[text-split]", {
      types: "words, chars, lines",
      tagName: "span"
    });
  }
  runSplit();

  // Update on window resize
  let windowWidth = window.innerWidth;

  function checkWidth() {
    if (windowWidth !== window.innerWidth) {
      windowWidth = window.innerWidth;
      typeSplit.revert();
      runSplit();
    }
  }

  window.addEventListener("resize", checkWidth);

  // GENERAL CODE
  // Arrow
    gsap.to(".hero_arrow", {
        scrollTrigger: {
            scrub: true,
            markers: false,
            trigger: ".background-color-primary",
            start: "center bottom", // when the top of the trigger hits the top of the viewport
            end: "bottom bottom"
        },
        rotate: 180,
        duration: 1
    });

  
});