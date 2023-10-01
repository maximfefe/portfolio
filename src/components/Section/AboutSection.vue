<template>
    <section id="about" class="md:flex md:justify-between md:items-center w-11/12 m-auto content" data-bgcolor="#112F3F" data-textcolor='#F6D9AA'>
      <div class="sm:w-100 md:w-7/12 mt-10 content">
        <h2 class="reveal ml-auto font-title uppercase text-2xl md:text-5xl lg:text-7xl">Bonjour, je suis Maxim</h2>
        <div class="description">
          <p class="reveal ml-auto  mt-10 text-2xl">Je suis un développeur passionné qui prend plaisir à créer des expériences web uniques et engageantes. Fort de mon expérience en développement front-end et back-end, j'ai acquis une grande expertise dans les technologies du web. En quête d'apprentissage, je suis constamment à la recherche de nouvelles technologies et de tendances émergentes pour apporter une valeur ajoutée à mes projets.</p>
          <p class="reveal ml-auto  mt-10 text-2xl">Dans mon travail, je suis soucieux de fournir un code propre et facile à maintenir, tout en respectant les délais et les exigences du projet. Je suis également passionné par le partage de mes connaissances.</p>
        </div>
      </div>
      <atropos-component class="reveal mx-auto mt-10 card">
          <div data-atropos-offset="0" class="sm:hover:bg-primary p-10 card">
            <img  data-atropos-offset="8" width="250" height="100" src="images/moi.png"  alt="photo de profil" class="m-auto profil backdrop-blur-sm"/>
          </div>
      </atropos-component>
    </section>
</template>
<script>
import { gsap } from "gsap"
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

export default {
  components : {
  },
  mounted () {
    this.parallaxElement('#about', '.profil', -400, 0, 'power3.in');
    this.parallaxElement('#about .content', 'h2', -200, 0, 'Sine.easeInOut');
    this.parallaxElement('#about .content', '.description', 70, 0, 'Back.easeIn');
  
  
    const sr = ScrollReveal();

    // Configurez les révélations de défilement
    sr.reveal('.reveal', {
      reset: true, 
      origin: 'bottom', 
      distance: '-100px',
      interval: 100,
      duration: 2000, // Durée de l'animation en millisecondes
    });

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