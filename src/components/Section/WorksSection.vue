<template>
    <section id="works" data-bgcolor="#F6D9AA" data-textcolor='#112F3F'>
        <div class="absolute flex">
            <img class="relative top-0 w-1/2 left-hand" src="/images/left-hand.png" alt="Main gauche de l'oeuvre Creation of Adam by God, Michelangelo">
            <img class="w-1/2 invisible" src="/images/right-hand.png" alt="Main droite de l'oeuvre Creation of Adam by God, Michelangelo">
        </div>
        <div class="content w-11/12 m-auto relative z-10">
            <h2 class="ml-auto text-center mt-40 font-title uppercase text-2xl md:text-5xl lg:text-7xl">Projets</h2>
            <div class="mt-20 grid gap-4 gap-y-20 grid-cols-3 justify-items-center">
                <CardWorks :isNew="true" :languages="['Django','Nuxt']" :title="'WILCO Pilote'"/>  
                <CardWorks2 :isNew="false" :languages="['Laravel']" :title="'Évolution des communes'"/>  
                <CardWorks :isNew="true" :languages="['Express','Vuejs']" :title="'KitUI'"/>  
                
                <CardWorks :isNew="false" :languages="['Django']" :title="'ID Eufrance'"/>  
                <CardWorks2 :isNew="true" :languages="['Vuejs', 'Flask']" :title="'Parseur Géographique'"/>  
                <CardWorks :isNew="false" :languages="['Laravel']" :title="'Citepa'"/>  
                
            </div>
        </div>
        <div class="absolute flex z-0">
            <img class="w-1/2 invisible" src="/images/left-hand.png" alt="Main gauche de l'oeuvre Creation of Adam by God, Michelangelo">
            <img class="relative bottom-0 w-1/2 ml-auto right-hand" src="/images/right-hand.png" alt="Main droite de l'oeuvre Creation of Adam by God, Michelangelo">
        </div>
    </section> 
</template>

<script>
import { gsap } from 'gsap';
import CardWorks from '@/components/Works/CardWorks.vue';
import CardWorks2 from '@/components/Works/CardWorks2.vue';

export default {
    components:{
        CardWorks,
        CardWorks2
    },
    mounted() {
        this.parallaxElement('#works', '#works .left-hand', 300, 0, 'power1.in');
        this.parallaxElement('#works', '#works .right-hand', -300, 0, 'power1.in');
    },
    methods: {
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
<style scoped>
@media (min-width:768px) {
    h1, h2{
        -webkit-text-fill-color: transparent; /* Rendre la couleur du texte transparente */
        -webkit-text-stroke: 2px hsl(var(--p));
    }
}
.card{
    background-color:rgba(246, 217, 170, 0.3);
}
.card:hover{
    background-color:rgba(241, 241, 241, 0.3);
}
</style>