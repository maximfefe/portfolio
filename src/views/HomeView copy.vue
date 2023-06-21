<template>
  <main class="gsap">
    <section id="hero" class="w-11/12 m-auto" data-bgcolor="#1a1b1c" data-textcolor='#F6D9AA'>
      <h1 class="relative z-10 top-3/4 w-2/5 font-title uppercase text-7xl">Développeur web</h1>
      <p class="relative z-10 mt-5 ml-auto text-base-100 w-2/5  text-2xl">Explorez mon univers créatif et technologique à travers mon portfolio, où j'exprime ma passion pour le développement web, le design et l'innovation.</p>
      <!-- <img class="crane " ref="crane" src="public/images/crane-vangogh.png" alt="Crâne de squelette fumant une cigarette" height="400" width="650"/> -->
      <div class="photo-container">
        <img :src="photoSrc" alt="Crâne de squelette fumant une cigarette" height="400" width="650" class="photo crane" ref="photo" />
        <div v-for="(pixel, index) in pixelCoordinates" :key="index" class="pixel" :ref="`pixel-${index}`"></div>
      </div>
      <!-- <SmokeThree/> -->
      <!-- <SmokeThree2/> -->
      <SmokeThree3/>
      <!-- <div class="smoke"></div> -->
    </section>
    <section id="about" class="" data-bgcolor="#112F3F" data-textcolor='#F6D9AA'>

    </section>
    <section id="works" data-bgcolor="#F6D9AA" data-textcolor='#112F3F'>

    </section>
    <section id="tech" data-bgcolor="#112F3F" data-textcolor='#F6D9AA'>

    </section>
    <section id="contact" data-bgcolor="#1a1b1c" data-textcolor='#F6D9AA'>

    </section>
  </main>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SmokeThree from '@/components/SmokeThree.vue'
import SmokeThree2 from '@/components/SmokeThree2.vue'
import SmokeThree3 from '@/components/SmokeThree3.vue'

export default {
  components:{
    SmokeThree,
    SmokeThree2,
    SmokeThree3
  },
  data() {
    return {
      photoSrc: "public/images/crane-vangogh.png",
      pixelCoordinates: [
        { x: 20, y: 30 },
        { x: 200, y: 30 },
        { x: 20, y: 300 },
        { x: 50, y: 50 },
      ]
    };
  },
  mounted () {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    this.animation = this.animateOnScroll()
    ScrollTrigger.refresh();

    this.animatePixels();

    const section = this.$el.querySelector("#hero");
    const image = this.$el.querySelector(".crane");
    const pixel = this.$el.querySelector(".pixel");
    // const image = this.$refs.crane;
    const title = this.$el.querySelector("h1");
    const paragraph = this.$el.querySelector("p");

    gsap.to(image, {
      yPercent: -300,
      ease: "Circ.easeIn",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    });
    gsap.to(pixel, {
      yPercent: -300,
      ease: "Circ.easeIn",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    });

    gsap.to(title, {
      yPercent: -200,
      ease: "Back.easeInOut",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    });
    gsap.to(paragraph, {
      yPercent: -130,
      ease: "Back.easeInOut",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: { 
    animatePixels() {
      const photo = this.$refs.photo;
      const pixels = this.$el.querySelectorAll('.pixel');

      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });

      gsap.set(pixels, { opacity: 0 });

      const photoRect = photo.getBoundingClientRect();
      const photoWidth = photoRect.width;
      const photoHeight = photoRect.height;

      this.pixelCoordinates.forEach((coord, index) => {
        const pixel = pixels[index];

        const pixelX = (coord.x / 100) * photoWidth;
        const pixelY = (coord.y / 100) * photoHeight;

        gsap.set(pixel, { x: pixelX, y: pixelY });

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
    animateOnScroll() {
      const scrollColorElems = document.querySelectorAll("section");
      return gsap.utils.toArray("section").forEach((panel, i) => {
        const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
        const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
        ScrollTrigger.create({
          trigger: panel,
          start:'top center',
          scrub:true,
          onEnter: () =>
            gsap.to(".gsap", {
              backgroundColor: panel.dataset.bgcolor,
              color: panel.dataset.textcolor,
              overwrite: "auto"
            }),
          onLeaveBack: () =>
            gsap.to(".gsap", {
              backgroundColor: prevBg,
              color: prevText,
              overwrite: "auto"
            })        
        });
      });
    },
  }
}
</script>


<style>
section{
  height: 110vh;
}
#hero {
  position: relative;
  overflow: hidden;
  perspective: 1000px; /* Ajustez cette valeur selon vos préférences */
}

#hero img {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateZ(-20px) scale(1); /* Ajustez la valeur de l'échelle selon vos préférences */
  filter: brightness(0.7); /* Ajustez cette valeur pour obtenir l'effet souhaité */
}
h1, h2{
  -webkit-text-fill-color: transparent; /* Rendre la couleur du texte transparente */
  -webkit-text-stroke: 2px hsl(var(--s));
}
.pixel {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: #e52121;
  /* Personnalisez la couleur et le style des pixels selon vos besoins */
  opacity: 0;
}
.photo-container {
  position: relative;
  width: 100%;
}
</style>