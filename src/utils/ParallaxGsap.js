import { gsap } from "gsap";

export function parallaxGsap(section, element, initialYPercent, finalYPercent, ease) {
  let sectionSelector = document.querySelector(section);
  const elementSelector = document.querySelector(element);

  gsap.set(elementSelector, {
    yPercent: initialYPercent,
  });

  gsap.to(elementSelector, {
    yPercent: finalYPercent,
    ease: ease,
    scrollTrigger: {
      trigger: sectionSelector,
      scrub: true
    }
  });
}
