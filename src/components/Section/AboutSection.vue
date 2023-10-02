<template>
    <section id="about" class="md:flex md:justify-between md:items-center w-11/12 m-auto content" data-bgcolor="#112F3F" data-textcolor='#F6D9AA'>
      <div class="sm:w-100 md:w-7/12 mt-10 content">
        <h2 class="ml-auto font-title uppercase text-2xl md:text-5xl lg:text-7xl">Bonjour, je suis Maxim</h2>
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
import { parallaxGsap } from "@/utils/ParallaxGsap.js";


export default {
  components : {
  },
  mounted () {
    
    
    const sr = ScrollReveal();

    sr.reveal('.reveal', {
      reset: true, 
      origin: 'bottom', 
      distance: '100px',
      interval: 100,
      duration: 2000,
    });
    
    // sr.reveal('.reveal-left', {
    //   reset: true, 
    //   origin: 'left', 
    //   distance: '300px',
    //   interval: 200,
    //   duration: 2000,
    // });
    parallaxGsap('#about', '.profil', 20, -450, 'power3.in');
    parallaxGsap('#about .content', 'h2', 0, -200, 'power3.in');
    parallaxGsap('#about .content', '.description', 20, -100, 'power1.in');

  },
  methods: {
  },
}
</script>