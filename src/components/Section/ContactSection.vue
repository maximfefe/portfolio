<template>
    <section id="contact" data-bgcolor="#1a1b1c" data-textcolor='#F1F1F1'>
        
        <div class="w-11/12 m-auto flex flex-col lg:flex-row-reverse">
            <div class="absolute">
                <NightBackground/>
            </div>

            <div class="w-full lg:w-1/2 mt-40">
                <h2 class="font-title uppercase text-2xl sm:mt-60 md:mt-0 md:text-5xl lg:text-7xl">Contact</h2>
                <div class="reveal-contact content ml-auto w-full text-2xl">
                    <i></i>
                    <i></i>
                    <i></i>
                    <!-- <p>Vous avez un projet intéressant à discuter ou vous souhaitez simplement en savoir plus sur mon travail ? N'hésitez pas à me contacter via l'un des moyens ci-dessus </p> -->
                    <p class="">Vous avez un projet sur lequel vous aimeriez travailler avec moi ou vous souhaitez simplement discuter de certaines de mes réalisations passées ? Quel que soit votre intérêt, je suis toujours heureux de discuter et d'explorer des idées avec de nouvelles personnes. N'hésitez donc pas à me contacter.</p><br>
                    <p>maxim@fedelique.fr</p>
                </div>
            </div>
            <div class="w-full lg:w-1/2 m-auto card-flip-gsap z-10">
                <CardFlip />
            </div>
        </div>
        <!-- <WaveBackground2/> -->
    </section>        
</template>

<script>
import NightBackground from '@/components/Animation/NightBackground.vue'
import CardFlip from '@/components/Contact/CardFlip.vue'
import { gsap } from 'gsap';
import { parallaxGsap } from "@/utils/ParallaxGsap.js";
import ScrollReveal from 'scrollreveal';

export default {
    components:{
        NightBackground,
        CardFlip
    },
    mounted() {
        const sr = ScrollReveal();
       
        sr.reveal('.reveal-contact', {
            reset: true, 
            origin: 'bottom', 
            distance: '100px',
            interval: 0,
            duration: 2000,
        });
        parallaxGsap('#contact', '#contact h2', 0, 200, 'power1.in');
        parallaxGsap('#contact', '#contact .content', 150, -250, 'power2.in');
        parallaxGsap('#contact', '#contact .card-flip-gsap', 0, 400, 'power1.in');
    },
    methods:{
    }
    
}
</script>