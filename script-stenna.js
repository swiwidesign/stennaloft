window.addEventListener("DOMContentLoaded", (event) => {
  // LENIS
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
  // parallax
  
  //Button

  
 


  // Button Timeline

  let tl = gsap.timeline();
  tl.to("[stagger] .char", {
    translateY: "-100%",
    stagger: { each: 0.02 },
    ease: "power3.out",
    duration: 0.4
  });

});
      


  //Intro all pages
  let tlintro = gsap
    .timeline({
      delay: 0.4,
      ease: Power4.easeOut
    })
    .from(".container.is-hero", {
      scale: 0.75,
      duration: 1
    })
    .from(
      "[nav]",
      {
        yPercent: -100,
        duration: 0.6
      },
      "<"
    )
    .from(
      "[hero_logo-right]",
      {
        yPercent: -100,
        duration: 0.6
      },
      "-=0.6"
    )
    .from(
      "[hero_logo-left]",
      {
        yPercent: 100,
        duration: 0.6
      },
      "<"
    );

  //LANDING PAGE
  let heroscroll = gsap
    .timeline({
      scrollTrigger: {
        trigger: "[hero_section]",
        start: "clamp(top 20%)",
        end: "clamp(bottom bottom",
        scrub: true,
        ease: "none"
        //pin: "[hero_section]"
      }
    })
    .to(".hero_logo-right", {
      xPercent: 200,
      duration: 0.8
    })
    .to(
      ".hero_logo-left",
      {
        xPercent: -200,
        duration: 0.8
      },
      "<"
    );
});