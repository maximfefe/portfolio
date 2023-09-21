<template>
    <div class="w-96 h-52 " @click="flipCard">
        <div class="flip-card cursor-pointer shadow relative w-full h-full duration-700 transform-3d">
            <div class="card card-side absolute w-full h-full backface-hidden bg-primary">
                <figure><img class="ms-5 mask mask-hexagon-2 w-32" src="/public/images/crane-vangogh.png" alt="Movie"/></figure>
                <div class="card-body text-sm">
                    <h3 class="font-title uppercase text-lg w-fit">Maxim FEDELIQUE</h3>
                    <span>Né le 14/09/1999</span>
                    <span>Originaire du Périgord</span>
                </div>
            </div>
            <div class="card absolute w-full h-full backface-hidden rotate-y-180 bg-primary">
                <div class="card-body text-sm">
                    <h3 class="font-title uppercase text-lg w-fit ml-auto">Mes diplômes</h3>
                    <span>Mastère Tech Lead - Bordeaux</span>
                    <span>Licence en informatique - Brive</span>
                    <span>BTS SIO - Limoges</span>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    methods:{
        flipCard(){
            const flipCardInner = this.$el.querySelector('.flip-card');
            if (flipCardInner.classList.contains('rotate-y-180')) {
                flipCardInner.classList.remove('rotate-y-180');
            } else {
                flipCardInner.classList.add('rotate-y-180');
            }
        }
    }

}
</script>

<style>
.transform-3d {
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.rotate-y-180{
  transform: rotateY(180deg);
}

/* Position the front and back side */
.backface-hidden {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

</style>