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
export default {
    data() {
        return {
            technologies: ['Flask', 'Tailwind', 'Nuxt', 'Django', 'Bootstrap', 'Vuejs', 'Typescript', 'Laravel'],
            // technologies: ['Flask', 'Tailwind', 'Nuxt', 'Django' ],
        };
    },
    mounted() {
        this.scrollAnimation();
        // this.parallaxElement('#tech', '#tech h2', 1000, 0, 'power1.in');
        // this.parallaxElement('#tech .content', '.side-scroll', 600, 0, 'power1.in');
        this.parallaxElement('#tech', '#tech h2', 200, 0, 'power1.in');
        this.parallaxElement('#tech .content', '.side-scroll', 300, 0, 'power1.in');

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
        parallaxElement(section, element, yPercent, ease){
            let sectionSelector = this.$el.querySelector(section);
            const elementSelector = this.$el.querySelector(element);
            gsap.set(elementSelector, {
                yPercent: 0,
            });
            
            gsap.to(elementSelector, {
                yPercent: yPercent,
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