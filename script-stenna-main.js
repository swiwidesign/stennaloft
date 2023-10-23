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

 
  // GENERAL CODE
  // Arrow
gsap.to(".arrow-down", {
  scrollTrigger: {
    scrub: true,
    markers: false,
    trigger: ".is-footer",
    start: "center bottom",
    end: "bottom bottom",
    onStart: function () {
      const arrow = document.querySelector(".arrow-down");
      arrow.style.cursor = "pointer";
      arrow.addEventListener("click", function () {
        // Scroll to the top of the page when the arrow is clicked
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        // Set the cursor back to "auto" after the arrow is clicked
        arrow.style.cursor = "auto";
      });
    },
  },
  rotate: 180,
  duration: 1,
});
 
   

document.querySelectorAll('[colourchange]').forEach(function (triggerElement) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      start: 'top bottom',
      end: 'bottom bottom',
    },
  });

  tl.to('body', {
    backgroundColor: gsap.getProperty('html', '--color--prime'),
  });
});

document.querySelectorAll('[colourchangeback]').forEach(function (triggerElement) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      start: 'top bottom',
      end: 'top center',
    },
  });

  tl.to('body', {
    backgroundColor: gsap.getProperty('html', '--color--light'),
  });
});
  

  
});