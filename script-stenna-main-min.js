window.addEventListener("DOMContentLoaded",(t=>{"use strict";if(void 0===Webflow.env("editor")){const e=new Lenis({duration:1.2,lerp:.1,wheelMultiplier:.7,infinite:!1,gestureOrientation:"vertical",normalizeWheel:!1,smoothTouch:!1});function o(t){e.raf(t),requestAnimationFrame(o)}function i(){e.on("scroll",ScrollTrigger.update),gsap.ticker.add((t=>{e.raf(1e3*t)})),gsap.ticker.lagSmoothing(0)}requestAnimationFrame(o),$("[data-lenis-resize]").on("click",(function(){e.resize()})),$("[data-lenis-start]").on("click",(function(){e.start()})),$("[data-lenis-stop]").on("click",(function(){e.stop()})),$("[data-lenis-toggle]").on("click",(function(){$(this).toggleClass("stop-scroll"),$(this).hasClass("stop-scroll")?e.stop():e.start()})),i()}gsap.registerPlugin(ScrollTrigger),gsap.fromTo(".hero_image",{clipPath:"polygon(50% 50%, 50% 50%, 50% 50%, 50% 50% )"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",delay:.2,stagger:{amount:2.4},ease:"power1.out"}),gsap.to(".arrow-down",{scrollTrigger:{scrub:1,markers:!1,trigger:".is-footer",start:"center bottom",end:"clamp(bottom bottom)"},rotate:180,duration:1}),document.querySelectorAll("[colourchange]").forEach((function(t){gsap.timeline({scrollTrigger:{trigger:t,start:"top 25%",end:"bottom 75%",toggleActions:"restart reverse restart reverse",duration:.6,ease:"power1.out"}}).to("body",{backgroundColor:gsap.getProperty("html","--color--prime")})})),$("[imagechange]").each((function(t){$(this).find(".about_heading");let e=$(this).find(".about_span"),o=$(this).find(".about_item");e.each((function(t){let i=o.eq(t).find(".about_image"),r=e.not($(this));gsap.matchMedia().add("(min-width: 992px)",(()=>{let t=gsap.timeline({paused:!0,defaults:{duration:.4}});t.to($(this),{zIndex:3}).to(r,{zIndex:1},"<").to(i,{opacity:1,scale:1,ease:"power1.out"},"<"),$(this).on("mouseenter",(function(){t.timeScale(1),t.play()})),$(this).on("mouseleave",(function(){t.timeScale(2),t.reverse()}))}))}))}))}));