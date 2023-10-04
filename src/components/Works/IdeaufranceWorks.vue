<template>
    <div>
        <h3 class="text-primary text-3xl font-bold">id.eaufrance.fr</h3>
        <p class="w-full mt-5">Le projet id.eaufrance est un outil essentiel pour la gestion et l'exploitation des ressources environnementales du Sandre, offrant à la fois des fonctionnalités pratiques et une interface conviviale basée sur le web sémantique. Il permet d'identifier toutes les collections de ressources de l'environnement contenues par le Sandre. Grâce à un résolveur d'URI intégré, ce service fournit l'URL correspondante à chaque ressource, ce qui facilite l'accès et la consultation. De plus, il propose une fonctionnalité de visualisation des URI sous forme de graph en utilisant les principes du web sémantique.</p>
        <img class="m-auto h-80 mt-5" src="/images/ideaufrance.png" />
        <p class="mt-5">Pour ce qui est du choix de la technologie, nous avons utilisé Django en raison de sa rapidité et de sa praticité dans l'utilisation du web sémantique. Pour le résolveur, nous avons utilisé différents modules afin d'optimiser notre recherche et d'obtenir des résultats précis. Nous avons intégré Solr pour une recherche simplifiée et avons également utilisé plusieurs API du Sandre pour accéder à des données spécifiques. De plus, nous avons utilisé la librairie BeautifulSoup pour le scrapping de pages du Sandre.</p>
        <div class="flex flex-wrap gap-x-10 mt-5">
            <a class="link link-accent" href="https://id.eaufrance.fr" target="_blank">Voir le site</a>
        </div>
    </div>
</template>