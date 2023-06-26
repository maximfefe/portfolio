<template>
    <div class="card cursor-pointer backdrop-blur-sm w-fit items-center p-2">
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
        <figure class="indicator">
            <span v-if="isNew" class="indicator-item indicator-bottom indicator-center badge badge-accent bottom-6">new</span>
            <img class="mask mask-hexagon h-60" src="/public/images/crane-vangogh.png" height="100"/>
        </figure>
    </div>
</template>

<script>
export default {
    props:['languages', 'title', 'isNew']
}
</script>