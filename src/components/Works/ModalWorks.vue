<template>
    <dialog :id="modalId" class="modal">
        <form method="dialog" class="modal-box bg-secondary md:max-w-4xl">
            <slot name="default"></slot>
            <div class="modal-action fixed top-0 right-6">
                <button class="btn bg-primary text-secondary btn-xs">X</button>
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
        },
        methods: {
        },
        mounted() {
          
        },
    };
  </script>