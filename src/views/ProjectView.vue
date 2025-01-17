<template>
    <div class="project" :style="cssVars">
        <h1>{{ project?.name }}</h1>
        <div class="container">
            <TagComponent v-for="tag in project?.tags" :key="tag" :tagObject="{name: tag}"/>
        </div>
        <p>{{ project?.description }}</p>
        <div class="zoneA">
            <CarouselComponent v-if="project?.images && project.images.length > 0" :project="project" class="images" />
            <div class="list">
                <h2>Technology Used</h2>
                <ul>
                    <li v-for="tech in project?.tech" :key="tech.name">
                        <a v-if="tech.url" :href="tech.url" target="_blank">{{ tech.name }}</a>
                        <a v-else>{{ tech.name }}</a>
                        <p v-html="tech.usage"></p>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="project?.description_long" class="desc">
            <h2>Description</h2>
            <p v-html="project.description_long"></p>
        </div>
    </div>
</template>


<script lang="ts">
    import { defineComponent } from 'vue';
    import { useRoute } from 'vue-router';
    import projects from '@/assets/projects.json'
    import TagComponent from '@/components/TagComponent.vue';
    import CarouselComponent from '@/components/CarouselComponent.vue';

    export default defineComponent({
        components: {
            TagComponent,
            CarouselComponent
        },

        setup(){
            const route = useRoute()

            const project = projects.find((p) => p.id == route.params.project)

            if(project){
                project.tech?.forEach((t) =>{
                    t.usage = t.usage.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
                })
                if(project.description_long){
                    project.description_long = project.description_long.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
                }
            }

            const cssVars = {
                "--pColour": project?.colour
            }

            console.log(cssVars)

            return {
                project,
                cssVars
            }
        }

    })
</script>

<style>
    @media only screen and (max-width: 900px) {
		.zoneA {
			flex-direction: column-reverse;
			align-items: center;
		}
	}
    .container {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }

    .project a[href] {
        color: rgb(var(--pColour));
    }

    li > a {
        font-size: 1.1em;
        font-weight: bold;
    }

    li > p {
        margin-top: 0;
    }
    .list {
		flex: 1 1;
		max-width: 700px;
		text-align-last: left;
        margin-left: 2em;
	}

    .zoneA {
        justify-content: center;
        align-items: center;
        display: flex;
        margin-left: 1em;
    }

    h2 + p {
		font-size: 1.1em;
		max-width: 1000px;
		margin: 0 auto;
	}
</style>