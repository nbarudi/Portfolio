<template>
    <div v-if="show" class="modal-overlay" @click.self="close">
      <div class="modal">
        <h2>Welcome!</h2>
        <h3>I see you're coming from {{ companyName }}!</h3>
        <p>
          I'm happy you're taking a look at my Portfolio! <br/>I have automatically applied the following filters while you take a look at my projects:
        </p>
        <TagComponent v-for="tag in tags" :key="tag" :tagId="tag" />
        <p>If you have any questions don't hesitate to contact me:</p>
        <p>
            Email: nbarudi@outlook.com <br/>
            Discord: nbarudi
        </p>

        <button class="close-button" @click="close">Close</button>
      </div>
    </div>
  </template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import TagComponent from '@/components/TagComponent.vue';

    export default defineComponent({
        props: {
            tags: {
                type: Array,
                required: true,
            },
            show: {
                type: Boolean,
                required: true,
            },
        },

        components: {
            TagComponent
        },

        methods: {
            close() {
                this.$emit('close');
            },
        },

        setup() {
            const companyName = localStorage.getItem('companyName')
            return { companyName }
        }
})
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.842);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: rgba(22, 22, 22, 0.993);
    padding: 20px;
    border-radius: 5px;
    max-width: 500px;
    width: 100%;
    text-align: center;
    border: 1px solid black;
    box-shadow: 0 0 10px rgb(255,255,255);
    border-radius: 20px;
}

.close-button {
    margin-top: 20px;
    border: 1px solid black;
    box-shadow: 0 0 10px rgb(0, 221, 48);
    border-radius: 20px;
    font-size: 18px;
    background-color: #000000;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}

.close-button:hover {
    background-color: #267e4b;
    transform: scale(1.05);
}

</style>