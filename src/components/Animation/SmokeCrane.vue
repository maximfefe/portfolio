<template>
    <div  ref="animatedSmoke" class="h">
          <div v-for="index in 60" :key="index" class="c">
          </div>
        </div>
</template>

<script>
import { gsap } from "gsap"

export default {
  
  mounted () {
   
    gsap.from(this.$refs.animatedSmoke, {
      scale: 0, 
      x: -700, 
      y: 500, 
      duration: 5,
      // delay: 1,
      ease: 'power4.out', 
    });


  },
}
</script>
