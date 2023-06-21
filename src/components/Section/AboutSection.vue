<template>
    <section id="about" class="md:flex md:flex-row-reverse md:justify-between md:items-center w-11/12 m-auto content" data-bgcolor="#112F3F" data-textcolor='#F6D9AA'>
      <div class="md:w-6/12 lg:w-5/12 mt-10 content">
        <h2 class="ml-auto font-title uppercase text-2xl md:text-4xl lg:text-5xl">Bonjour, je suis Maxim</h2>
        <p class="ml-auto  mt-10 text-2xl">Un développeur passionné par la création d'expériences web uniques et engageantes. Avec une solide expérience dans le développement front-end et back-end, je suis constamment à la recherche de nouvelles technologies et de tendances émergentes pour apporter une valeur ajoutée à mes projets.</p>
      </div>
      <div class="md:w-6/12 lg:w-5/12 z-10 relative">
        <img src="public/images/crane-vangogh.png" alt="crane">
      </div>
    </section>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
export default {
  mounted () {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    this.parallaxElement('#about .content', 'h2', -200, 0, 'Sine.easeInOut');
    this.parallaxElement('#about .content', 'p', 300, 0, 'Back.easeIn');
  },
  methods: {
    parallaxElement(section, element, yPercent, rotate, ease){
        let sectionSelector = this.$el.querySelector(section);
        const elementSelector = this.$el.querySelector(element);
        gsap.set(elementSelector, {
            rotation: rotate // Définissez l'angle de rotation souhaité (en degrés)
        });
        
        gsap.to(elementSelector, {
            yPercent: yPercent,
            rotation: rotate,
            ease: ease,
            scrollTrigger: {
            trigger: sectionSelector,
            scrub: true
            }
        });
    },
  },
}
</script>