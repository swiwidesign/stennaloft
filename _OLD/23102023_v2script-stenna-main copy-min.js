window.addEventListener("DOMContentLoaded",t=>{"use strict";if(void 0===Webflow.env("editor")){const t=new Lenis({duration:1.2,lerp:.1,wheelMultiplier:.7,infinite:!1,gestureOrientation:"vertical",normalizeWheel:!1,smoothTouch:!1});requestAnimationFrame((function o(r){t.raf(r),requestAnimationFrame(o)})),$("[data-lenis-start]").on("click",(function(){t.start()})),$("[data-lenis-stop]").on("click",(function(){t.stop()})),$("[data-lenis-toggle]").on("click",(function(){$(this).toggleClass("stop-scroll"),$(this).hasClass("stop-scroll")?t.stop():t.start()})),t.on("scroll",ScrollTrigger.update),gsap.ticker.add(o=>{t.raf(1e3*o)}),gsap.ticker.lagSmoothing(0)}gsap.registerPlugin(ScrollTrigger),gsap.to(".arrow-down",{scrollTrigger:{scrub:!0,markers:!1,trigger:".is-footer",start:"center bottom",end:"bottom bottom"},rotate:180,duration:1}),$("[colourchange]").each((function(t){let o=$(this),r=$(".page_wrap");gsap.timeline({scrollTrigger:{trigger:o,start:"top bottom",end:"bottom bottom",scrub:1}}).fromTo(r,{backgroundColor:"#ffffff",duration:1},{backgroundColor:"#ccd1b2",duration:1})})),$("[colourchangeback]").each((function(t){let o=$(this),r=$(".page_wrap");gsap.timeline({scrollTrigger:{trigger:o,start:"top bottom",end:"top center",scrub:1}}).fromTo(r,{backgroundColor:"#ccd1b2",duration:1},{backgroundColor:"#ffffff",duration:1})}))});