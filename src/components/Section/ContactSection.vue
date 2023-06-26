<template>
    <section id="contact" data-bgcolor="#1a1b1c" data-textcolor='#F6D9AA'>
        <div class="w-11/12 m-auto">
            <h2 class="font-title uppercase text-2xl sm:mt-60 md:mt-0 md:text-5xl lg:text-7xl w-fit ml-auto">Contact</h2>
            <i></i>
            <i></i>
            <i></i>
            <p></p>
        </div>
        <NightBackground/>
        <!-- <WaveBackground2/> -->
    </section>        
</template>

<script>
import NightBackground from '@/components/Animation/NightBackground.vue'
import { gsap } from 'gsap';

export default {
    components:{
        NightBackground,
    },
    mounted() {
        this.parallaxElement('#contact', '#contact h2', 300, 0, 'power1.out');
        
    },
    methods:{
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
    }
    
}
</script>