<template>
    <div class="section">
        <div class="content">
            <h1>{{ section.name }}</h1>
            <div class="grid">
                <div v-for="item in section.content" :key="item.id" class="list">
                    <h2>{{ item.title }}</h2>
                    <h3>{{ item.location }}</h3>
                    <p>{{ item.startdate }} - {{ item.enddate }}</p>
                    <div class="tags">
                        <TagComponent v-for="tag in item.tags" :key="tag" :tagId="tag" />
                    </div>
                    <ul>
                        <li v-for="detail in item.details" :key="detail" v-html="detail"></li>
                    </ul>
                </div>
            </div>
            <hr class="rounded"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import TagComponent from './TagComponent.vue';

    export default defineComponent({
        props: {
            section: {
                required: true,
                type: Object
            }
        },
        components: {
            TagComponent
        }
    })
</script>

<style scoped>
    hr.rounded {
        border-top: 8px solid;
        border-radius: 5px;
        color: var(--foreground);
    }

    .grid {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        padding: 0 1rem;
        padding: clamp(0px, 0.1vw, 5px);
    }

    .grid h2 {
        font-size: 20px;
    }
    .grid h3 {
        font-size: 15px;
    }

    .list {
        flex: 1 1;
		max-width: 700px;
		text-align-last: left;
        margin-left: 2em;
        border: 1px solid black;
		box-shadow: 0 0 10px #ffffff;
        border-radius: 20px;
    }

    .tags {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }

</style>