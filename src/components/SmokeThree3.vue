<template>
  <div class="smoke" ref="canvasContainer" style=""></div>
</template>

<script>
import * as THREE from 'three';

export default {
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      // Initialisation du rendu WebGL
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // Définissez la couleur d'arrière-plan et l'opacité (0 pour transparent)
      this.$refs.canvasContainer.appendChild(renderer.domElement);

      // Initialisation de la scène
      const scene = new THREE.Scene();

      // Initialisation de la caméra
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Chargement de la texture de fumée
      const smokeTextureLoader = new THREE.TextureLoader();
      const smokeTexture = smokeTextureLoader.load('/public/images/smoke.png');

      // Configuration des particules de fumée
      const smokeParticles = new THREE.Group();
      for (let i = 0; i < 50; i++) {
        const smokeMaterial = new THREE.SpriteMaterial({
          map: smokeTexture,
          color: 0xaaaaaa,
          transparent: true,
          blending: THREE.AdditiveBlending
        });

        const smokeParticle = new THREE.Sprite(smokeMaterial);
        smokeParticle.position.set(
          Math.random() * 10 - 5, // Position x aléatoire
          Math.random() * 10 - 5, // Position y aléatoire
          Math.random() * 10 - 5  // Position z aléatoire
        );

        const scale = Math.random();
        smokeParticle.scale.set(scale, scale, scale);

        smokeParticles.add(smokeParticle);
      }

      scene.add(smokeParticles);

      // Animation de la fumée
      function animateSmoke() {
        requestAnimationFrame(animateSmoke);

        smokeParticles.children.forEach(smokeParticle => {
          smokeParticle.position.x += 0.01; // Déplacement horizontal
          smokeParticle.position.y += 0.02; // Déplacement vertical

          // Réinitialisation de la position une fois que la fumée sort de l'écran
          if (smokeParticle.position.y > 5) {
            smokeParticle.position.set(
              Math.random() * 10 - 5, // Nouvelle position x aléatoire
              -5,                     // Nouvelle position y
              Math.random() * 10 - 5  // Nouvelle position z aléatoire
            );
          }
        });

        renderer.render(scene, camera);
      }

      animateSmoke();
    }
  }
};
</script>

<style scoped>
canvas {
  /* width: 100%; */
  height: 50%;
  width: 30%;
  margin-left: auto;
  display: block;
}
.smoke{
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
}
</style>
