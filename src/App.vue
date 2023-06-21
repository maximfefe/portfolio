<script>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header class="flex justify-center mt-5 mx-5">
    <div class="w-11/12 m-auto navbar shadow fixed z-50 rounded-box bg-none border border-2 border-secondary backdrop-blur-sm text-base-100 p-0">
      <div class="flex-1">
        <RouterLink class="btn btn-ghost font-title uppercase text-xl" to="/">Maxim<br> Fedelique</RouterLink>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li><a href="#about">A Propos</a></li>
          <li><a href="#works">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
