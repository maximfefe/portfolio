<template>
    <section id="about" class="md:flex md:justify-between md:items-center w-11/12 m-auto content" data-bgcolor="#112F3F" data-textcolor='#F6D9AA'>
      <div class="sm:w-100 md:w-7/12 mt-10 content relative z-30 backdrop-blur-sm">
        <h2 class="ml-auto font-title uppercase text-2xl md:text-5xl lg:text-7xl">Bonjour, je suis Maxim</h2>
        <div class="description">
          <p class="ml-auto  mt-10 text-2xl">Je suis un développeur passionné qui prend plaisir à créer des expériences web uniques et engageantes. Fort de mon expérience en développement front-end et back-end, j'ai acquis une grande expertise dans les technologies du web. En quête d'apprentissage, je suis constamment à la recherche de nouvelles technologies et de tendances émergentes pour apporter une valeur ajoutée à mes projets.</p>
          <p class="ml-auto  mt-10 text-2xl">Dans mon travail, je suis soucieux de fournir un code propre et facile à maintenir, tout en respectant les délais et les exigences du projet. Je suis également passionné par le partage de mes connaissances.</p>
        </div>
      </div>
      <div class="w-100 z-10 absolute">
        <div class="w-full h-full" >
          <canvas id="canvas_about" class=""></canvas>
        </div>
      </div>
      <div class="w-full z-20 absolute left-0 h-screen">
      </div>
    </section>
</template>
<script>
import { gsap } from "gsap"
import { Application } from '@splinetool/runtime';
export default {
  mounted () {
    this.parallaxElement('#about', '.emoji', -200, 0, 'Sine.easeIn');
    this.parallaxElement('#about .content', 'h2', -200, 0, 'Sine.easeInOut');
    this.parallaxElement('#about .content', '.description', 70, 0, 'Back.easeIn');
    const canvas = document.getElementById('canvas_about');
    if (canvas !== null) {
        const spline = new Application(canvas);
        spline.load("https://prod.spline.design/w7FZK70YvBK1pAWX/scene.splinecode");
    }
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