window.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

 
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
    
    
// Dark to Light Color Change
$("[colourchange]").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".page_wrap");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      // can also use "20px 80%"
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1
    }
  });
  tl.fromTo(
    targetElement,
    {
      backgroundColor: "#ffffff",
      duration: 1
    },
    {
      backgroundColor: "#ccd1b2",
      duration: 1
    }
  );
});
    
    // Dark to Light Color Change
$("[colourchangeback]").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".page_wrap");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      // can also use "20px 80%"
      start: "top bottom",
      end: "top center",
      scrub: 1
    }
  });
  tl.fromTo(
    targetElement,
    {
      backgroundColor: "#ccd1b2",
      duration: 1
    },
    {
      backgroundColor: "#ffffff",
      duration: 1
    }
  );
});
    


    
    
  
});