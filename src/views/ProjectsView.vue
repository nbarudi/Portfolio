<template>

    <p>
        This is a bunch of different projects that I have worked on over time. <br/>
        It consists of Class Work, Job Experience, and different Personal Projects that I have worked on <br />
        If I am happy about a project that I have worked on then this is where it usually ends up!
    </p>

    <div class="container">
        <CardComponent v-for="project in projects.filter((p) => p.id)" :key="project.id" :project="project"/>
    </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import CardComponent from '@/components/CardComponent.vue';

    import projects from '@/assets/projects.json'

    export default defineComponent({
        components: {
            CardComponent
        },

        setup() {
            return { projects }
        }
    })
</script>


<style scoped>

    p {
        font-size: 20px;
    }

    .container {
		padding: 0 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
		grid-gap: 1rem;
		padding: clamp(0px, 0.1vw, 5px);
    }
</style>