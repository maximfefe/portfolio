<template>
    <div>
        <h3 class="text-primary text-3xl font-bold">Wilco Pilote</h3>
        <div class="flex flex-wrap gap-x-10 items-center mt-5">
            <p class="w-full lg:w-4/6">Le projet Wilco Pilote est un site web de services pour aider les télépilotes de drones à trouver facilement et en toute sécurité les meilleurs endroits pour utiliser leur drone. Le site web contient une carte interactive qui prend en compte des facteurs tels que les autorisations de vol, la météo, le vent et le type de terrain.</p>
            <img class="m-auto h-60 w-60 mt-5" src="/images/wilco.png" />
        </div>
        <p class="mt-5">Pour ce qui est des choix technologiques, j'ai opté pour l'open source et le déploiement sur un serveur virtuel.</p>
        <div class="flex flex-wrap gap-x-5 items-center mt-5">
            <video controls width="400" class="m-auto">
                <source src="/video/wilco.mp4" type="video/mp4" />
            </video>
            <p class="w-full mt-5 lg:w-3/6">En ce qui concerne les technologies utilisées, j'ai choisi Django pour la gestion de la base de données et de l'API. J'ai également utilisé Postgres avec l’extension PostGIS pour les fonctionnalités géospatiales. Pour l'outil de développement, j'ai utilisé GitHub avec la mise en place d'un CI/CD grâce à GitHub Actions. J'ai également utilisé Mapserver et Mapcache pour la génération d'images cartographiques. Du côté du développement front-end, j'ai utilisé Nuxt.js. </p>
        </div>
        <div class="flex flex-wrap gap-x-10 mt-5">
            <a class="link link-accent" href="https://wilcopilote.fr/" target="_blank">Voir le site</a>
        </div>
    </div>
</template>