<template>
    <section id="hero" data-bgcolor="#1a1b1c" data-textcolor='#F1F1F1'>
      <div class="w-11/12 m-auto content h-36">
        <h1 ref="revealText" class="relative z-10  font-title uppercase text-2xl text-secondary top-0  md:text-5xl lg:top-3/4 lg:w-2/5 lg:text-7xl">Développeur <span class="typed"> </span></h1>
        <p class="reveal relative z-10 mt-5 ml-auto text-xl top-80 lg:top-0 lg:w-2/5 lg:text-2xl">Explorez mon univers créatif et technologique à travers mon portfolio, où j'exprime ma passion pour le développement web, le design et l'innovation.</p>
      </div>
      <div class="photo-container flex gap-48 w-100">
        <!-- <div class="pixel2"></div> -->
        <img ref="animatedPhoto" :src="photoSrc" alt="Crâne de squelette fumant une cigarette" height="400" width="900" class="photo crane max-w-full h-fit" />
        <!-- <img src="/images/smoke.png" alt="fumer" height="300" width="250" class="smoke " /> -->
        <SmokeCrane class="smoke" />

        <!-- <div v-for="(pixel, index) in pixelCoordinates" :key="index" class="pixel" :ref="`pixel-${index}`"></div> -->
      </div>
      <!-- <SmokeAnime /> -->
    </section>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SmokeCrane from '@/components/Animation/SmokeCrane.vue'
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

export default {
  components:{
    SmokeCrane
  },
  data() {
    return {
      photoSrc: "/images/crane-vangogh.png",
    };
  },
  mounted () {

    const sr = ScrollReveal();

    // Configurez les révélations de défilement
    sr.reveal('.reveal', {
      reset: true, 
      origin: 'bottom', 
      distance: '100px',
      delay: 200,
      // interval: 600,
      duration: 2000, // Durée de l'animation en millisecondes
    });

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    this.parallaxElement('#hero .content', 'h1', -10, 400, 'none');
    this.parallaxElement('#hero .content', 'p', 40, 0, 'power1.in');
    this.parallaxElement('#hero .photo-container', '.crane', -15, -200,'power3.in');
    this.parallaxElement('#hero .photo-container', '.smoke', -60, -200, 'power3.in');
    
    gsap.from(this.$refs.animatedPhoto, {
      x: -100, 
      y: 50, 
      duration: 3, 
      ease: 'power4.out',
    });
    
    gsap.from(this.$refs.animatedSmoke, {
      scale: 0.5, 
      duration: 2, 
      ease: 'power4.out', 
    });

    gsap.from(this.$refs.revealText, {
      x: -900, 
      duration: 2, 
      delay:0.5,
      ease: 'power3.out', 
    });

     // Utilisation de GSAP pour l'animation
    var typed = new Typed(".typed", {
        strings: ["Front", "Back", "Fullstack", "Web"],
        typeSpeed: 100,
        startDelay:1000,
        backSpeed: 50,
        loop:true
    }); 
      

  },
  methods: { 

    
    parallaxElement(section, element, initialYPercent, finalYPercent, ease){
        let sectionSelector = this.$el.querySelector(section);
        const elementSelector = this.$el.querySelector(element);

        const screenHeight = window.innerHeight;
        // const initialYPosition = (initialYPercent / 100) * screenHeight;

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
    },
  }
}
</script>


<style scoped>
.crane{
  transform: translateZ(-20px) scale(1); /* Ajustez la valeur de l'échelle selon vos préférences */
  filter: brightness(0.7); /* Ajustez cette valeur pour obtenir l'effet souhaité */
}
@media (min-width:768px) {
    .crane{
        max-width: 50%;
    }
}

.smoke{
    max-width: 50%;
}
.pixel {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: #e48842;
  /* Personnalisez la couleur et le style des pixels selon vos besoins */
  opacity: 0;
}
.pixel2{
  position: absolute;
  top: 50%; /* Position verticale du point */
  left: 50%; /* Position horizontale du point */
  transform: translate(-50%, -50%); /* Centre le point */
  width: 10px;
  height: 10px;
  border-radius: 50%;
  /* position: relative; */

  /* top:0; */
  background-color: #24d9a3;

}
.smoke{

  left: 50%;
}

</style>