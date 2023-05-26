<template>
    <div class="section">
        <div class=content>
            <h1>{{ section.name }}</h1>
            <p v-for="descriptor in section.details">{{ descriptor }}</p>
            <hr class="rounded"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        props: {
            section: {
                required: true,
                type: Object
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
</style>