<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="gsap">
    <section id="hero" data-bgcolor="#1d232a" data-textcolor='#F6D9AA'>
      <div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
</div>
    </section>
    <section id="about" data-bgcolor="#112F3F" data-textcolor='#F6D9AA'>

    </section>
    <section id="works" data-bgcolor="#F6D9AA" data-textcolor='#112F3F'>

    </section>
    <section id="tech" data-bgcolor="#112F3F" data-textcolor='#F6D9AA'>

    </section>
    <section id="contact" data-bgcolor="#1d232a" data-textcolor='#F6D9AA'>

    </section>
  </main>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default {
  setup() {
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
  }
}
</script>


<style>
section{
  height: 80vh;
}
  
</style>