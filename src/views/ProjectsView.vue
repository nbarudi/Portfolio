<template>

    <p>
        This is a bunch of different projects that I have worked on over time. <br/>
        It consists of Class Work, Job Experience, and different Personal Projects that I have worked on <br />
        If I am happy about a project that I have worked on then this is where it usually ends up! <br />
        If you want more information about a project! Click on its card! <br/>
        <br/>
        Or! If you would like to <b>filter</b> the projects! Click any of the technologies below!
    </p>

    <div class="tags">
        <button 
            v-for="tag in sortedTags" 
            :key="tag.id" 
            @click="toggleTag(tag.id)" 
            :class="{ selected: selectedTags.includes(tag.id) }" 
            class="tag-button">
            <TagComponent :tagId="tag.id" />
        </button>
    </div>

    <div class="container">
        <CardComponent v-for="project in filteredProjects" :key="project.id" :project="project"/>
    </div>

</template>

<script lang="ts">
    import { defineComponent, ref, computed, onMounted } from 'vue';
    import CardComponent from '@/components/CardComponent.vue';
    import TagComponent from '@/components/TagComponent.vue';

    import projects from '@/assets/projects.json'
    import tags from '@/assets/tags.json'
    

    export default defineComponent({
        components: {
            CardComponent,
            TagComponent
        },

        setup() {
            const selectedTags = ref<string[]>([])

            const loadSelectedTags = () => {
                const storedTags = localStorage.getItem('selectedTags')
                if(storedTags) {
                    selectedTags.value = JSON.parse(storedTags)
                }
            }

            const saveSelectedTags = () => {
                localStorage.setItem('selectedTags', JSON.stringify(selectedTags.value))
            }

            const filteredProjects = computed(() => {
                if (selectedTags.value.length === 0) {
                    return projects;
                }
                return projects.filter(project =>
                    selectedTags.value.every(tag => project.tags.includes(tag))
                );
            });

            const toggleTag = (tag: string) => {
                if(selectedTags.value.includes(tag)) {
                    selectedTags.value = selectedTags.value.filter(t => t !== tag)
                }
                else {
                    selectedTags.value.push(tag)
                }
                saveSelectedTags()
            }

            onMounted(() => {
                loadSelectedTags()
            })

            const sortedTags = computed(() => {
                return tags.sort((a, b) => a.id.localeCompare(b.id));
            });

            return { sortedTags, filteredProjects, selectedTags, toggleTag}
        }
    })
</script>


<style scoped>
p {
    font-size: 20px;
    margin-bottom: 1rem;
}

.container {
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
    grid-gap: 1rem;
    padding: clamp(0px, 0.1vw, 5px);
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    background-color: #f5f5f500;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
}

.tag-button {
    background-color: #ffffff00;
    border: 1px solid #ddd;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    transition: background-color 0.3s, box-shadow 0.3s;
}

.tag-button:hover {
    background-color: #00ff0dc9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tag-button.selected {
    background-color: #00ff0dc9;
    color: rgba(255, 255, 255, 0);
    border-color: #00ff0dc9;
}
</style>