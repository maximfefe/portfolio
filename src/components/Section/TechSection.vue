<template>
    <section id="tech" data-bgcolor="#112F3F" data-textcolor='#F6D9AA'  class="">
        <h2 class="font-title uppercase text-2xl md:text-5xl lg:text-7xl w-11/12 m-auto">Technologie</h2>
        <div class="content side-scroll flex gap-x-16 mt-96">
            <h3 v-for="(tech, index) in technologies" :key="index" :class="`uppercase font-title text-3xl md:text-5xl lg:text-6xl ${index%2==0? 'text-stroke': ''}`">
                {{tech}}
            </h3>
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap';
import { parallaxGsap } from "@/utils/ParallaxGsap.js";

export default {
    data() {
        return {
            technologies: ['Flask', 'Tailwind', 'Nuxt', 'Django', 'Bootstrap', 'Vuejs', 'Typescript', 'Laravel'],
            // technologies: ['Flask', 'Tailwind', 'Nuxt', 'Django' ],
        };
    },
    mounted() {
        this.scrollAnimation();
        if(screen.width > 768){
            parallaxGsap('#tech', '#tech h2', 400, -1000, 'power1.in');
            parallaxGsap('#tech .content', '.side-scroll', -150, 50, 'power1.out');
        }

    },
    methods: {
        scrollAnimation() {
            const content = document.querySelector('.side-scroll');
            content.innerHTML += content.innerHTML;
            const totalWidth = content.scrollWidth - content.clientWidth;
            gsap.set(content, { x: -20 }); 

            gsap.to(content, {
                x: -totalWidth,
                ease: 'linear',
                duration: totalWidth / 200,
                repeat: -1,
            });
        },
    }
}
</script>

<style scoped>
.text-stroke{
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px hsl(var(--s));
}
@media (min-width:768px) {
    text-stroke{
        -webkit-text-stroke: 2px hsl(var(--s));
    }

}
</style>