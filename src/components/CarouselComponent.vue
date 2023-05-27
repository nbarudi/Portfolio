<template>

    <div>

        <div class="container">
            <div v-for="(image, index) in project.images" :key="image.name" :style="[slide == index ? 'display: block' : 'display: none']" class="slides fade">
                <div class="numText">{{ index + 1 }} / {{ project.images.length }}</div>
                <img :src="getImage(project.id, image.file)" style="width:100%"/>
                <div class="text">{{ image.caption }}</div>
            </div>

            <a class="arrow prev" @click="prev">&#10094;</a>
            <a class="arrow next" @click="next">&#10095;</a>
        </div>
        <br />

        <div style="text-align:center">
			<span
				v-for="(image, index) in project.images"
				:key="image.name"
				@click="slide = index"
				class="dot"
				:class="slide == index ? 'active' : ''"
			></span>
		</div>
    </div>

</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';

    export default defineComponent({
        props: {
            project: {
                required: true,
                type: Object
            }
        },

        setup(props) {
            const slide = ref(0)

            function next() {
                slide.value++
                if(slide.value >= props.project.images.length) slide.value = 0
            }

            function prev() {
                slide.value--
                if(slide.value < 0) slide.value = props.project.images.length-1
            }

            function getImage(projectId: string, file: string){
                return new URL(`../assets/img/projects/${projectId}/${file}`, import.meta.url).href
            }

            return {
                slide,
                next,
                prev,
                getImage
            }
        }
    })
</script>

<style scoped>
    * {
		box-sizing: border-box;
		--gradient: rgba(var(--background), 0.75) 0%, rgba(var(--background), 1) 100%;
	}
	.container {
		position: relative;
	}

	img {
		height: auto;
		width: auto;
		max-width: 500px;
		max-height: 500px;
		min-width: 250px;
		min-height: 250px;
	}

	.arrow {
		cursor: pointer;
		position: absolute;
		top: 50%;
		width: auto;
		margin-top: -22px;
		padding: 16px;
		color: rgb(var(--foreground));
		font-weight: bold;
		font-size: 18px;
		transition: 0.2s ease;
		user-select: none;
	}

	.prev {
		left: 0;
	}

	.next {
		right: 0;
	}

	.prev:hover {
		background: linear-gradient(270deg, var(--gradient));
	}

	.next:hover {
		background: linear-gradient(90deg, var(--gradient));
	}

	.text {
		color: rgb(var(--foreground));
		background: linear-gradient(180deg, var(--gradient));
		font-size: 1.2em;
		padding: 0.3em;
		position: absolute;
		width: 100%;
		bottom: 0;
		text-align: center;
	}

	/* Number text (1/3 etc) */
	.numText {
		color: var(--foreground);
		background-color: rgba(var(--background), 0.75);
		font-size: 1em;
		padding: 0.25em 0.5em;
		margin: 0.25em 0.5em;
		border-radius: 0.5em;
		position: absolute;
		top: 0;
	}

	/* The dots/bullets/indicators */
	.dot {
		cursor: pointer;
		height: 15px;
		width: 15px;
		margin: 0 2px;
		background-color: rgb(var(--foreground));
		border-radius: 50%;
		display: inline-block;
		transition: background-color 0.2s ease;
	}

	.active,
	.dot:hover {
		background-color: rgb(var(--pColour));
	}
	.dot:hover {
		opacity: 0.8;
	}

	.fade {
		animation-name: fade;
		animation-duration: 0.5s;
	}

	@keyframes fade {
		from {
			opacity: 0.4;
		}
		to {
			opacity: 1;
		}
	}

</style>