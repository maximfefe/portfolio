<template>
  <main class="gsap">
    <HeroSection/>
    <AboutSection/>
    <WorksSection/>
    <TechSection/>
    <ContactSection/>
  </main>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HeroSection from '@/components/Section/HeroSection.vue'
import AboutSection from '@/components/Section/AboutSection.vue'
import WorksSection from '@/components/Section/WorksSection.vue'
import TechSection from '@/components/Section/TechSection.vue'
import ContactSection from '@/components/Section/ContactSection.vue'

export default {
  components:{
    HeroSection,
    AboutSection,
    WorksSection,
    TechSection,
    ContactSection,
  },
  mounted () {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    this.animation = this.animateOnScroll()
    ScrollTrigger.refresh();
  },
  methods: {
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
  },
}
</script>


<style>
section{
  min-height: 120vh;
  overflow: hidden;
}

@media (min-width:768px) {
  h1, h2{
    -webkit-text-fill-color: transparent; /* Rendre la couleur du texte transparente */
    -webkit-text-stroke: 2px hsl(var(--s));
  }
  section{
    min-height: 110vh;
  }

}


</style>