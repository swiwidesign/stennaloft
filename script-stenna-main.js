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

      $("[data-lenis-resize]").on("click", function () {
      lenis.resize();
    });
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

 
  // GENERAL CODE
  // Arrow
gsap.to(".arrow-down", {
  scrollTrigger: {
    scrub: 1,
    markers: false,
    trigger: ".is-footer",
    start: "center bottom", // when the top of the trigger hits the top of the viewport
    end: "clamp(bottom bottom)",
    },
  rotate: 180,
  duration: 1,
});

 
   
  // colour change
document.querySelectorAll('[colourchange]').forEach(function (triggerElement) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      start: 'clamp(top center)',
      end: 'clamp(bottom bottom)',
    },
  });

  tl.to('body', {
    backgroundColor: gsap.getProperty('html', '--color--prime'),
  });
});

document.querySelectorAll('[colourchange]').forEach(function (triggerElement) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      start: 'clamp(bottom 75%)',
      end: 'clamp(bottom 25%)',
    },
  });

  tl.to('body', {
    backgroundColor: gsap.getProperty('html', '--color--light'),
  });
});
  

     // about links hover
$("[imagechange]").each(function (index) {
  let sectionHeading = $(this).find(".about_heading");
  let sectionSpans = $(this).find(".about_span");
  let sectionItems = $(this).find(".about_item");

  sectionSpans.each(function (index) {
    let relatedImages = sectionItems.eq(index).find(".about_image");
    let otherSpans = sectionSpans.not($(this));

    gsap.matchMedia().add("(min-width: 992px)", () => {
      let tl = gsap.timeline({ paused: true, defaults: { duration: 0.2 } });
      tl.set($(this), { zIndex: 3 });
      tl.set(otherSpans, { zIndex: 1 }, "<");
      tl.to(relatedImages, { opacity: 1, scale: 1, ease: "power4.out" });
      


      $(this).on("mouseenter", function () {
        tl.timeScale(1);
        tl.play();
      });
      $(this).on("mouseleave", function () {
        tl.timeScale(2);
        tl.reverse();
      });
    });
  });
});    
    
    
  
});