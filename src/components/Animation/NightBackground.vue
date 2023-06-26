<template>
  <div class="content-star">
    <div id="star"></div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { gsap } from "gsap"

export default {
  mounted() {
   this.initThree();
   this.parallaxElement('.content-star', '#star', 10, 0, 'power1.out');
  },
  methods: {
    initThree(){
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true }); // Ajoutez { alpha: true } pour activer la transparence
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // Définissez la couleur d'arrière-plan et l'opacité (0 pour transparent)
      document.getElementById('star').appendChild(renderer.domElement);

      const starParticles = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({
        size: 3,
        // color: 0x888888,
        transparent: true, // Activez la transparence du matériau
        opacity: 1, // Définissez l'opacité du matériau (entre 0 et 1)
        map: new THREE.TextureLoader().load('/images/star.png') // Utilisez la texture personnalisée
      });

      const particleCount = 200;
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] = Math.random() * 200 - 100;
        positions[i + 1] = Math.random() * 200 - 100;
        positions[i + 2] = Math.random() * 200 - 100;
      }

      starParticles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const star = new THREE.Points(starParticles, starMaterial);
      scene.add(star);

      function animateSmoke() {
        requestAnimationFrame(animateSmoke);

        star.rotation.x += 0.001;
        star.rotation.y += 0.001;

        renderer.render(scene, camera);
      }

      animateSmoke();
    },
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
};
</script>

<style scoped>
#star {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
