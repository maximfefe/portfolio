<template>
  <div id="smoke"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  mounted() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Ajoutez { alpha: true } pour activer la transparence
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Définissez la couleur d'arrière-plan et l'opacité (0 pour transparent)
    document.getElementById('smoke').appendChild(renderer.domElement);

    const smokeParticles = new THREE.BufferGeometry();
    const smokeMaterial = new THREE.PointsMaterial({
      size: 0.5,
      color: 0x888888,
      transparent: true, // Activez la transparence du matériau
      opacity: 0.5 // Définissez l'opacité du matériau (entre 0 et 1)
    });

    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = Math.random() * 200 - 100;
      positions[i + 1] = Math.random() * 200 - 100;
      positions[i + 2] = Math.random() * 200 - 100;
    }

    smokeParticles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const smoke = new THREE.Points(smokeParticles, smokeMaterial);
    scene.add(smoke);

    function animateSmoke() {
      requestAnimationFrame(animateSmoke);

      smoke.rotation.x += 0.001;
      smoke.rotation.y += 0.001;

      renderer.render(scene, camera);
    }

    animateSmoke();
  }
};
</script>

<style scoped>
#smoke {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
