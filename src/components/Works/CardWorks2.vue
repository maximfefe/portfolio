<template>
    <atropos-component class="backdrop-blur-sm card">
        <div data-atropos-offset="0" class="card cursor-pointer hover:bg-secondary w-64 items-center p-2">
            <div data-atropos-offset="2" class="card-body p-0">
                <h3 data-atropos-offset="4" class="card-title justify-center text-center">
                    {{ title }}
                </h3>
                <div data-atropos-offset="6" class="card-actions justify-center ">
                    <div v-for="(language,index) in languages" :key="index" class="badge badge-outline">
                        {{ language }}
                    </div>
                </div>
            </div>
            <figure data-atropos-offset="7" class="indicator">
                <span v-if="isNew" class="indicator-item indicator-bottom indicator-center badge badge-accent bottom-6">new</span>
                <img data-atropos-offset="3" class="mask mask-hexagon h-60" :src="'/images/'+image" height="100"/>
            </figure>
        </div>
    </atropos-component>
</template>

<script>
export default {
    props:['languages', 'title', 'isNew', 'image']
}
</script>