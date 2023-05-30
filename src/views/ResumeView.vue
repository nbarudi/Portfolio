<template>

    <div class="about">
        <h1>Hi! Here is my Resume!</h1>
        <h2>This contains some details about my work & school experience</h2>
        <img alt="Headshot" src="@/assets/img/headshot.png" />
        <hr class="rounded">
        <WhoAmI/>
        <hr class="rounded">
        <div class="body">
            <ResumeComponent v-for="section in resume" :key="section.id" :section="section" />
        </div>
    </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import resume from '@/assets/resume.json'
    import ResumeComponent from '@/components/ResumeComponent.vue'
    import WhoAmI from '@/components/WhoAmI.vue';

    export default defineComponent({
        components:{
            ResumeComponent,
            WhoAmI
        },
        setup(){
            return {resume}
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