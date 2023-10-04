<template>
    <section id="works" data-bgcolor="#F6D9AA" data-textcolor='#112F3F'>
        <div class="absolute flex">
            <img class="relative top-0 w-1/2 left-hand" src="/images/left-hand.png" alt="Main gauche de l'oeuvre Creation of Adam by God, Michelangelo">
            <img class="w-1/2 invisible" src="/images/right-hand.png" alt="Main droite de l'oeuvre Creation of Adam by God, Michelangelo">
        </div>
        <div class="content w-11/12 m-auto relative z-10 mb-20">
            <h2 class="ml-auto text-center mt-40 font-title uppercase text-2xl md:text-5xl lg:text-7xl">Projets</h2>
            <div class="mt-20 grid gap-4 gap-y-20 md:grid-cols-3 justify-items-center">
                <CardWorks class="reveal-left" onclick="modal_wilco.showModal()"  :isNew="true" :languages="['Django','Nuxt']" :title="'WILCO Pilote'" image="wilco-logo.png"/>  
                <CardWorks2 class="reveal-bottom" onclick="modal_commune.showModal()"   :isNew="false" :languages="['Laravel']" :title="'Évolution des communes'" image="commune.png"/>  
                <CardWorks class="reveal-right" onclick="modal_kitui.showModal()"  :isNew="true" :languages="['Express','Vuejs']" :title="'KitUI'" image="kitui-logo.png"/>  

                <CardWorks class="reveal-left" onclick="modal_ideaufrance.showModal()" :isNew="false" :languages="['Django']" :title="'ID Eaufrance'" image="ideaufrance-logo.png"/>  
                <CardWorks2 class="reveal-bottom" onclick="modal_parseur.showModal()" :isNew="true" :languages="['Vuejs', 'Flask']" :title="'Parseur Géographique'" image="sandre-logo.png"/>  
                <CardWorks class="reveal-right" onclick="modal_citepa.showModal()" :isNew="false" :languages="['Laravel']" :title="'Citepa'" image="citepa-logo.png"/>  
                
            </div>

            <ModalWorks modalId="modal_wilco">
                <WilcoWorks />
            </ModalWorks>
            <ModalWorks modalId="modal_commune" >
                <CommuneWorks />
            </ModalWorks>
            <ModalWorks modalId="modal_kitui" >
                <KitUIWorks />
            </ModalWorks>
            <ModalWorks modalId="modal_ideaufrance" >
                <IdeaufranceWorks />
            </ModalWorks>
            <ModalWorks modalId="modal_parseur" >
                <ParseurWorks />
            </ModalWorks>
            <ModalWorks modalId="modal_citepa" >
                <CitepaWorks />
            </ModalWorks>

            <!-- <ModalWorks
                v-for="project in projects"
                :key="project.index"
                :modalId="`modal_${project.index}`"
                :title="project.title"
                :content="project.content"
                :canvas3d="project.canvas3d"
                ref="modal"
            /> -->
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
import WilcoWorks from '@/components/Works/WilcoWorks.vue';
import CommuneWorks from '@/components/Works/CommuneWorks.vue';
import KitUIWorks from '@/components/Works/KitUIWorks.vue';
import IdeaufranceWorks from '@/components/Works/IdeaufranceWorks.vue';
import ParseurWorks from '@/components/Works/ParseurWorks.vue';
import CitepaWorks from '@/components/Works/CitepaWorks.vue';
import CardWorks from '@/components/Works/CardWorks.vue';
import CardWorks2 from '@/components/Works/CardWorks2.vue';
import { parallaxGsap } from "@/utils/ParallaxGsap.js";
import ScrollReveal from 'scrollreveal';

export default {
    components:{
        CardWorks,
        CardWorks2,
        ModalWorks,
        WilcoWorks,
        CommuneWorks,
        KitUIWorks,
        IdeaufranceWorks,
        ParseurWorks,
        CitepaWorks
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
        
        const sr = ScrollReveal();

        sr.reveal('.reveal-left', {
            reset: true, 
            origin: 'left', 
            distance: '100px',
            interval: 200,
            duration: 2000,
        });
        sr.reveal('.reveal-bottom', {
            reset: true, 
            origin: 'bottom', 
            distance: '100px',
            interval: 500,
            delay: 250,
            duration: 2000,
        });
        sr.reveal('.reveal-right', {
            reset: true, 
            origin: 'right', 
            distance: '100px',
            delay: 500,
            interval: 500,
            duration: 2000,
        });
        parallaxGsap('#works', '#works .left-hand', 0, 200, 'power1.in');
        parallaxGsap('#works', '#works .right-hand', -50, -300, 'power1.in');
    },
    methods: {
        openModal(index) {
            this.$refs[`modal_${index}`].showModal();
        },
        async fetchNotionData() {
            const url = 'https://api.notion.com/v1/databases/6814083ccb2d488689b200fe04fb645b/query';
            const accessToken = import.meta.env.VITE_API_NOTION;
            console.log(accessToken);

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Notion-Version': `2022-06-28`,
                        'Content-Type': 'application/json', // Spécifiez le type de contenu JSON si vous envoyez des données
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    this.notionData = data;
                    console.log(this.notionData);

                } else {
                    console.error('Erreur lors de la récupération des données Notion');
                }
            } catch (error) {
                console.error('Erreur de réseau', error);
            }
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