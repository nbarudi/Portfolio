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
                        <TagComponent v-for="tag in item.formatted" :key="tag" :tagObject="tag" />
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
        },
        setup({section}) {

            for(let item of section.content){

                let formattedTags = []

                for(var tag of item.tags) {
                    let splitData = tag.split(" ")
                    if(splitData.length > 1){
                        formattedTags.push({
                            name: splitData[0],
                            perc: splitData[1]
                        })
                    }
                    else {
                        formattedTags.push({
                            name: splitData[0]
                        })
                    }
                }

                formattedTags.sort((a, b) => {
                    if(a.perc && !b.perc) return -1
                    else if(!a.perc && b.perc) return 1
                    else if(!a.perc && !b.perc) return 0

                    if(a.perc > b.perc) return -1
                    else if(a.perc == b.perc) return 0
                    else return 1
                })

                item.formatted = formattedTags
            }

            return {
                section
            }
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
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 700px;
        text-align: left;
        margin: 0 auto;
        padding: 1em;
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