<template>

    <div class="about">
        <h1>Hi there! I'm Nick!</h1>
        <img alt="Headshot" src="@/assets/img/headshot.png" />
        <hr class="rounded">
        <div class="body">
            <AboutComponent v-for="sec in about.filter((p) => p.id)" :key="sec.id" :section="sec" />
        </div>
    </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import about from "@/assets/about.json";
    import AboutComponent from '@/components/AboutComponent.vue';

    export default defineComponent({

        components: {
            AboutComponent
        },
        setup() {
            return {about}
        }

    })
</script>

<style scoped>

    img {
        height: 15em;
        border-radius: 20%;
    }

    hr.rounded {
        border-top: 8px solid;
        border-radius: 5px;
        color: var(--foreground);
    }

</style>