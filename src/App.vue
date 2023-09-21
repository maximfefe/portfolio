<template>
  <!-- <LoadingPage/> -->
  <header class="flex justify-center mt-5 mx-5">
    <div class="w-11/12 m-auto navbar shadow fixed z-50 rounded-box border border-2 border-secondary backdrop-blur-sm text-base-100 p-0">
      <div class="flex-1">
        <RouterLink class="btn btn-ghost font-title uppercase bg-gradient-to-tl from-white via-secondary to-white bg-clip-text text-transparent" to="/">Maxim<br> Fedelique</RouterLink>
      </div>
      <div class="flex-none">
        <ul class="hidden sm:contents menu menu-horizontal p-0">
          <li><a href="#about">A Propos</a></li>
          <li><a href="#works">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="inline-block sm:hidden dropdown dropdown-end z-50">
        <label tabindex="0" class="btn btn-ghost m-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg></label>
          <ul tabindex="0" class="dropdown-content menu mt-5 shadow rounded-box  border border-2 border-secondary bg-neutral text-base-100 p-2 w-60">
            <li><a href="#about">A Propos</a></li>
            <li><a href="#works">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
      </div>
    </div>
  </header>

  <RouterView />
</template>
<script>
  import LoadingPage from '@/components/LoadingPage.vue'
  export default {
    components:{
      LoadingPage
    },
  };
</script>
<style scoped>
.navbar{
  background-color: rgba(26, 27, 28, 0.3);
}
/* .dropdown-content{
  background-color: rgba(26, 27, 28, 0.3);
} */

</style>
<style lang="scss">
// @import "@/assets/sass/sass.scss";
</style>
