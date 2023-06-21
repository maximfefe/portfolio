<template>
    <section id="tech" data-bgcolor="#112F3F" data-textcolor='#F6D9AA'>
        <h2 class="mt-40 font-title uppercase text-2xl md:text-4xl lg:text-5xl">Technologie</h2>
        <div class="content flex">
            <h3 v-for="(tech, index) in technologies" :key="index" :class="`uppercase font-title text-1xl md:text-3xl lg:text-4xl ${index%2==0? 'text-stroke': ''}`">
                {{tech}}
            </h3>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            technologies: ['Flask', 'Tailwind', 'Nuxt', 'Django', 'Bootstrap', 'Vuejs', 'Typescript', 'Laravel']
        }
    },
}
</script>

<style scoped>
.text-stroke{
    -webkit-text-fill-color: transparent; /* Rendre la couleur du texte transparente */
    -webkit-text-stroke: 1px hsl(var(--s));
}
@media (min-width:768px) {
    text-stroke{
        -webkit-text-stroke: 2px hsl(var(--s));
    }

}
</style>