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

 
  // GENERAL CODE
  // Arrow
    gsap.to(".arrow-down", {
        scrollTrigger: {
            scrub: true,
            markers: false,
            trigger: ".is-footer",
            start: "center bottom", // when the top of the trigger hits the top of the viewport
            end: "bottom bottom"
        },
        rotate: 180,
        duration: 1
    });
    
    

    
$("[colourchange]").each(function (index, trigger) {
  gsap.fromTo(".page_wrap", {
    scrollTrigger: {
      scrub: true,
      markers: false,
      trigger: trigger, // Use the current trigger element
      start: "top bottom",
      end: "bottom bottom"
    },
    backgroundColor: "#ffff", // Starting color (change to the desired initial color)
    duration: 1
  }, {
    backgroundColor: "#ccd1b2", // Ending color
    duration: 1
  });
    
    
    
    
});

// Dark to Light Color Change
$("[colourchangeback]").each(function (index, trigger) {
  gsap.fromTo(".page_wrap", {
    scrollTrigger: {
      scrub: true,
      markers: false,
      trigger: trigger, // Use the current trigger element
      start: "top center",
      end: "top top"
    },
    backgroundColor: "#ccd1b2", // Starting color (change to the desired initial color)
    duration: 1
  }, {
    backgroundColor: "#ffff", // Ending color
    duration: 1
  });
});

    
    
    $("[colourchange]").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $("body");

  gsap.fromTo(targetElement, {
    scrollTrigger: {
      scrub: true,
      markers: false,
      trigger: triggerElement, // Use the current trigger element
      start: "top center",
      end: "top top"
    },
    backgroundColor: "#ffff", // Starting color (change to the desired initial color)
    duration: 1
  }, {
    backgroundColor: "#ccd1b2", // Ending color
    duration: 1
  });
});

// Dark to Light Color Change
$("[colourchange]").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $("body");

  gsap.fromTo(targetElement, {
    scrollTrigger: {
      scrub: true,
      markers: false,
      trigger: triggerElement, // Use the current trigger element
      start: "bottom center",
      end: "bottom top"
    },
    backgroundColor: "#ccd1b2", // Starting color (change to the desired initial color)
    duration: 1
  }, {
    backgroundColor: "#ffff", // Ending color
    duration: 1
  });
});
    
    
    
    
    
    
    


  
});