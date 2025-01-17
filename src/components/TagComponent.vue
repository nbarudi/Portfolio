<template>

    <div :style="cssVars" class="box">
        <img :src="iconSrc">
        <b>{{ tag?.name }}</b> 
        <b v-if="tagObject.perc">&nbsp;{{ tagObject?.perc }}%</b>
    </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import tags from "@/assets/tags.json";

    export default defineComponent({
        props: {
            tagObject: {
                type: Object,
                required: true
            }
        },

        setup({tagObject}){
            const tag = tags.find((t) => t.id == tagObject.name)

            var cVar = {
                "--tagColour": tag?.colour
            }
            var tColour = '255, 255, 255';

            if(tag && tag.textColour){
                tColour = tag.textColour
            }

            const cssVars = {
                ...cVar,
                "--textColour": tColour
            }

            let iconSrc: string = new URL(`../assets/img/tags/${tagObject.name}.png`, import.meta.url).href

            if(iconSrc.includes('undefined')) iconSrc = ''
            
            return {
                cssVars,
                tag,
                iconSrc,
                tagObject
            }
        }
    })
</script>

<style scoped>
    .box {
        min-width: 4em;
        min-height: 1.2em;
        background-color: rgb(var(--tagColour));
        border-radius: 5%;
        box-shadow: 0 2px 2px rgb(83, 73, 73);
        color: rgb(var(--textColour));
        padding-left: 2px;
        padding-right: 2px;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    img {
        height: 1.5em;
        width: 1.5em;
        padding-right: 2px;
    }
</style>