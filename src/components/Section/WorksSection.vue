<template>
    <section id="works" data-bgcolor="#F6D9AA" data-textcolor='#112F3F'>
        <div class="absolute flex">
            <img class="relative top-0 w-1/2 left-hand" src="/images/left-hand.png" alt="Main gauche de l'oeuvre Creation of Adam by God, Michelangelo">
            <img class="w-1/2 invisible" src="/images/right-hand.png" alt="Main droite de l'oeuvre Creation of Adam by God, Michelangelo">
        </div>
        <div class="content w-11/12 m-auto relative z-10">
            <h2 class="ml-auto text-center mt-40 font-title uppercase text-2xl md:text-5xl lg:text-7xl">Projets</h2>
            <div class="mt-20 grid gap-4 gap-y-20 grid-cols-3 justify-items-center">
                <CardWorks onclick="modal_1.showModal()"  :isNew="true" :languages="['Django','Nuxt']" :title="'WILCO Pilote'" image="crane-vangogh.png"/>  
                <CardWorks2 onclick="modal_2.showModal()"   :isNew="false" :languages="['Laravel']" :title="'Évolution des communes'" image="crane-vangogh.png"/>  
                <CardWorks :isNew="true" :languages="['Express','Vuejs']" :title="'KitUI'" image="crane-vangogh.png"/>  
                
                <CardWorks :isNew="false" :languages="['Django']" :title="'ID Eaufrance'" image="crane-vangogh.png"/>  
                <CardWorks2 :isNew="true" :languages="['Vuejs', 'Flask']" :title="'Parseur Géographique'" image="crane-vangogh.png"/>  
                <CardWorks :isNew="false" :languages="['Laravel']" :title="'Citepa'" image="crane-vangogh.png"/>  
                
            </div>
            <ModalWorks
                v-for="project in projects"
                :key="project.index"
                :modalId="`modal_${project.index}`"
                :title="project.title"
                :content="project.content"
                :canvas3d="project.canvas3d"
                ref="modal"
            />
            <!-- <dialog id="my_modal_1" class="modal">
                <form method="dialog" class="modal-box">
                    <h3 class="font-bold text-lg">Hello!</h3>
                    <p class="py-4">Press ESC key or click the button below to close</p>
                    <div class="modal-action">
                    <button class="btn">Close</button>
                    </div>
                </form>
            </dialog> -->
        </div>

        <div class="absolute flex z-0">
            <img class="w-1/2 invisible" src="/images/left-hand.png" alt="Main gauche de l'oeuvre Creation of Adam by God, Michelangelo">
            <img class="relative bottom-0 w-1/2 ml-auto right-hand" src="/images/right-hand.png" alt="Main droite de l'oeuvre Creation of Adam by God, Michelangelo">
        </div>
    </section> 
</template>
<!-- <script type="module" src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"></script> -->
<script>
import { gsap } from 'gsap';
import ModalWorks from '@/components/Works/ModalWorks.vue';
import CardWorks from '@/components/Works/CardWorks.vue';
import CardWorks2 from '@/components/Works/CardWorks2.vue';

export default {
    components:{
        CardWorks,
        CardWorks2,
        ModalWorks
    },
    data() {
        return {
        projects: [
            // {
            //     index: 1,
            //     title: 'WILCO Pilote',
            //     content: `
            //         <p>Ce projet est projet réalisé</p>
            //         <div class="w-64" style="height: 30rem;">
            //             <canvas id="canvas3d_modal_1" class=""></canvas>
            //         </div>
            //         <a href="https://wilcopilot.fr">Lien du site</a>
            //     `,

            //     canvas3d :"https://prod.spline.design/UqIN7g4yFUdzgKV0/scene.splinecode"
            // },
            // {
            //     index: 2,
            //     title: 'WILCO Pilote',
            //     content: `
            //     <p>This is the content for WILCO Pilote.</p>
            //     <p>You can add any text, links, images, and formatting here.</p>
            //     <img src="/images/left-hand.png"" alt="Image">
                
            //     <a href="https://example.com">Link to Example</a>
            //     `,
            // },
            // Add more objects for other cards with unique content
        ],
        };
    },
    mounted() {
        this.parallaxElement('#works', '#works .left-hand', 300, 0, 'power1.in');
        this.parallaxElement('#works', '#works .right-hand', -400, 0, 'power1.in');
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
        openModal(index) {
            this.$refs[`modal_${index}`].showModal();
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