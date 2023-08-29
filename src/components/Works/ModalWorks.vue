<template>
    <dialog :id="modalId" class="modal">
        <form method="dialog" class="modal-box bg-secondary md:max-w-4xl">
            <h3 class="text-lg font-bold">Hello!</h3>
            <div v-html="content"></div>
            <div class="modal-action absolute top-0 right-6">
                <button @click="closeModal" class="btn bg-primary text-secondary btn-xs">X</button>
            </div>
        </form>
    </dialog>
  </template>
  
<script>
    import { Application } from '@splinetool/runtime';
    export default {

        props: {
            modalId: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            content: {
                type: String,
                required: true,
            },
            canvas3d: {
                type: String,
                required: false,
            },
        },
        methods: {
        closeModal() {
            this.$refs.modal.close();
        },
        showModal() {
            this.$refs.modal.showModal();
        },
        },
        mounted() {
            const canvas = document.getElementById('canvas3d_'+this.modalId);
            console.log(this.modalId);
            console.log('canvas3d_'+this.modalId);
            if (canvas !== null) {
                const spline = new Application(canvas);
                spline.load(this.canvas3d);
                canvas.style.height = "26rem"
            }
        },
    };
  </script>
  
<style scoped>
canvas{
    height: 26rem!important;
}
</style>