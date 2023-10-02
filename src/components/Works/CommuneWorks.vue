<template>
    <div>
        <h3 class="text-primary text-3xl font-bold">Évolution des communes</h3>
        <div class="flex flex-wrap gap-x-3 items-center mt-5">
            <p class="w-full lg:w-7/12">Le projet "Évolution des communes" du Sandre permet aux utilisateurs de visualiser les changements des communes à l'aide d'une carte interactive. La carte affiche les fusions, les dissociations, les changements géographiques et les modifications des données des communes. Grâce à cette fonctionnalité, les utilisateurs peuvent observer facilement les variations et les transformations des communes au fil du temps.</p>
            <img class="m-auto h-60 w-54 mt-5" src="/images/commune.png" />
        </div>
        <p class="mt-5">Pour ce qui est du choix de la technologie, j'ai décidé de développer ce projet en utilisant Laravel et Openlayers, qui sont des frameworks puissants et reconnus. En ce qui concerne les données, j'ai utilisé les données du Sandre et de l'Insee, afin de garantir la conformité et la précision des données utilisées. Cette approche nous permettra d'avoir des informations fiables et à jour, ce qui est essentiel pour assurer le bon fonctionnement de l'application.</p>
        <div class="flex flex-wrap gap-x-10 mt-5">
            <a class="link link-accent" href="https://sandre.eaufrance.fr/commune" target="_blank">Voir le site</a>
        </div>
    </div>
</template>