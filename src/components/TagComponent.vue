<template>

    <div :style="cssVars" class="box">
        <img :src="`../src/assets/img/tags/${tagId}.png`">
        <b>{{ tag?.name }}</b>
    </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import tags from "@/assets/tags.json";

    export default defineComponent({
        props: {
            tagId: {
                type: String,
                required: true
            }
        },

        setup({tagId}){

            const tag = tags.find((t) => t.id == tagId)

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

            var img = "";
            return {
                cssVars,
                tag
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