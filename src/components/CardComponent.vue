<template>

    <router-link :to="`/projects/${project.id}`">
        <div class="card" :style="cssVars">
            <img :src="iconSrc" v-if="iconSrc != ''">
            <div class="content">
                <h1>{{ project.name }}</h1>
                <div class="container">
                    <TagComponent v-for="tag in project.tags" :key="tag" :tagId="tag"/>
                </div>
                <p>{{ project.description }}</p>
            </div>
        </div>
    </router-link>

</template>

<script lang="ts">

    import { defineComponent } from 'vue';
    import TagComponent from './TagComponent.vue';

    export default defineComponent({
        props: {
            project: {
                required: true,
                type: Object
            }
        },

        components: {
            TagComponent
        },

        setup(props) {

            const cssVars = {
                "--pColour": props.project.colour  
            }

            let iconSrc: string

            if('icon' in props.project){
                iconSrc = new URL(`../assets/img/projects/${props.project.id}/${props.project.icon}`, import.meta.url).href
            } else{
                iconSrc = ''
            }

            if(iconSrc.includes('undefined')) iconSrc = ''


            return {
                cssVars,
                iconSrc
            }
        }
    })
</script>

<style scoped>
	.card {
		display: flex;
		padding: 0 0.1em;
		border: 1px solid black;
		box-shadow: 0 0 10px rgb(var(--pColour));
		border-radius: 20px;
		min-height: 175px;
        max-height: 175px;
	}
	.card:hover {
		box-shadow: 0 0 15px rgb(var(--pColour));
	}
	.card > img {
		margin: auto clamp(0.2em, calc(0.2em + 2vw), 0.5em) auto calc(0.1em + 1vw);
		width: clamp(70px, 5vw, 8em);
		height: auto;
		border-radius: 40%;
		border: 4px solid rgb(var(--pColour));
	}
    h1 {
		font-size: clamp(1.5em, 5vw, 1.8em);
	}
    .content {
		flex: 1;
		width: 67.5vw;
	}
    .ellipses {
		color: rgba(0, 0, 0, 0);
		margin-top: auto;
	}
	.icons {
		overflow: hidden;
		white-space: nowrap;
	}

	.icons > img {
		display: inline-block;
		height: calc(2vw + 1.2em);
		max-height: 2.5em;
		width: auto;
		margin: 5px;
	}
    .container {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }
    @media only screen and (max-width: 450px) {
        p {
            overflow: auto;
            max-height: 2rem;
            font-size: 16px;
        }
        .container {
            overflow: auto;
            gap: 1px;
            max-height: 1.5rem;
        }
    }
</style>