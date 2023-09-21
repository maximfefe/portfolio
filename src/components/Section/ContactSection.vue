<template>
    <section id="contact" data-bgcolor="#1a1b1c" data-textcolor='#F1F1F1'>
        <div class="w-11/12 m-auto">
            <h2 class="font-title uppercase text-2xl sm:mt-60 md:mt-0 md:text-5xl lg:text-7xl w-fit ml-auto">Contact</h2>
            <div class="content ml-auto w-4/6 md:w-1/2 text-2xl">
                <i></i>
                <i></i>
                <i></i>
                <!-- <p>Vous avez un projet intéressant à discuter ou vous souhaitez simplement en savoir plus sur mon travail ? N'hésitez pas à me contacter via l'un des moyens ci-dessus </p> -->
                <p class="">Vous avez un projet sur lequel vous aimeriez travailler avec moi ou vous souhaitez simplement discuter de certaines de mes réalisations passées ? Quel que soit votre intérêt, je suis toujours heureux de discuter et d'explorer des idées avec de nouvelles personnes. N'hésitez donc pas à me contacter.</p><br>
                <p>maxim@fedelique.fr</p>
            </div>
            <CardFlip/>
        </div>
        <NightBackground/>
        <!-- <WaveBackground2/> -->
    </section>        
</template>

<script>
import NightBackground from '@/components/Animation/NightBackground.vue'
import CardFlip from '@/components/Contact/CardFlip.vue'
import { gsap } from 'gsap';

export default {
    components:{
        NightBackground,
        CardFlip
    },
    mounted() {
        this.parallaxElement('#contact', '#contact h2', 600, 0, 'power1.in');
        this.parallaxElement('#contact', '#contact .content', 250, 0, 'power1.in');
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