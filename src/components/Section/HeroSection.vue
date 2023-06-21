<template>
    <section id="hero" data-bgcolor="#1a1b1c" data-textcolor='#F1F1F1'>
      <div class="w-11/12 m-auto  content">
        <h1 class="relative z-10  font-title uppercase text-2xl text-secondary top-10  md:text-5xl lg:top-3/4 lg:w-2/5 lg:text-7xl">Développeur web</h1>
        <p class="relative z-10 mt-5 ml-auto text-xl top-60 lg:top-0 lg:w-2/5 lg:text-2xl">Explorez mon univers créatif et technologique à travers mon portfolio, où j'exprime ma passion pour le développement web, le design et l'innovation.</p>
      </div>
      <div class="photo-container flex gap-48 w-100">
        <!-- <div class="pixel2"></div> -->
        <img :src="photoSrc" alt="Crâne de squelette fumant une cigarette" height="400" width="650" class="photo crane max-w-full h-fit	" ref="photo" />
        <img src="/public/images/smoke.png" alt="fumer" height="300" width="250" class="smoke" />


        <!-- <div v-for="(pixel, index) in pixelCoordinates" :key="index" class="pixel" :ref="`pixel-${index}`"></div> -->
      </div>
      <!-- <SmokeAnime /> -->
    </section>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SmokeThree from '@/components/SmokeThree.vue'
import SmokeThree2 from '@/components/SmokeThree2.vue'
import SmokeThree3 from '@/components/SmokeThree3.vue'
import SmokeAnime from '@/components/SmokeAnime.vue'

export default {
  components:{
    SmokeAnime,
    SmokeThree,
    SmokeThree2,
    SmokeThree3
  },
  data() {
    return {
      photoSrc: "public/images/crane-vangogh.png",
      pixelCoordinates: [
        { x: 82, y: -143 },
        { x: 82, y: -143 },
        { x: 82, y: -143 },
        { x: 82.5, y: -143 },
        { x: 82.5, y: -143 },
        { x: 82.5, y: -143 },
        { x: 81.5, y: -143 },
        { x: 81.5, y: -143 },
        { x: 81.5, y: -143 },
        { x: 82, y: -142.5 },
        { x: 82, y: -142.5 },
        { x: 82, y: -142.5 },
        { x: 82.5, y: -142.5 },
        { x: 82.5, y: -142.5 },
        { x: 82.5, y: -142.5 },
        { x: 81.5, y: -142.5 },
        { x: 81.5, y: -142.5 },
        { x: 81.5, y: -142.5 },
        { x: 82, y: -142 },
        { x: 82, y: -142 },
        { x: 82, y: -142 },
        { x: 82.5, y: -142 },
        { x: 82.5, y: -142 },
        { x: 82.5, y: -142 },
        { x: 81.5, y: -142 },
        { x: 81.5, y: -142 },
        { x: 81.5, y: -142 },
        { x: 82, y: -141.5 },
        { x: 82, y: -141.5 },
        { x: 82, y: -141.5 },
        { x: 82.5, y: -141.5 },
        { x: 82.5, y: -141.5 },
        { x: 82.5, y: -141.5 },
        { x: 81.5, y: -141.5 },
        { x: 81.5, y: -141.5 },
        { x: 81.5, y: -141.5 },
        { x: 82, y: -141 },
        { x: 82, y: -141 },
        { x: 82, y: -141 },
      ]
    };
  },
  mounted () {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // this.animation = this.animateOnScroll()
    // ScrollTrigger.refresh();

    
    this.parallaxElement('#hero .photo-container', '.crane', 300, 0,'Back.easeIn');
    this.parallaxElement('#hero .photo-container', '.smoke', 300, 80, 'Back.easeIn');
    // this.parallaxElement('#hero .photo-container', '.smoke', -650, 45, 'Sine.easeInOut');
    this.scaleElement('.smoke', 0.8);
    // this.parallaxElement('#hero .photo-container', '.pixel', -450, 0,'Back.easeIn');
    // this.parallaxElement('#hero .photo-container', '.pixel2', -400, 0, 'Sine.easeIn');
    this.parallaxElement('#hero .content', 'h1', 400, 0, 'Back.easeInOut');
    this.parallaxElement('#hero .content', 'p', -10, 0, 'Back.easeInOut');
    
    // this.animatePixels();
    // ScrollTrigger.refresh();

  },
  methods: { 
    animatePixels() {
      const photo = this.$refs.photo;
      const pixels = this.$el.querySelectorAll('.pixel');
      const colors = ['#d97979', '#c64949', '#e4c642', '#e48842']; // Ajoutez les couleurs souhaitées

      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });

      gsap.set(pixels, { opacity: 0 });

      const photoRect = photo.getBoundingClientRect();
      const photoWidth = photoRect.width;
      const photoHeight = photoRect.height;

      this.pixelCoordinates.forEach((coord, index) => {
        const pixel = pixels[index];
        const color = colors[Math.floor(Math.random() * colors.length)]; // Choisissez une couleur aléatoire

        const pixelX = (coord.x / 100) * photoWidth;
        const pixelY = (coord.y / 100) * photoHeight;

        gsap.set(pixel, { x: pixelX, y: pixelY,  backgroundColor: color });

        timeline.fromTo(
          pixel,
          { opacity: 0 },
          { opacity: 1, duration: 0.2 + Math.random() * 0.5, repeat: 1, yoyo: true, stagger: 0.1 },
          Math.random()
        );
      });

      const handleScroll = () => {
        const rect = photo.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible && !timeline.isActive()) {
          timeline.play();
        } else if (!isVisible && timeline.isActive()) {
          timeline.pause();
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();
    },
    
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
    scaleElement(element, scale){
        const elementSelector = this.$el.querySelector(element);
        gsap.to(elementSelector, {
            scale: scale, // Définissez la mise à l'échelle souhaitée
            // x: '-=50', // Mouvement vers la droite
            repeat: -1, // Répéter indéfiniment
            yoyo: true, // Effectuer une animation en va-et-vient
            duration: 4,
            ease: 'Back.easeInOut' // Définissez l'ease souhaité
        });
    }
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