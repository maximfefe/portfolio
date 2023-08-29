<template>
    <div class="card cursor-pointer backdrop-blur-sm w-64 items-center p-2">
        <figure class="indicator">
            <span v-if="isNew" class="indicator-item indicator-bottom indicator-center badge badge-accent top-0">new</span>
            <img class="mask mask-hexagon h-60 " :src="'/public/images/'+image" height="100" alt="error image"/>
        </figure>
        <div class="card-body p-0">
            <h3 class="card-title justify-center">
                {{ title }}
            </h3>
            <div class="card-actions justify-center ">
                <div v-for="(language,index) in languages" :key="index" class="badge badge-outline">
                    {{ language }}
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['languages', 'title', 'isNew', 'image']
}
</script>