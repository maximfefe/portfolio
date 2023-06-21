<template>
  <canvas id="smokeCanvas"></canvas>
  </template>
  
  <script>
import paper from "paper";

export default {
  mounted() {
    // Création du projet Paper.js lié au canvas
    const canvas = document.getElementById("smokeCanvas");
    paper.setup(canvas);

    // Création de la fumée de cigarette
    const smokeGroup = new paper.Group();

    function createSmoke() {
      const smoke = new paper.Path.Circle({
        center: paper.view.center,
        radius: Math.random() *  5,
        fillColor: "white"
      });

      smoke.opacity = 0.3;

      smokeGroup.addChild(smoke);
    }

    // Animation de la fumée de cigarette
    function animateSmoke() {
      smokeGroup.children.forEach(smoke => {
        if (smoke.position.y < -smoke.bounds.height) {
            smoke.position.y = paper.view.size.height;
            //   smoke.position.y =  + smoke.bounds.height;
            console.log(paper.view.size.height);
            console.log(smoke.position.y);
            smoke.scaling = new paper.Point(1, 1); // Réinitialisation de la taille du cercle
        }
    
        smoke.position.y -= Math.random() * 2 - 10;
        smoke.position.x += Math.random() * 2 - 1;
        smoke.scale(1.001); // Ajustez ce facteur de croissance selon vos préférences
      });

      paper.view.requestUpdate();
    }

    // Création et animation de la fumée de cigarette
    for (let i = 0; i < 100; i++) {
      createSmoke();
    }

    paper.view.onFrame = animateSmoke;
  }
};

  </script>
  